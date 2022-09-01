import React, { Fragment } from 'react';
import About from '../components/about/About';
import Desc from '../components/desc/Desc';
import Access from '../components/icons/Access';
import Illustration from '../components/illustration/Illustration';
import Layout from '../components/layout/Layout';
import Newsletter from '../components/newsletter/Newsletter';
import Productive from '../components/productive/Productive';

function Home() {
  return (
    <Fragment>
      <Layout>
        <Illustration />
        <Desc />
        <About />
        <Productive />
        <div className="absolute w-full grid items-center z-40 -mt-40">
          <Newsletter />
          </div>
      </Layout>
    </Fragment>
  );
}

export default Home;
