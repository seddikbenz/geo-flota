import { observable, reaction, action, decorate } from "mobx";
import agent from "../agent";

class companyStore {
  companies = []
  loading = false
  message = {
    type: '',
    body: ''
  }

  getAll() {
    this.loading = true;
    return agent.Company.all()
      .then((response) => {return response.data})
      .then(action((data) => {
        this.message.body = data.message
        this.message.type = 'success'
        this.companies = data.data
      }))
      .catch((error)=>{
        this.message.body = error.response !== undefined ? error.response.data.message : error.message
        this.message.type = 'error'
        console.dir(error)
      })
      .finally(action(() => { this.loading = false }))
  }

}

companyStore = decorate(companyStore, {
  companies: observable,
  loading: observable,
  message: observable,
});

export default new companyStore();
