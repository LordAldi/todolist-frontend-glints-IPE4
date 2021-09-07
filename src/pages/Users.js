import React from 'react';
import { Button, Card } from 'react-bootstrap';

 
const Users = ()=> {
    return (
        <div>
            <div>
            <h1>Users</h1>
            </div>
        <div>
            <Button variant="primary">Add User</Button>
        </div>

        <div>
        <form action="/" method="get">
            <input
                type="text"
                id="header-search"
                placeholder="Search "
                name="s" 
            />
                <button type="submit">Search</button>
            </form>
        </div>

        <div className="group-info">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://avatars.dicebear.com/api/gridy/afan.svg" />
        <Card.Body>
        <Card.Title>User 1</Card.Title>
        <Card.Text>
            Super Admin
        </Card.Text>
        <Button variant="primary">Detail</Button>
        </Card.Body>
        </Card>
            
        </div>

        </div>
    )
};

export default Users
