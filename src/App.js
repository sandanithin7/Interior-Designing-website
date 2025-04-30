
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './components/navbar/Navbar';


// function App() {
//   return (
// <>
// <Navbar></Navbar>


// </>
//   );
// }

// export default App;
// import React from 'react';
// import { NavLink } from 'react-router-dom';







// function App() {
//   return (
//     <>
// <NavLink></NavLink>

//     </>
//   );
// }

// export default App;


import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Projects from "./components/project/Project";
import DesignTools from "./components/design/Design";
import Contact from "./components/contact/Contact";
import Maintain from "./components/navlink/Maintain";


const App = () => {
  return (
    <>
  

<Navbar></Navbar>


      <Routes>

        <Route path="/" element={<Maintain />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/design-tools" element={<DesignTools/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

   
    </>
  );
};

export default App

