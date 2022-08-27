import React, { Fragment } from 'react';
import Layout from '../components/layout/Layout';
import Trusted from '../components/trusted/Trusted';
import Info from '../components/info/Info';
import BusinessTask from '../components/business-task/BusinessTask';
import LargeCard from '../components/large-card/LargeCard';



function Home() {
  return (
    <Fragment>
    <Layout title="Home">
      <Info />
       <Trusted />
       <BusinessTask />
      <LargeCard />
      {/* <GetStarted /> */}
      {/* <Motive />
      <Cards />  */}
    </Layout>
  </Fragment>
  );
}

export default Home;
