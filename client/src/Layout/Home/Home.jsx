import React, { Component } from "react";
import "./Home.css";
import axios from "axios";
import { PropagateLoader } from 'react-spinners';
// Components
import Student from "../../components/Student/Student";
import SearchStudents from "../../components/SearchStudent/SearchStudents";



class Home extends Component {
  state = {
    data: null,
    allStudents: null,
    error: ""
  };

  pageHandler = (offset) =>{
    this.setState(({ paging }) => ({
      paging: { ...paging, offset: offset }
    }));
 }

  async componentDidMount() {
    try {
      const students = await axios("https://intouchapp-backend.herokuapp.com/api/students/");
      this.setState({ data: students.data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  removeStudent = async id => {
    try {
      const studentRemoved = await axios.delete(`https://intouchapp-backend.herokuapp.com/api/students/${id}`);
      const students = await axios("https://intouchapp-backend.herokuapp.com/api/students/");
      this.setState({ data: students.data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

  searchStudents = async username => {
    let allStudents = [...this.state.data.students];
    if (this.state.allStudents === null) this.setState({ allStudents });

    let students = this.state.data.students.filter(({ name }) =>
      name.toLowerCase().includes(username.toLowerCase())
      // phoneNumber.toLowerCase().includes(username.toLowerCase())
      
    );

   


    
    if (students.length > 0) this.setState({ data: { students } });

    

    if (username.trim() === "")
      this.setState({ data: { students: this.state.allStudents } });

    
  };

  //
  searchStudentsByNumber = async username => {
    let allStudents = [...this.state.data.students];
    if (this.state.allStudents === null) this.setState({ allStudents });

    let students = this.state.data.students.filter(({ phoneNumber }) =>
      phoneNumber.toLowerCase().includes(username.toLowerCase())
    );
    if (students.length > 0) this.setState({ data: { students } });

    if (username.trim() === "")
      this.setState({ data: { students: this.state.allStudents } });
  };
 
  //

  render() {
    let students;

    if (this.state.data)
      students =
        this.state.data.students &&
        this.state.data.students.map(student => (
          <Student key={student._id} {...student} removeStudent={this.removeStudent} />
        ));
    else return <div className="Spinner-Wrapper"> <PropagateLoader color={'#333'} /> </div>;

    if (this.state.error) return <h1>{this.state.error}</h1>;
    if (this.state.data !== null)
      if (!this.state.data.students.length)
        return <h1 className="No-Students">No contacts!</h1>;

    return (
      <div className="Table-Wrapper">
        <h1>All Contacts</h1>
        <p style={{marginRight:"72%",marginBottom:"0"}}>Filter by name</p>
        <SearchStudents searchStudents={this.searchStudents} />
        <p style={{marginRight:"68%",marginBottom:"0"}}>Filter by Phone Number</p>
        <SearchStudents searchStudents={this.searchStudentsByNumber} />
        <table className="Table">
          <thead>
            <tr>
            <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{students}</tbody>
        </table>
      </div>
    );
  }
}

export default Home;
