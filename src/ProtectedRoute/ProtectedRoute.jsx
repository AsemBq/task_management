import { Navigate, useLocation } from 'react-router-dom';
import { useApp } from '../Context/AppContext';

export default function ProtectedRoute({ nav, reverse, children }) {
  const { loggedInUser } = useApp();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');

  if (!reverse) {
    if (!loggedInUser) return nav;

    if (location.pathname === '/edit' && !id) {
      return <Navigate to="/edit?id=0" replace />;
    }
    return children;
  }

  return loggedInUser ? nav : children;
}
