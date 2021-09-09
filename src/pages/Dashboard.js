import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsPeopleFill } from "react-icons/bs";

function Dashboard() {
  const [userCount, setUserCount] = useState(0);
  useEffect(() => {
    const fetchUserCount = async () => {
      const res = await axios({
        url: "https://stooping-layers.000webhostapp.com/countusers.php",
        headers: { "Content-Type": "multipart/form-data" },
        method: "GET",
      });
      if (res.data.status) {
        setUserCount(res.data.total);
      }
    };
    fetchUserCount();
  }, []);
  return (
    <div className="dashboard-view">
      <div className="head-view">
        <h1>Welcome To MyPlanner</h1>
      </div>
      <div className="card-view">
        <div className="card">
          <div className="card-body">
            <div className="card-title">{userCount} Users</div>
            <div className="people">
              <BsPeopleFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
