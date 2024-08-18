import pb from '../lib/Pocketbase';

export default function useLogin(port = '8090') {
  return async function loginUser(username, password) {
    try {
      const authData = await pb
        .collection('users')
        .authWithPassword(username, password);
      return authData;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error; // Re-throw the error to handle it in the calling code
    }
  };
}
