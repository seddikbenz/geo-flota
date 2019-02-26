import { observable, reaction, action, decorate } from "mobx";
import agent from "../agent";
import commonStore from "./commonStore";

class companyStore {
  selectedIndex = 0;
  company = {
    id: 0,
    name: "",
    logo: ""
  };
  companies = [];
  loading = false;
  message = {
    type: "",
    body: "",
    show: false
  };
  hideMessage(){
    this.message = {
      type: '',
      body: '',
      show: false
    }
  }
  showMessage(message){
    this.message = message
  }
  getCompany(id) {
    this.loading = true;
    return agent.Company.getCompany(id)
      .then(response => {
        return response.data;
      })
      .then(
        action(data => {
          this.company = data.data
        })
      )
      .catch(error => {
        let body =
          error.response !== undefined
            ? error.response.data.message
            : error.message;
        this.showMessage({
          type: 'error',
          body: body,
          show: true
        })
      })
      .finally(
        action(() => {
          this.loading = false;
        })
      );
  }

  getAll() {
    this.loading = true;
    return agent.Company.all()
      .then(response => {
        return response.data;
      })
      .then(
        action(data => {
          this.companies = data.data;
        })
      )
      .catch(error => {
        let body =
          error.response !== undefined
            ? error.response.data.message
            : error.message;
        this.showMessage({
          type: 'error',
          body: body,
          show: true
        })
      })
      .finally(
        action(() => {
          this.loading = false;
        })
      );
  }
  create() {
    this.loading = true;
    return agent.Company.create(this.company.name, this.company.logo)
      .then(response => {
        return response.data;
      })
      .then(
        action(data => {
          this.showMessage({
            type: 'success',
            body: data.message,
            show: true
          })
        })
      )
      .catch(error => {
        let body =
          error.response !== undefined
            ? error.response.data.message
            : error.message;
        this.showMessage({
          type: 'error',
          body: body,
          show: true
        })
      })
      .finally(
        action(() => {
          this.loading = false;
          //commonStore.history.push('/companies')
        })
      );
  }

  delete(id) {
    if (this.companies.length !== 0) {
      this.loading = true;
      return agent.Company.delete(id)
        .then(response => {
          return response.data;
        })
        .then(
          action(data => {
            this.showMessage({
              type: 'success',
              body: data.message,
              show: true
            })
          })
        )
        .catch(error => {
          let body =
            error.response !== undefined
              ? error.response.data.message
              : error.message;
          this.showMessage({
            type: 'error',
            body: body,
            show: true
          })
        })
        .finally(action(() => this.getAll()));
    }
  }

  update() {
    this.loading = true;
    return agent.Company.update(this.company)
      .then(response => {
        return response.data;
      })
      .then(
        action(data => {
          this.showMessage({
            type: 'success',
            body: data.message,
            show: true
          })
        })
      )
      .catch(error => {
        let body =
          error.response !== undefined
            ? error.response.data.message
            : error.message;
        this.showMessage({
          type: 'error',
          body: body,
          show: true
        })
      })
      .finally(
        action(() => {
          this.loading = false;
          //commonStore.history.push('/companies')
        })
      );
  }
}

companyStore = decorate(companyStore, {
  selectedIndex: observable,
  company: observable,
  companies: observable,
  loading: observable,
  message: observable,
});

export default new companyStore();
