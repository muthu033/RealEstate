// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";
// import "./PayApp.css";

// const Payment = () => {
//   const location = useLocation();
//   const property = location.state?.property || {}; // Access property data from location.state

//   const [formData, setFormData] = useState({
//     firstname: "",
//     lastname: "",
//     mobile: "",
//     aadhar: "",
//     email: "",
//     address: "",
//     advanceamount: "",
//   });

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission and Razorpay integration
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const payload = {
//       ...formData,
//       propertyId: property._id, // Assign property ID from the state
//     };

//     try {
//       // Save payment details to the backend
//       const response = await axios.post("http://localhost:5003/api/payment", payload);
//       if (response.data.success) {
//         alert("Payment details saved. Proceeding to payment gateway...");

//         // Razorpay Payment Integration
//         const options = {
//           key: "rzp_test_vv1FCZvuDRF6lQ", // Replace with your Razorpay key
//           amount: parseInt(formData.advanceamount) * 100, // Amount in paise
//           currency: "INR",
//           name: "Web Mastery",
//           description: "For testing purpose",
//           handler: async (response) => {
//             const paymentId = response.razorpay_payment_id;
//             console.log("Payment ID:", paymentId);

//             // Save Razorpay payment ID and other details to your backend if needed
//             await axios.post("http://localhost:5003/api/payment/success", {
//               paymentId,
//               ...payload,
//             });
//             alert("Payment successful!");
//           },
//           prefill: {
//             name: `${formData.firstname} ${formData.lastname}`,
//             email: formData.email,
//             contact: formData.mobile,
//           },
//           theme: {
//             color: "#3399cc",
//           },
//         };

//         const rzp = new window.Razorpay(options);
//         rzp.open();
//       } else {
//         alert("Failed to save payment details");
//       }
//     } catch (error) {
//       console.error("Error creating payment:", error);
//       alert("An error occurred during payment processing");
//     }
//   };

//   return (
//     <div className="c-payment-container d-flex justify-content-center mt-5">
//       <div className="c-payment-wrapper shadow-lg p-4" style={{ width: "75%" }}>
//         <h2 className="c-payment-heading mb-4 text-center">Checkout Form</h2>
//         <form onSubmit={handleSubmit} className="c-payment-form">
//           <div className="row">
//             {/* Property Details - Read-Only Fields */}
//             <div className="col-md-6 mb-3">
//               <label className="form-label">Property Title</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 value={property.building_name || ""}
//                 readOnly
//               />
//             </div>
//             <div className="col-md-6 mb-3">
//               <label className="form-label">District</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 value={property.district || ""}
//                 readOnly
//               />
//             </div>
//             <div className="col-md-6 mb-3">
//               <label className="form-label">Property Type</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 value={property.propertyCategory || ""}
//                 readOnly
//               />
//             </div>
//             <div className="col-md-6 mb-3">
//               <label className="form-label">Price</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 value={`₹${property.price || ""}`}
//                 readOnly
//               />
//             </div>

//             {/* User Details - Editable Fields */}
//             <div className="col-md-6 mb-3">
//               <label className="form-label">First Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter your first name"
//                 name="firstname"
//                 value={formData.firstname}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="col-md-6 mb-3">
//               <label className="form-label">Last Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter your last name"
//                 name="lastname"
//                 value={formData.lastname}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="col-md-6 mb-3">
//               <label className="form-label">Mobile</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter your mobile number"
//                 name="mobile"
//                 value={formData.mobile}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="col-md-6 mb-3">
//               <label className="form-label">Aadhar Number</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter your Aadhar number"
//                 name="aadhar"
//                 value={formData.aadhar}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="col-md-12 mb-3">
//               <label className="form-label">Email</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Enter your email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="col-md-12 mb-3">
//               <label className="form-label">Address</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter your address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="col-md-12 mb-3">
//               <label className="form-label">Advance Amount</label>
//               <input
//                 type="number"
//                 className="form-control"
//                 placeholder="Enter advance amount"
//                 name="advanceamount"
//                 value={formData.advanceamount}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           <button type="submit" className="btn btn-primary w-100 mt-3">
//             Checkout
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Payment;


import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./PayApp.css";

const Payment = () => {
  const location = useLocation();
  const property = location.state?.property || {}; // Access property data from location.state

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    aadhar: "",
    email: "",
    address: "",
    advanceamount: "",
  });

  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  // Load Razorpay script dynamically if it's not already present
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => setRazorpayLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission and Razorpay integration
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      propertyId: property._id, // Assign property ID from the state
    };

    
      // Save payment details to the backend
      const response = await axios.post("http://localhost:5003/api/payment", payload);
      if (response.data.success) {
        toast.success(response.data.message || "Payment details saved. Proceeding to payment gateway...");

        // Wait for 2 seconds before opening Razorpay
        setTimeout(() => {
          if (razorpayLoaded && window.Razorpay) {
            const options = {
              key: "rzp_test_vv1FCZvuDRF6lQ", // Replace with your Razorpay key
              amount: parseInt(formData.advanceamount) * 100, // Amount in paise
              currency: "INR",
              name: "Web Mastery",
              description: "For testing purpose",
              handler: async (response) => {
                const paymentId = response.razorpay_payment_id;
                console.log("Payment ID:", paymentId);

                // Save Razorpay payment ID and other details to your backend if needed
                await axios.post("http://localhost:5003/api/payment/success", {
                  paymentId,
                  ...payload,
                });
                toast.success("Payment successful!");
              },
              prefill: {
                name: `${formData.firstname} ${formData.lastname}`,
                email: formData.email,
                contact: formData.mobile,
              },
              theme: {
                color: "#3399cc",
              },
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
          } else {
            toast.error("Razorpay not loaded properly");
          }
        }, 3000); // Delay Razorpay for 2000ms (2 seconds)
      } else {
        toast.error("Failed to save payment details");
      }
  };

  return (
    <div className="c-payment-container d-flex justify-content-center mt-5">
      <div className="c-payment-wrapper shadow-lg p-4" style={{ width: "75%" }}>
        <h2 className="c-payment-heading mb-4 text-center">Checkout Form</h2>
        <form onSubmit={handleSubmit} className="c-payment-form">
          <div className="row">
            {/* Property Details - Read-Only Fields */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Property Title</label>
              <input
                type="text"
                className="form-control"
                value={property.building_name || ""}
                readOnly
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">District</label>
              <input
                type="text"
                className="form-control"
                value={property.district || ""}
                readOnly
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Property Type</label>
              <input
                type="text"
                className="form-control"
                value={property.propertyCategory || ""}
                readOnly
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Price</label>
              <input
                type="text"
                className="form-control"
                value={`₹${property.price || ""}`}
                readOnly
              />
            </div>

            {/* User Details - Editable Fields */}
            <div className="col-md-6 mb-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your first name"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your last name"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Mobile</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your mobile number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Aadhar Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Aadhar number"
                name="aadhar"
                value={formData.aadhar}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-12 mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-12 mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-12 mb-3">
              <label className="form-label">Advance Amount</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter advance amount"
                name="advanceamount"
                value={formData.advanceamount}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3">
            Checkout
          </button>
        </form>
        <ToastContainer
          style={{ marginTop: "20px" }}
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
        />
      </div>
    </div>
  );
};

export default Payment;

