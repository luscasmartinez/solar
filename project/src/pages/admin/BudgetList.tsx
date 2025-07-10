import React, { useEffect, useState } from 'react';
import { 
  Mail, 
  Phone, 
  Search,
  Filter,
  Check,
  X,
  Clock,
  Trash2
} from 'lucide-react';
import { collection, getDocs, query, orderBy, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import toast from 'react-hot-toast';

interface Budget {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: string;
  source?: string;
  createdAt: any;
  status: string;
  read: boolean;
}

const BudgetList: React.FC = () => {
  // Estados
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [filteredBudgets, setFilteredBudgets] = useState<Budget[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  // Busca orçamentos no Firebase
  const loadBudgets = async () => {
    try {
      const budgetsQuery = query(
        collection(db, 'budgets'),
        orderBy('createdAt', 'desc')
      );
      const querySnapshot = await getDocs(budgetsQuery);
      
      const budgetsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Budget[];
      
      setBudgets(budgetsData);
    } catch (error) {
      console.error('Erro ao buscar orçamentos:', error);
      toast.error('Erro ao carregar orçamentos');
    } finally {
      setLoading(false);
    }
  };

  // Filtra orçamentos
  const filterBudgets = () => {
    let filtered = budgets;

    if (statusFilter !== 'all') {
      filtered = filtered.filter(budget => budget.status === statusFilter);
    }

    if (searchTerm) {
      filtered = filtered.filter(budget =>
        budget.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        budget.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        budget.phone.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredBudgets(filtered);
  };

  // Atualiza status do orçamento
  const updateStatus = async (id: string, newStatus: string) => {
    try {
      await updateDoc(doc(db, 'budgets', id), { 
        status: newStatus,
        read: true 
      });
      toast.success('Status atualizado!');
      loadBudgets();
    } catch (error) {
      toast.error('Erro ao atualizar status');
    }
  };

  // Exclui orçamento
  const handleDelete = async (id: string, name: string) => {
    if (window.confirm(`Tem certeza que deseja excluir a solicitação de ${name}?`)) {
      try {
        await deleteDoc(doc(db, 'budgets', id));
        toast.success('Solicitação excluída com sucesso!');
        loadBudgets();
      } catch (error) {
        toast.error('Erro ao excluir solicitação');
      }
    }
  };

  // Efeitos
  useEffect(() => {
    loadBudgets();
  }, []);

  useEffect(() => {
    filterBudgets();
  }, [budgets, searchTerm, statusFilter]);

  // Componentes auxiliares
  const StatusBadge = ({ status }: { status: string }) => {
    const baseClasses = "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium";
    
    switch (status) {
      case 'approved':
        return (
          <span className={`${baseClasses} bg-green-100 text-green-800`}>
            <Check className="h-3 w-3 mr-1" />
            Aprovado
          </span>
        );
      case 'rejected':
        return (
          <span className={`${baseClasses} bg-red-100 text-red-800`}>
            <X className="h-3 w-3 mr-1" />
            Rejeitado
          </span>
        );
      default:
        return (
          <span className={`${baseClasses} bg-yellow-100 text-yellow-800`}>
            <Clock className="h-3 w-3 mr-1" />
            Pendente
          </span>
        );
    }
  };

  const TypeLabel = ({ type }: { type: string }) => {
    const types: Record<string, string> = {
      residential: 'Residencial',
      commercial: 'Comercial',
      industrial: 'Industrial',
      rural: 'Rural'
    };
    
    return <>{types[type] || type}</>;
  };

  // Renderização condicional
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Solicitações de Orçamento</h1>
          <p className="text-gray-600">Gerencie as solicitações recebidas</p>
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar..."
              className="pl-10 w-full p-2 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="h-5 w-5 text-gray-400" />
            </div>
            <select
              className="pl-10 w-full p-2 border rounded-lg"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">Todos</option>
              <option value="pending">Pendentes</option>
              <option value="approved">Aprovados</option>
              <option value="rejected">Rejeitados</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tabela */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {filteredBudgets.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Data</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cliente</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contato</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tipo</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredBudgets.map((budget) => (
                  <tr key={budget.id} className={!budget.read ? 'bg-blue-50' : ''}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(budget.createdAt?.seconds * 1000).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-sm text-gray-900">
                      {budget.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-gray-400" />
                        {budget.email}
                      </div>
                      <div className="flex items-center mt-1">
                        <Phone className="h-4 w-4 mr-2 text-gray-400" />
                        {budget.phone}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <TypeLabel type={budget.type} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={budget.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => updateStatus(budget.id, 'approved')}
                          className="text-green-600 hover:text-green-800"
                          title="Aprovar"
                        >
                          <Check className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => updateStatus(budget.id, 'rejected')}
                          className="text-red-600 hover:text-red-800"
                          title="Rejeitar"
                        >
                          <X className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(budget.id, budget.name)}
                          className="text-gray-600 hover:text-gray-800"
                          title="Excluir"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-8 text-center text-gray-500">
            Nenhuma solicitação encontrada
          </div>
        )}
      </div>
    </div>
  );
};

export default BudgetList;