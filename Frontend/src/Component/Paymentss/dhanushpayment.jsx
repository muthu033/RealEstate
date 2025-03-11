// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './paymentss.css'

// function PaymentComponent() {
//   return (
//     <div className="container bg-light d-md-flex align-items-center">
//       {/* Left Box */}
//       <div className="card box1 shadow-sm p-md-5 p-4">
//         <div className="fw-bolder mb-4">
//           <span className="fas fa-dollar-sign"></span>
//           <span className="ps-1">599,00</span>
//         </div>
//         <div className="d-flex flex-column">
//           <div className="d-flex align-items-center justify-content-between text">
//             <span>Commission</span>
//             <span className="fas fa-dollar-sign"><span className="ps-1">1.99</span></span>
//           </div>
//           <div className="d-flex align-items-center justify-content-between text mb-4">
//             <span>Total</span>
//             <span className="fas fa-dollar-sign"><span className="ps-1">600.99</span></span>
//           </div>
//           <div className="border-bottom mb-4"></div>
//           <div className="d-flex flex-column mb-4">
//             <span className="far fa-file-alt text"><span className="ps-2">Invoice ID:</span></span>
//             <span className="ps-3">SN8478042099</span>
//           </div>
//           <div className="d-flex flex-column mb-5">
//             <span className="far fa-calendar-alt text"><span className="ps-2">Next payment:</span></span>
//             <span className="ps-3">22 July, 2018</span>
//           </div>
//           <div className="d-flex align-items-center justify-content-between text mt-5">
//             <div className="d-flex flex-column text">
//               <span>Customer Support:</span>
//               <span>online chat 24/7</span>
//             </div>
//             <div className="btn btn-primary rounded-circle"><span className="fas fa-comment-alt"></span></div>
//           </div>
//         </div>
//       </div>
//       {/* Right Box */}
//       <div className="card box2 shadow-sm">
//         <div className="d-flex align-items-center justify-content-between p-md-5 p-4">
//           <span className="h5 fw-bold m-0">Payment methods</span>
//           <div className="btn btn-primary bar"><span className="fas fa-bars"></span></div>
//         </div>
//         <ul className="nav nav-tabs mb-3 px-md-4 px-2">
//           <li className="nav-item">
//             <a className="nav-link px-2 active" aria-current="page" href="#">Credit Card</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link px-2" href="#">Mobile Payment</a>
//           </li>
//           <li className="nav-item ms-auto">
//             <a className="nav-link px-2" href="#">+ More</a>
//           </li>
//         </ul>
//         <div className="px-md-5 px-4 mb-4 d-flex align-items-center">
//           <div className="btn btn-success me-4"><span className="fas fa-plus"></span></div>
//           <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
//             <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
//             <label className="btn btn-outline-primary" htmlFor="btnradio1"><span className="pe-1">+</span>5949</label>
//             <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
//             <label className="btn btn-outline-primary" htmlFor="btnradio2"><span className="pe-1">+</span>3894</label>
//           </div>
//         </div>
//         <form>
//           <div className="row">
//             <div className="col-12">
//               <div className="d-flex flex-column px-md-5 px-4 mb-4">
//                 <span>Credit Card</span>
//                 <div className="inputWithIcon">
//                   <input className="form-control" type="text" defaultValue="5136 1845 5468 3894" />
//                   <span><img src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logok-15.png" alt="Mastercard logo" /></span>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="d-flex flex-column ps-md-5 px-md-0 px-4 mb-4">
//                 <span>Expiration Date</span>
//                 <div className="inputWithIcon">
//                   <input type="text" className="form-control" defaultValue="05/20" />
//                   <span className="fas fa-calendar-alt"></span>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="d-flex flex-column pe-md-5 px-md-0 px-4 mb-4">
//                 <span>Code CVV</span>
//                 <div className="inputWithIcon">
//                   <input type="password" className="form-control" defaultValue="123" />
//                   <span className="fas fa-lock"></span>
//                 </div>
//               </div>
//             </div>
//             <div className="col-12">
//               <div className="d-flex flex-column px-md-5 px-4 mb-4">
//                 <span>Name</span>
//                 <div className="inputWithIcon">
//                   <input className="form-control text-uppercase" type="text" defaultValue="valdimir berezovkiy" />
//                   <span className="far fa-user"></span>
//                 </div>
//               </div>
//             </div>
//             <div className="col-12 px-md-5 px-4 mt-3">
//               <div className="btn btn-primary w-100">Pay $599.00</div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default PaymentComponent;
