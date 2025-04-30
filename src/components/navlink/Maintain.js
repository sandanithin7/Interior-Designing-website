
import React from 'react';
import Navbar from '../navbar/Navbar';
import SideMatter from '../aside/SideMatter';
import Card from '../cards/Card';
import Article from '../article/Article';
import Living from '../living/Living';
import TeamCard from '../team/TeamCard';
import Newsletter from '../newsletter/Newletter';
import Footer from '../footer/Footer';



function Maintain() {
  return (
    <>


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

export default Maintain;
