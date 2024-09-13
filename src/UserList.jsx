
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"; 

const UserList = () => {
  // State to hold the list of users
  const [listOfUsers, setListOfUsers] = useState([]);

  // Fetch user data from the API using useEffect
  useEffect(() => {
    // Define an asynchronous function to fetch data
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setListOfUsers(response.data);
      } catch (error) {
        console.error("Error fetching the users:", error);
      }
    };

    // Call the function
    fetchUsers();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="user-list">
      <h1>User List</h1>
      <ul>
        {listOfUsers.map((user) => (
          <li key={user.id} className="user-item">
            <h2>{user.name}</h2>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a
                href={`http://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {user.website}
              </a>
            </p>
            <div className="address">
              <h3>Address:</h3>
              <p>
                {user.address.suite} {user.address.street}
              </p>
              <p>
                {user.address.city}, {user.address.zipcode}
              </p>
            </div>
            <div className="company">
              <h3>Company:</h3>
              <p>
                <strong>Name:</strong> {user.company.name}
              </p>
              <p>
                <strong>Catchphrase:</strong> {user.company.catchPhrase}
              </p>
              <p>
                <strong>BS:</strong> {user.company.bs}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
