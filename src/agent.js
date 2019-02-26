import axios from 'axios'
import commonStore from './stores/commonStore';


const API_ROOT = 'https://geo-flota.herokuapp.com/api';

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

const Company = {
  getCompany: (id) => requests.get('/companies/' + id),
  all: () => requests.get('/companies'),
  create: (name, logo) => requests.post('/companies', { name, logo } ),
  delete: (id) => requests.delete('/companies/' + id),
  update: (company) => requests.put('/companies/' + company.id, {...company})
};


export default {
  Auth,
  Company
};
