import React, { Component } from "react";
import { observer } from "mobx-react";
import { Link, Route } from "react-router-dom";

import store from "../../stores";

import "./style.scss";

class Edit extends Component {
  state = {
    company: {
      id: undefined,
      name: "no name",
      logo: ""
    }
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    let company = store.companyStore.companies.find(c => c.id == id);
    if (company !== undefined) {
      this.setState({ company });
    }
  }
  submit(e) {
    e.preventDefault();
    // TODO implement function to update compnay
  }
  render() {
    if (this.state.company.id === undefined) {
      return <div className="window-content">not found</div>;
    }
    return (
      <div className="window-content edit-company">
        <form>
          <div className="form-group">
            <label>
              Company name <span className="required">*</span>
            </label>
            <input
              onChange={e =>
                this.setState({
                  company: { ...this.state.company, name: e.target.value }
                })
              }
              value={this.state.company.name}
              type="text"
              className="form-control"
              placeholder="Company name"
            />
          </div>
          <div className="form-group">
            <label>Company logo image 255 * 255</label>
            <input
              type="file"
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

export default observer(Edit);
