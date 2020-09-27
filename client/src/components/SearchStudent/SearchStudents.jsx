import React, { Component } from "react";
import "./SearchStudents.css";

class SearchStudents extends Component {
  state = { value: "" };

  onChangeHandler = e => {
    this.setState({ value: e.target.value }, () => {
      this.props.searchStudents(this.state.value);
    });
  }

  render() {
    return (
      <div>
      <input
        type="text"
        placeholder="search contacts..."
        name="name"
        onChange={ this.onChangeHandler }
        className="Search-Student-Input"
      />
      </div>
    );
  }
}

export default SearchStudents;
