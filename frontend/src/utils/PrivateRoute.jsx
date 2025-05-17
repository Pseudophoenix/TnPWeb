import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  console.log(`==========${user}`);
  if (!user) {
    return <Navigate to="/student-login" replace />;
  }
  
  return children;
};

export default PrivateRoute;