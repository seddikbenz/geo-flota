import { observable, reaction, action, decorate } from "mobx";

import agent from '../agent';

class CommonStore {
  appName = 'geo-flota';
  version = 'v-1.0.1';
  token = window.localStorage.getItem('jwt');
  appLoaded = false;

  constructor() {
    reaction(
      () => this.token,
      token => {
        if (token) {
          window.localStorage.setItem('jwt', token);
        } else {
          window.localStorage.removeItem('jwt');
        }
      }
    );
  }


  setToken(token) {
    this.token = token;
  }

  setAppLoaded() {
    this.appLoaded = true;
  }

}

CommonStore = decorate(CommonStore, {
  appName: observable,
  version: observable,
  token: observable,
  appLoaded: observable,
  setToken: action,
  setAppLoaded: action
});

export default new CommonStore();
