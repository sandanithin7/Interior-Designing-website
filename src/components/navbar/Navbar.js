// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark premium-navbar px-4 py-3 shadow-sm">
//       <div className="container-fluid">
//         <a className="navbar-brand premium-logo" href="#">
//           Interior<span>Design</span>
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//           <ul className="navbar-nav text-center text-lg-end gap-3 gap-lg-5">
//             <li className="nav-item">
//               <a className="nav-link premium-link" href="#">Home</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link premium-link" href="#">Projects</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link premium-link" href="#">Design Tools</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link premium-link" href="#">Contact</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from 'react';
import { FaHome, FaFolderOpen, FaTools, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark premium-navbar px-4 py-3 shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand premium-logo" href="#">
          Interior<span>Design</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav text-center text-lg-end gap-3 gap-lg-5">
            <li className="nav-item">
              <a className="nav-link premium-link" href="#">
                <FaHome style={{ marginBottom: '2px' }} /> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link premium-link" href="#">
                <FaFolderOpen style={{ marginBottom: '2px' }} /> Projects
              </a>
            </li>
      



            <li className="nav-item">
              <a className="nav-link premium-link" href="#">
                <FaTools style={{ marginBottom: '2px' }} /> Design Tools
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link premium-link" href="#">
                <FaEnvelope style={{ marginBottom: '2px' }} /> Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
