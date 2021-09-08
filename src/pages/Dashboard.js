import React from 'react'
import { BsPeopleFill } from 'react-icons/bs';

function Dashboard() {
    return (
            <div className="dashboard-view">
            <div className="head-view">
              <h1>Welcome To MyPlanner</h1>
            </div>
            <div className="card-view">
            <div className="card" >
              <div className="card-body">
            <div className="card-title">10 Users</div>
            <div className="people">
              <BsPeopleFill />
            </div>
              </div>
            </div>
            </div>
            </div>
            

    )
}

export default Dashboard
