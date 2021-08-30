import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function registerUser(credentials) {
  const { data } = await axios.post('/users/signup', credentials);
  return data;
}

export async function loginUser(credentials) {
  const { data } = await axios.post('/users/login', credentials);
  return data;
}

export async function logoutUser() {
  const { data } = await axios.post('/users/logout');
  return data;
}

// export async function fetchCurrentUser() {
//   const data = await axios.get('/users/current');
//   return data;
// }
