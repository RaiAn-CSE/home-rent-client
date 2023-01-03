import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../Dashboard/Dashboard.css";
import NavSection from "../../Shared/Navbar/NavSection";
import useAdmin from "../../hooks/useAdmin";
import { AuthContext } from "../../contexts/AuthProvider";
import useSeller from "../../hooks/useSeller";
import useTitle from "../../hooks/useTitle";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email)
  const [isSeller] = useSeller(user?.email)
  const [myProperty, setMyProperty] = useState([]);
  useTitle('Dashboard');
  useEffect(() => {
    fetch("dashboard-data.json")
      .then((res) => res.json())
      .then((data) => setMyProperty(data));
  }, []);
  return (
    <div className="container">
      <NavSection></NavSection>
      <h3 className="text-center mb-5 mt-5">Welcome to Dashboard</h3>
      <div className="row">
        <div className="col-md-3 col-lg-3 col-sm-12">

          {
            isAdmin &&
            <>
              <li><Link to="/dashboard/allRenters">All Renters</Link></li>
              <li><Link to="/dashboard/allOwners">All Owners</Link></li>
            </>
          }
          {
            isSeller &&
            <>
              <li><Link to="/dashboard/myProperty">My Property</Link></li>
              <li><Link to="/addProperty">My Property</Link></li>
            </>
          }
        </div>
        <div className="col-md-9 col-lg-9  col-sm-12">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;