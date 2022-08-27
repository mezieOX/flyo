import React, { Fragment } from 'react';
import About from '../components/about/About';
import Desc from '../components/desc/Desc';
import Access from '../components/icons/Access';
import Illustration from '../components/illustration/Illustration';
import Layout from '../components/layout/Layout';
import Productive from '../components/productive/Productive';

function Home() {
  return (
    <Fragment>
      <Layout>
        <Illustration />
        <Desc />
        <About />
        <Productive />
      </Layout>
    </Fragment>
  );
}

export default Home;
