import { createContext, useContext } from 'react';

export const LoginInfoContext = createContext(null);

export function useLoginInfoContext() {
  return useContext(LoginInfoContext);
}
