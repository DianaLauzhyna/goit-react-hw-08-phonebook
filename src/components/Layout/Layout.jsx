import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';

import { Navigation } from '../Navigation/Navigation';

import {Main} from '../../pages/MainBox/MainBox';

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <>
      <header>
        <Navigation />
      </header>
      {isHome && <Main />}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
