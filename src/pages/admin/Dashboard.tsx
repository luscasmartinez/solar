import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { projectService } from '../../services/projectService';
import { Project } from '../../types/project';
import { 
  FolderOpen, 
  Plus, 
  TrendingUp, 
  Calendar,
  BarChart3
} from 'lucide-react';
import toast from 'react-hot-toast';

const Dashboard: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const projectsData = await projectService.getAllProjects();
      setProjects(projectsData);
    } catch (error) {
      toast.error('Erro ao carregar projetos');
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    {
      title: 'Total de Projetos',
      value: projects.length,
      icon: <FolderOpen size={24} />,
      color: 'bg-blue-500'
    },
    {
      title: 'Projetos Residenciais',
      value: projects.filter(p => p.category === 'residential').length,
      icon: <TrendingUp size={24} />,
      color: 'bg-green-500'
    },
    {
      title: 'Projetos Comerciais',
      value: projects.filter(p => p.category === 'commercial').length,
      icon: <BarChart3 size={24} />,
      color: 'bg-purple-500'
    },
    {
      title: 'Este Mês',
      value: projects.filter(p => {
        const now = new Date();
        const projectDate = new Date(p.completedAt);
        return projectDate.getMonth() === now.getMonth() && 
               projectDate.getFullYear() === now.getFullYear();
      }).length,
      icon: <Calendar size={24} />,
      color: 'bg-orange-500'
    }
  ];

  const recentProjects = projects.slice(0, 5);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Visão geral dos seus projetos</p>
        </div>
        <Link
          to="/admin/projects/new"
          className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
        >
          <Plus size={20} className="mr-2" />
          Novo Projeto
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-soft p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg text-white`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Projects */}
      <div className="bg-white rounded-xl shadow-soft">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">Projetos Recentes</h2>
            <Link
              to="/admin/projects"
              className="text-primary-500 hover:text-primary-600 text-sm font-medium"
            >
              Ver todos
            </Link>
          </div>
        </div>
        
        {recentProjects.length > 0 ? (
          <div className="divide-y divide-gray-200">
            {recentProjects.map((project) => (
              <div key={project.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900">{project.title}</h3>
                      <p className="text-sm text-gray-600">{project.category} • {project.power}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">
                      {new Date(project.completedAt).toLocaleDateString('pt-BR')}
                    </p>
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      project.category === 'residential' ? 'bg-blue-100 text-blue-800' :
                      project.category === 'commercial' ? 'bg-green-100 text-green-800' :
                      project.category === 'rural' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center">
            <FolderOpen size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum projeto encontrado</h3>
            <p className="text-gray-600 mb-4">Comece criando seu primeiro projeto</p>
            <Link
              to="/admin/projects/new"
              className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg inline-flex items-center transition-colors"
            >
              <Plus size={20} className="mr-2" />
              Criar Projeto
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;