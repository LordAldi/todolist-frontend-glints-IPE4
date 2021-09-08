import React from 'react';
import { Button, Card } from 'react-bootstrap';

 
const Users = (props)=> {
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

    <div className= "card-container">
    <div className="card">
        <img src="https://avatars.dicebear.com/api/gridy/afan.svg"  alt="Avatar" />
        <div class="user-info">
            <h4><b>User 1</b></h4> 
            <p>Super Admin</p>
                <Button variant="primary">Detail</Button>
        </div>
     </div>
    
     <div className="card">
        <img src="https://avatars.dicebear.com/api/gridy/afan.svg"  alt="Avatar" />
        <div class="user-info">
            <h4><b>User 1</b></h4> 
            <p>Super Admin</p>
                <Button variant="primary">Detail</Button>
        </div>
     </div>
    </div>

    </div>
    )
};

export default Users
