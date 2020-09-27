import React from 'react';
import './Student.css';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';


const Student = ({ _id, name, email, phoneNumber, removeStudent }) => {

  return(
    <tr>
      <td> <Avatar googleId={118096717852922241760} size="20" round={true} /></td>
      <td>{ name }</td>
      <td>{ email }</td>
      <td>{ phoneNumber }</td>
      <td>
        <button onClick={ () => removeStudent(_id) } className="Action-Button fa fa-trash"></button>
        <Link to={{ pathname: '/edit', search: _id }}>
         <button className="Action-Button fa fa-pencil"></button>
        </Link>

        {/* <Link to={{ pathname: '/task', search: _id }}> 
        <button type="submit" className="Add-Student-Submit fa fa-plus" const path = '/'></button>
        </Link> */}
        
      </td>

    </tr>
  );
};

export default Student;
