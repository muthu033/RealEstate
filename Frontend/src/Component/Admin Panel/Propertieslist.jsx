import React, { useEffect, useState } from "react";
import { Table, Button, FormControl, InputGroup } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import { Link } from 'react-router-dom';
import "./Propertieslist.css";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [searchParams, setSearchParams] = useState({
    propertyCategory: "",
    district: "",
    state: "",
    minPrice: "",
    maxPrice: ""
  });

  // Fetch properties with filters applied
  const fetchProperties = async () => {
    try {
      const response = await axios.get("http://localhost:5003/api/properties", {
        params: {
          propertyCategory: searchParams.propertyCategory,
          district: searchParams.district,
          state: searchParams.state,
          minPrice: searchParams.minPrice,
          maxPrice: searchParams.maxPrice,
        }
      });
      setProperties(response.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  // Initial fetch and fetch on search parameter change
  useEffect(() => {
    fetchProperties();
  }, [searchParams]);

  // Delete property
  const deleteProperty = async (propertyId) => {
    try {
      await axios.delete(`http://localhost:5003/api/deleteproperty/${propertyId}`);
      alert("Property deleted successfully");
      // Refresh property list
      fetchProperties();
    } catch (error) {
      console.error("Error deleting property:", error);
      alert("Failed to delete property. Try again.");
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
  };

  return (
    <div className="container-1 mt-5 p-4 rounded shadow-sm bg-light">
      <h4 className="mb-4">Property Listings</h4>
      <InputGroup className="mb-3">
        <FormControl
          name="propertyCategory"
          placeholder="Search Category..."
          value={searchParams.propertyCategory}
          onChange={handleSearchChange}
        />
        <FormControl
          name="district"
          placeholder="Search district..."
          value={searchParams.district}
          onChange={handleSearchChange}
        />
        <FormControl
          name="state"
          placeholder="Search State..."
          value={searchParams.state}
          onChange={handleSearchChange}
        />
        <FormControl
          name="minPrice"
          placeholder="Min Price..."
          type="number"
          value={searchParams.minPrice}
          onChange={handleSearchChange}
        />
        <FormControl
          name="maxPrice"
          placeholder="Max Price..."
          type="number"
          value={searchParams.maxPrice}
          onChange={handleSearchChange}
        />
      </InputGroup>
      <Table hover responsive="sm">
        <thead>
          <tr>
            <th>PROPERTY</th>
            <th>LOCATION</th>
            <th>CATEGORY</th>
            <th>PRICE</th>
            <th>ACTIONS</th>       
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property._id}>
              <td className="d-flex align-items-center">
                <Link to={`/property/${property._id}`}>
                  <img
                    src={property.images && property.images[0] ? `http://localhost:5003/${property.images[0]}` : 'fallbackImage'}
                    style={{ height: "150px", width: "150px", borderRadius: "12px" }}
                    alt={property.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'fallbackImage';
                    }}
                  />
                </Link>
                <span className="ms-2">{property.name}</span>
              </td>
              <td>{property.district}</td>
              <td>
                <div className="text-center" style={{ backgroundColor: '#fff4e5', borderRadius: '5px' }}>
                  <span className="fw-bold" style={{ color: '#ff9800', fontSize: '0.9rem' }}>
                    {property.propertyCategory}
                  </span>
                </div>
              </td>
              <td>{property.price}</td>
              <td>
                <Button variant="link" className="text-danger" onClick={() => deleteProperty(property._id)}>
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PropertyList;
