import React, { Component } from "react";
import './EditStudent.css';
import axios from "axios";
import { withRouter } from 'react-router'
import {toast, ToastContainer} from "react-toastify";
import { Link } from 'react-router-dom';

class EditStudent extends Component {
  state = {
    id: '',
    name: "",
    email: "",
    phoneNumber: "",
    response: ""
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  async componentDidMount() {
    try {
    let search =  this.props.location.search,
      id = search.substring(1, search.length);
    const updateStudent = await axios(`/api/students/${id}`);
    const { name, email, phoneNumber } = updateStudent.data.student;
    this.setState({ id, name, email, phoneNumber  });
    } catch (err) {
      this.setState({ response: "Student not found!" })
    }
  };

  updateStudentHandler = async (e) => {
    e.preventDefault();
    try {
      const student = await axios.put(`/api/students/${this.state.id}`, {
        name: this.refs.name.value,
        email: this.refs.email.value,
        phoneNumber: this.refs.phoneNumber.value
      });
      toast(student.data.message ,{ type: toast.TYPE.INFO, autoClose: 3000 });
      
    } catch (err) {
      toast(err.message ,{ type: toast.TYPE.ERROR, autoClose: 3000 });
    }
  };

  render() {
    if (this.state.response === "Student not found!")
      return <h1>Contact not found!</h1>
    return (
      <div className="Edit-Student-Wrapper">
        <h1>Edit contact</h1>
        <form onSubmit={this.updateStudentHandler}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Name..."
            value={ this.state.name }
            name="name"
            onChange={this.onChangeHandler}
            ref="name"
            required
            className="Edit-Student-Input"
            id="name"
          />
          <label htmlFor="email">Email: <b>(must be a valid email)</b></label>
          <input
            type="email"
            placeholder="Enter your email here"
            value={ this.state.email }
            name="email"
            required
            onChange={this.onChangeHandler}
            ref="email"
            className="Edit-Student-Input"
            id="email"
          />
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            placeholder="Enter the student's enrollment number"
            value={ this.state.phoneNumber}
            name="phoneNumber"
            required
            onChange={this.onChangeHandler}
            ref="phoneNumber"
            className="Edit-Student-Input"
            id="enrollnumber"
            
          />
          <button type="submit" className="Edit-Student-Submit fa fa-pencil"></button>
          <Link to ={'/'}><button type="submit" className="Add-Student-Submit fa fa-eye" > </button></Link>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default withRouter(EditStudent);
