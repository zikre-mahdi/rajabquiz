"use client";

import { useState, useEffect } from "react";
import Users from "./users";

export default function ManageUsers() {
  const userTypes = ["Admin", "Editor", "Viewer"];
  const [data, setData] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const [userName, setUserName] = useState("");
  const [userType, setUserType] = useState("Viewer");

  const createUser = async (userName, userType) => {
    setIsUpdated(false);
    fetch("http://localhost:3000/api/adduser", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ userName, userType }),
    }).then((res) => {
      setIsUpdated(true);
      console.log(res);
    });
  };

  const deleteUser = async (userName, userType) => {
    setIsUpdated(false);
    fetch("http://localhost:3000/api/deleteuser", {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ userName, userType }),
    }).then((res) => {
      setIsUpdated(true);
      console.log(res);
    });
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((result) => result.json())
      .then((data) => {
        console.log("Data is set: ", data);
        setData(data);
      });
  }, [isUpdated]);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          User name:{" "}
          <input
            type="text"
            name="user"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <br />
        <label>
          User type:{" "}
          <select name="type" onChange={(e) => setUserType(e.target.value)}>
            {userTypes.map((type) => (
              <option value={type} key={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button onClick={() => createUser(userName, userType)}>
          Create User
        </button>
        <button onClick={() => deleteUser(userName, userType)}>
          delete User
        </button>
      </form>
      <table border={1}>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.data &&
            data.data.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td><button onClick={() => deleteUser(item.name, item.type)}>
          delete {item.name}
        </button></td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
