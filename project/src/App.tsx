import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
import AdminLayout from './components/admin/AdminLayout';
import ProtectedRoute from './components/admin/ProtectedRoute';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import ProjectList from './pages/admin/ProjectList';
import ProjectForm from './pages/admin/ProjectForm';
import Budgets from './pages/admin/BudgetList';

// Importações dos serviços
import EnergiaSolar from './pages/services/EnergiaSolar';
import AquecimentoSolar from './pages/services/AquecimentoSolar';
import Carregadores from './pages/services/Carregadores';
import InstalacoesEletricas from './pages/services/InstalacoesEletricas';
import SPDAAterramento from './pages/services/SPDAAterramento';
import MedicaoDiagnostico from './pages/services/MedicaoDiagnostico';
import Subestacoes from './pages/services/Subestacoes';
import EficienciaEnergetica from './pages/services/EficienciaEnergetica';
import IluminacaoPublica from './pages/services/IluminacaoPublica';
import LaudosPericias from './pages/services/LaudosperiCias';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  
  return (
    
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/projects" element={<Layout><Projects /></Layout>} />
          <Route path="/projects/:id" element={<Layout><ProjectDetail /></Layout>} />
          
          {/* Rotas de Serviços */}
          
          <Route path="/servicos/energia-solar" element={<Layout><EnergiaSolar /></Layout>} />
          <Route path="/servicos/aquecimento-solar" element={<Layout><AquecimentoSolar /></Layout>} />
          <Route path="/servicos/carregadores" element={<Layout><Carregadores /></Layout>} />
          <Route path="/servicos/instalacoes-eletricas" element={<Layout><InstalacoesEletricas /></Layout>} />
          <Route path="/servicos/spda-aterramento" element={<Layout><SPDAAterramento /></Layout>} />
          <Route path="/servicos/medicao-diagnostico" element={<Layout><MedicaoDiagnostico /></Layout>} />
          <Route path="/servicos/subestacoes" element={<Layout><Subestacoes /></Layout>} />
          <Route path="/servicos/eficiencia-energetica" element={<Layout><EficienciaEnergetica /></Layout>} />
          <Route path="/servicos/iluminacao-publica" element={<Layout><IluminacaoPublica /></Layout>} />
          <Route path="/servicos/laudos-pericias" element={<Layout><LaudosPericias /></Layout>} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            </ProtectedRoute>
          } />
          <Route path="/admin/projects" element={
            <ProtectedRoute>
              <AdminLayout>
                <ProjectList />
              </AdminLayout>
            </ProtectedRoute>
          } />
          <Route path="/admin/projects/new" element={
            <ProtectedRoute>
              <AdminLayout>
                <ProjectForm />
              </AdminLayout>
            </ProtectedRoute>
          } />
          <Route path="/admin/projects/edit/:id" element={
            <ProtectedRoute>
              <AdminLayout>
                <ProjectForm />
              </AdminLayout>
            </ProtectedRoute>
          } />
          <Route path="/admin/budgets" element={
            <ProtectedRoute>
              <AdminLayout>
                <Budgets />
              </AdminLayout>
            </ProtectedRoute>
          } />
        </Routes>
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      </Router>
    </AuthProvider>
  );
}

export default App;