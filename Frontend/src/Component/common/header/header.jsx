import React, { useState, useEffect } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link, useHistory } from "react-router-dom";
import logo from "/images/company logo.png"; // Adjusted import path
import Loader from "../../Loader/Loader";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState("");
  const history = useHistory();

  useEffect(() => {
    const role = localStorage.getItem("role");
    const token = localStorage.getItem("token");
    
    console.log("Token:", token, "Role:", role); // Debugging localStorage
    if (token) {
      setIsAuthenticated(true);
      setUserRole(role ? role.trim().toLowerCase() : ""); // Normalize role
    }
  }, []);

  const toggleNav = () => setNavOpen(!navOpen);

  const handleNavigation = (path) => {
    if (!isLoading) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        history.push(path);
      }, 500);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsAuthenticated(false);
    setUserRole("");
    history.push("/");
  };

  return (
    <header>
      <div className="container-fluid">
        <div className="logo">
          <img src={logo} alt="Company Logo" />
        </div>

        <div className="nav">
          <ul className={navOpen ? "small" : "flex"}>
            {nav.map((list, index) => {
              if (list.text === "Post Property") {
                if (!isAuthenticated || userRole !== "agent") {
                  return null;
                }
              }

              return (
                <li key={index}>
                  <Link
                    to={list.path}
                    onClick={(e) => {
                      e.preventDefault();
                      setNavOpen(false);
                      handleNavigation(list.path);
                    }}
                  >
                    {list.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="button">
          {isAuthenticated ? (
            <button className="btnn" onClick={handleSignOut}>
              <i className="fa fa-sign-out"></i>
              <span style={{ color: "#fff" }}>Sign Out</span>
            </button>
          ) : (
            <button className="btnn">
              <i className="fa fa-sign-in"></i>
              <Link
                to="/login"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Sign In
              </Link>
            </button>
          )}
        </div>

        <div className="toggle" onClick={toggleNav}>
          <i className={navOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>

      {isLoading && <Loader />}
    </header>
  );
};

export default Header;
