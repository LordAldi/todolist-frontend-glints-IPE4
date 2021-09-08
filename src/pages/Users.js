import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";

const Users = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios({
        url: "https://stooping-layers.000webhostapp.com/users.php",
        headers: { "Content-Type": "multipart/form-data" },
        method: "POST",
      });
      console.log("data", res.data);
      setUsers(res.data);
      setLoading(false);
    };

    fetchUser();
  }, []);
  console.log("loading", loading);
  console.log("users", users);
  return (
    <div className="user">
      <div className="user-head">
        <h1>Users</h1>
      </div>
      <div className="user-btn">
        <Button variant="primary">Add User</Button>
        <div className="search">
          <input
            type="text"
            id="header-search"
            placeholder="Search "
            name="s"
          />
        </div>
      </div>

      <div className="card-container">
        {loading && <div>Loading...</div>}
        {users &&
          users.map((user) => {
            return (
              <div className="card">
                <img
                  src={`https://avatars.dicebear.com/api/gridy/${user.nama}.svg`}
                  alt="Avatar"
                />
                <div className="user-info">
                  <h4>
                    <b>{user.nama}</b>
                  </h4>
                  <p>{user.role}</p>
                  <Button variant="primary">Detail</Button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Users;
