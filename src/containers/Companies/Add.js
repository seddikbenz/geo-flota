import React, { Component } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

import Spinner from "../../components/Spinner";

import store from "../../stores";

import "./style.scss";

class Add extends Component {
  componentDidMount() {}
  submit(e) {
    e.preventDefault();
  }
  render() {
    if (store.companyStore.loading) {
      return (
        <div className="window-content center">
          <Spinner />
        </div>
      );
    }
    return (
      <div
        className="window-content"
        style={{ padding: 10, flexDirection: "column" }}
      >
        <h4>Add new company</h4>
        <form>
          <div className="form-group">
            <label>Company name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Company name"
            />
          </div>
          <div className="form-actions">
            <button
              onClick={this.submit}
              type="submit"
              className="btn btn-form btn-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default observer(Add);
