import React, { Fragment, useState, useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";
import 'boxicons';
import axios from "axios";
import Footer from "../common/footer/footer";
import Header from "../common/header/Header";
import PropertyList from "../../../src/Component/Admin Panel/Propertieslist";
import UserManagement from "../../../src/Component/Admin Panel/User";
import AgentManagement from "../../../src/Component/Admin Panel/Agentlist";
import Messages from "../../../src/Component/Admin Panel/messages"
import "./Adminpanel.css";
import { Link } from "react-router-dom";


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [propertyCount, setPropertyCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [agentCount, setAgentCount] = useState(0);
  const [messages, setMessages] = useState([]);
  const [pieData, setPieData] = useState({
    labels: ["Apartment", "Villa", "Plot"],
    datasets: [
      {
        data: [0, 0, 0],
        backgroundColor: ["#007bff", "#20c997", "#ffc107"],
      },
    ],
  });

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Sales",
        backgroundColor: "#8c82f5",
        data: [400, 300, 500, 700],
      },
    ],
  };

  // Fetch user, agent, and total properties
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [propertyRes, userRes, agentRes] = await Promise.all([
          axios.get("http://localhost:5003/api/propertycount"),
          axios.get("http://localhost:5003/api/usercount"),
          axios.get("http://localhost:5003/api/agentcount"),
        ]);

        setPropertyCount(propertyRes.data.count);
        setUserCount(userRes.data.count);
        setAgentCount(agentRes.data.count);
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    // Fetch pie chart data from the API
    const fetchPieData = async () => {
      try {
        const response = await axios.get("http://localhost:5003/api/piechart");
        const { Apartment, Villas, Plot } = response.data;

        setPieData({
          labels: ["Apartment", "Villa", "Plot"],
          datasets: [
            {
              data: [Apartment, Villas, Plot],
              backgroundColor: ["#007bff", "#20c997", "#ffc107"],
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching pie chart data:", error);
      }
    };

    fetchCounts();
    fetchPieData();
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:5003/api/contact/count'); 
        setMessages(response.data || []); 
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <Fragment>
      <Header />
      <div className="c-adminpanel-container-fluid">
        <div className="row">
          <div className="col-md-2 c-adminpanel-sidebar">
            <h5>Real Estate Admin</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <button className="btnes c-adminpanel-nav-link d-flex align-items-center" onClick={() => setActiveTab("Dashboard")}>
                  <box-icon type="solid" name="dashboard" className="me-2"></box-icon>
                  <span>Dashboard</span>
                </button>
              </li>
              <li className="nav-item">
                <button className="btnes c-adminpanel-nav-link d-flex align-items-center" onClick={() => setActiveTab("Property")}>
                  <box-icon type="solid" name="building-house" className="me-2"></box-icon>
                  <span>Properties</span>
                </button>
              </li>
              <li className="nav-item">
                <button className="btnes c-adminpanel-nav-link d-flex align-items-center" onClick={() => setActiveTab("User")}>
                  <box-icon type="solid" name="user" className="me-2"></box-icon>
                  <span>Users</span>
                </button>
              </li>
              <li className="nav-item">
                <button className="btnes c-adminpanel-nav-link d-flex align-items-center" onClick={() => setActiveTab("Agent")}>
                  <box-icon type="logo" name="magento" className="me-2"></box-icon>
                  <span>Agent</span>
                </button>
              </li>
              <li className="nav-item">
                <button className="btnes c-adminpanel-nav-link d-flex align-items-center" onClick={() => setActiveTab("Messages")}>
                  <box-icon type='solid' name='chat' className="me-2"></box-icon>
                  <span>Messges</span>
                </button>
              </li>
            </ul>
          </div>

          <div className="col-md-10 c-adminpanel-main-content">
            <header className="d-flex justify-content-between align-items-center mb-4">
              <h3>{activeTab}</h3>
              <div className="d-flex align-items-center">
              <div className="mx-5">
  <Link
    onClick={() => setActiveTab("Messages")} // Set active tab to Messages on click
  >
    <span className="">
      <box-icon type="solid" name="chat"></box-icon>
    </span>
    <span className="dot my-2">{messages.totalMessages}</span>
  </Link>
</div>


                <span className="me-2">Admin User</span>
                <img
                  src="./adminpic.jpg"
                  alt="Admin User"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    cursor: "pointer",
                    objectFit: "cover",
                  }}
                  onClick={() => setIsModalOpen(true)}
                />
              </div>
            </header>

            {/* Modal for Zoomed Image */}
            {isModalOpen && (
              <div className="c-adminpanel-modal">
                <div className="c-adminpanel-modal-content">
                  <span className="c-adminpanel-close" onClick={() => setIsModalOpen(false)}>&times;</span>
                  <img src="./adminpic.jpg" alt="Zoomed Admin" className="c-adminpanel-zoomed-img" />
                </div>
              </div>
            )}

            {/* Conditional Rendering for Active Tab */}
            {activeTab === "Dashboard" && (
              <>
                <div className="row mb-5">
                  <div className="col-md-4">
                    <div className="c-adminpanel-card c-adminpanel-card-stats">
                      <div className="c-adminpanel-card-body">
                        <h6>Total Properties</h6>
                        <h4>{propertyCount}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="c-adminpanel-card c-adminpanel-card-stats">
                      <div className="c-adminpanel-card-body">
                        <h6>Active Users</h6>
                        <h4 className="text-success">{userCount}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="c-adminpanel-card c-adminpanel-card-stats">
                      <div className="c-adminpanel-card-body">
                        <h6>Active Agents</h6>
                        <h4 className="c-adminpanel-text-purple">{agentCount}</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="c-adminpanel-card">
                      <div className="c-adminpanel-card-body">
                        <h6>Sales Overview</h6>
                        <Bar data={barData} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="c-adminpanel-card">
                      <div className="c-adminpanel-card-body">
                        <h6>Property Types</h6>
                        <div className="c-adminpanel-chart-container">
                          <Pie data={pieData} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === "Property" && <PropertyList />}
            {activeTab === "User" && <UserManagement />}
            {activeTab === "Agent" && <AgentManagement />}
            {activeTab == "Messages" && <Messages/>}
            

            
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Dashboard;


