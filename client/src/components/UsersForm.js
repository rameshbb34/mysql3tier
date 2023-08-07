import React, { useState } from "react";
import axios from "axios";

function UsersForm() {
  let serialNo = 0;
  let [users, setUsers] = useState([]);
  let getDataFromServer = async () => {
    let response = await axios.get("http://localhost:2222/getUsers");
    console.log(response.data);
    setUsers(response.data);
  };

  return (
    <div className="App">
      <button
        type="button"
        onClick={() => {
          getDataFromServer();
        }}
      >
        Get Data
      </button>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Password</th>
            <th>ProfilePic</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            serialNo++;
            return (
              <tr key={serialNo}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.contatc}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.profilePic}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}

export default UsersForm;
