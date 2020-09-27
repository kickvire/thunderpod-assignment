import React, { Component } from "react";
import './AddStudent.css';
import axios from "axios";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
class AddStudent extends Component {
  state = {
    name: "",
    email: "",
    phoneNumber: "",
    response: ""
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  addStudent = async e => {
    e.preventDefault();
    try {
      const newStudent = await axios.post("https://intouchapp-backend.herokuapp.com/api/students/", {
          name: this.refs.name.value,
          email: this.refs.email.value,
          phoneNumber: this.refs.phoneNumber.value
        }
      );

      toast("Student " + newStudent.data.newStudent.name + " created successfully" ,{ type: toast.TYPE.SUCCESS, autoClose: 3000 });
      window.location.reload(true);

    } catch (err) {
      toast(err.message ,{ type: toast.TYPE.ERROR, autoClose: 3000 });
    }
  };

  render() {
    return (
      <div className="AddStudent-Wrapper">
        <h1>Add Contacts</h1>
        <form onSubmit={this.addStudent}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Enter the name of the mentor"
            name="name"
            onChange={this.onChangeHandler}
            ref="name"
            className="Add-Student-Input"
            required
            minLength="3"
            maxLength="33"
            id="name"
          />
          <label htmlFor="email">email: <b>(must be a valid email)</b></label>
          <input
            type="text"
            placeholder="enter your email here"
            name="email"
            onChange={this.onChangeHandler}
            ref="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            className="Add-Student-Input"
            required
            id="email"
          />
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            placeholder="Enter your contact number"
            name="phoneNumber"
            onChange={this.onChangeHandler}
            ref="phoneNumber"
            className="Add-Student-Input"
            required
            id="enrollnumber"
            
          />
          <button type="submit" className="Add-Student-Submit fa fa-plus" > </button>
          <button type="reset" className="Add-Student-Reset fa fa-refresh"></button>
          <Link to ={'/'}><button type="submit" className="Add-Student-Submit fa fa-eye" > </button></Link>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default AddStudent;
