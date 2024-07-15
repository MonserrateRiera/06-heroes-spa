import React from 'react';

import { Routes, Route, Navigate} from 'react-router-dom';

import { Navbar } from '../ui'
import { HeroesRoutes } from '../heroes';
 
import { LoginPage } from '../auth';

const AppRouter = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path='login' element={<LoginPage />} />
        <Route path='/*' element= { <HeroesRoutes /> } />
      </Routes>
    </div>
  );
};

export default AppRouter;