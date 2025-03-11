// import React, { Fragment, useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './ContactUs.css'; 
// import contact from '../../../../public/contact.jpg'
// // import Header from '../../common/header/header'

// const ContactUs = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here, you would typically send data to the backend, but we're just logging it
//     console.log({ name, email, message });
//   };

//   return (
//     <Fragment>
//     {/* <Header/> */}
//     <div className="bg-background">
//       <div className="container py-5">
//         <div className="row py-5 g-3">
//           {/* First Column - Contact Form */}
//           <div className="col-md-6 first_col">
//             <h1 className="text-center mt-3">Register</h1>
//             <form className="p-4 mt-5" onSubmit={handleSubmit}>
//               <div className="mb-3">
//                 <label htmlFor="name" className="form-label">Enter your Name</label>
//                 <input 
//                   type="text" 
//                   className="form-control" 
//                   id="name" 
//                   value={name}
//                   onChange={(e) => setName(e.target.value)} 
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="email" className="form-label">Email ID</label>
//                 <input 
//                   type="email" 
//                   className="form-control" 
//                   id="email" 
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)} 
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="email" className="form-label">Phone Number</label>
//                 <input 
//                   type="email" 
//                   className="form-control" 
//                   id="email" 
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)} 
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="message" className="form-label">Enter your message</label>
//                 <textarea 
//                   className="form-control" 
//                   id="message" 
//                   rows="3" 
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)} 
//                   required
//                 ></textarea>
//               </div>
//               <div className="mb-4">
//                 <button type="submit" className="btn btn-primary">Send Now</button>
//               </div>
//             </form>
//           </div>

//           {/* Second Column - Image */}
//           <div  className="col-md-6 sec_col">
//             <img src={contact} alt="Contact Us" className="img-fluid" />
//           </div>
//         </div>

      
//         </div>
//       </div>
//       </Fragment>
  
//   );
// };

// export default ContactUs;
