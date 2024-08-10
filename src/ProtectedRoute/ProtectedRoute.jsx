import { useApp } from '../Context/AppContext';

export default function ProtectedRoute({ nav, reverse, children }) {
  const { loggedInUser } = useApp();
  if (!reverse) {
    return loggedInUser ? children : nav;
  }
  return loggedInUser ? nav : children;
}
