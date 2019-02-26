import { observable, reaction, action, decorate } from "mobx";
import agent from "../agent";
import store from "./index";

class companyStore {
  selectedIndex = 0;
  company = {
    name: "",
    logo: ""
  };
  companies = [
    {
      id: 10,
      name: "geo-flota",
      logo: ""
    }
  ];
  loading = false;
  message = {
    type: "",
    body: ""
  };

  getAll() {
    this.loading = true;
    return agent.Company.all()
      .then(response => {
        return response.data;
      })
      .then(
        action(data => {
          this.message.body = data.message;
          this.message.type = "success";
          this.companies = data.data;
        })
      )
      .catch(error => {
        this.message.body =
          error.response !== undefined
            ? error.response.data.message
            : error.message;
        this.message.type = "error";
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
          this.message.body = data.message;
          this.message.type = "success";
        })
      )
      .catch(error => {
        this.message.body =
          error.response !== undefined
            ? error.response.data.message
            : error.message;
        this.message.type = "error";
      })
      .finally(
        action(() => {
          this.loading = false;
          this.companyStore.company = {
            name: "",
            logo: ""
          };
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
            this.message.body = data.message;
            this.message.type = "success";
          })
        )
        .catch(error => {
          this.message.body =
            error.response !== undefined
              ? error.response.data.message
              : error.message;
          this.message.type = "error";
        })
        .finally(action(() => this.getAll()));
    }
  }
}

companyStore = decorate(companyStore, {
  selectedIndex: observable,
  company: observable,
  companies: observable,
  loading: observable,
  message: observable
});

export default new companyStore();
