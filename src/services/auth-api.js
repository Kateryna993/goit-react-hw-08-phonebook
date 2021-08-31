import axios from 'axios';

// name: "Lussie", email: "luilee@gmail.com", password: "Zb789kjk"
// {name: "Karen", email: "karen@gmail.com", password: "Zghjkh8"}
// {name: "Karol", email: "dfkarl@yahoo.com", password: "Wfghj8907"}

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function registerUser(credentials) {
  const { data } = await axios.post('/users/signup', credentials);
  console.log(data);
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

export async function fetchCurrentUser() {
  const { data } = await axios.get('/users/current');
  return data;
}
