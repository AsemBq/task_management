import { useLocation } from 'react-router-dom';

import { useUser } from '../../Context/UserContext';

export default function ProtectedRoute({ nav, reverse, children }) {
  const { username } = useUser();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');

  if (!reverse) {
    if (!username) return nav;

    return children;
  }

  return username ? nav : children;
}
