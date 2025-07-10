import { useAuth } from '../../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import { CircularProgress } from '@mui/material'; // Ou seu componente de loading preferido

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress /> {/* Ou outro indicador de loading */}
      </div>
    );
  }

  if (!user) {
    // Redireciona para /admin/login mantendo a localização de origem
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;