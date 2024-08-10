export default function useLogin(port = '8090') {
  return async function loginUser(username, password) {
    const response = await fetch(
      `http://127.0.0.1:${port}/api/collections/users/auth-with-password`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identity: username,
          password: password,
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Login failed');
    }

    const res = await response.json();
    console.log(res);
    return res;
  };
}
