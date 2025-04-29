
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
import React from 'react';
import Navbar from './components/navbar/Navbar';
import SideMatter from './components/aside/SideMatter';
import Card from './components/cards/Card';
import Article from './components/article/Article';
import TeamCard from './components/team/TeamCard';
import Living from './components/living/Living';
import Newsletter from './components/newsletter/Newletter';
import Footer from './components/footer/Footer';








function App() {
  return (
    <>
<Navbar></Navbar>
<SideMatter></SideMatter>
    <Card></Card>
   <Article></Article>
<Living></Living>
<TeamCard></TeamCard>
<Newsletter></Newsletter>
<Footer></Footer>


    </>
  );
}

export default App;
