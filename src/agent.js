import axios from 'axios'
import commonStore from './stores/commonStore';


const API_ROOT = 'http://localhost:8000/api';

let requests = axios.create({
  baseURL: API_ROOT,
  headers: {
    'Authorization': `Bearer ${commonStore.token}`
  }
});

const Auth = {
  current: () => requests.get('/auth/user'),
  login: (email, password) => requests.post('/auth/login', { email, password } ),
  register: (username, email, password) => requests.post('/auth/register', { username, email, password }),
  save: (user) => requests.put('/auth/user', { user })
};



export default {
  Auth,
};
