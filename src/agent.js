import axios from 'axios'
import commonStore from './stores/commonStore';
import authStore from './stores/authStore';


const API_ROOT = 'http://127.0.0.1:8000/api';
const requests = axios.create({
  baseURL: API_ROOT,
  headers: {
    'Authorization': `bearer ${commonStore.token}`
  }
});

const Auth = {
  current: () => requests.get(`/user?token=${commonStore.token}`),
  login: (email, password) =>
    requests.post('/users/login', { user: { email, password } }),
  register: (username, email, password) =>
    requests.post(`/users?token=${commonStore.token}`, { user: { username, email, password } }),
  save: (user) =>
    requests.put('/user', { user })
};


export default {
  Auth,
};
