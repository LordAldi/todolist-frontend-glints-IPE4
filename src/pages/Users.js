import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import useModal from "../hooks/useModal";
import Modal from "../components/Modal";

const Users = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [modalUsers, setModalUser] = useState({
    email: "",
    username: "",
    role: "",
  });
  const [loading, setLoading] = useState(true);
  const { isVisible, toggleModal } = useModal();
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios({
        url: "https://stooping-layers.000webhostapp.com/users.php",
        headers: { "Content-Type": "multipart/form-data" },
        method: "POST",
      });
      console.log("data", res.data);
      res.data && setUsers(res.data);
      setLoading(false);
    };

    fetchUser();
  }, []);
  return (
    <div className="user">
      <div className="user-head">
        <h1>Users</h1>
        <Modal
          user={modalUsers}
          isVisible={isVisible}
          hideModal={toggleModal}
        />
      </div>
      <div className="user-btn">
        <div className="search">
          <input
            type="text"
            id="header-search"
            placeholder="Search "
            name="s"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
      </div>

      <div className="card-container">
        {loading && <div>Loading...</div>}
        {users &&
          users
            .filter((user) => {
              if (searchTerm === "") {
                return user;
              } else if (
                user.nama.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return user;
              }
            })
            .map((user) => {
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
