export const login = (username, password) => ({
  type: 'LOGIN',
  payload: { username, password }
});

export const logout = () => ({ type: 'LOGOUT' });

export const register = (user) => ({
  type: 'REGISTER',
  payload: user
});