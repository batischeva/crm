import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from '../components/Sidebar';

import {Routes, Route} from 'react-router-dom';
import { LAYOUT_ROUTE, DEALS_ROUTE, ORG_ROUTE, USERS_ROUTE, PRODUCTS_ROUTE, ANALITICS_ROUTE, SETTINGS_ROUTE } from "../utils/consts";
import Deals from './Deals';
import Org from './Org';
import Users from './Users';
import Products from './Products';
import Analitics from './Analitics';
import Settings from './Settings';

export default function Layout() {
  return (
    <div className='container'>
      <div className='workspace'>
        <Sidebar />
        <div className='main-content'>
          <Header />
          <Routes>
              <Route path={DEALS_ROUTE} element={<Deals />} />
              <Route path={ORG_ROUTE} element={<Org />} />
              <Route path={USERS_ROUTE} element={<Users />} />
              <Route path={PRODUCTS_ROUTE} element={<Products />} />
              <Route path={ANALITICS_ROUTE} element={<Analitics />} />
              <Route path={SETTINGS_ROUTE} element={<Settings />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  )
}
