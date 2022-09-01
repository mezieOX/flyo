import { Fragment } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';

function Layout({children}) {
  return (
    <Fragment>
      <div className='flex flex-col  justify-between'>
        <div className='sticky top-0 z-50'><Header /></div>
        <div className="flex-grow">{children}</div>
        <div className=''><Footer /></div>
      </div>
    </Fragment>
  );
}

export default Layout;
