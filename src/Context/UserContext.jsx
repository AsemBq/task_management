import { createContext, useContext, useEffect, useState } from 'react';
import pb from '../lib/Pocketbase';
const initState = {
  name: null,
  username: null,
  token: null,
  userId: null,
};

const getInitialState = () => {
  const user = localStorage.getItem('user');
  if (user) {
    return JSON.parse(user);
  }
  return initState;
};

const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [userState, setUserState] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(userState));
  }, [userState]);

  const logUserIn = (name, username, token, userId) => {
    setUserState({
      name: name,
      username: username,
      token: token,
      userId: userId,
    });
  };

  const logUserOut = () => {
    pb.authStore.clear();
    setUserState({
      name: null,
      username: null,
      token: null,
    });
  };

  return (
    <UserContext.Provider value={{ logUserIn, logUserOut, ...userState }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

export default UserContextProvider;
