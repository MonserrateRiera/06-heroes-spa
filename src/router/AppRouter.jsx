import React from 'react';

import { Routes, Route, Navigate} from 'react-router-dom';

import { Navbar } from '../ui'
import { HeroesRoutes } from '../heroes';
 
import { LoginPage } from '../auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  return (
    <div className='container'>
      <Routes>

        <Route path='/login' element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }/>

        <Route path='/*' element = {
          <PrivateRoute>
             <HeroesRoutes /> 
          </PrivateRoute>
        }/>
        
      </Routes>
    </div>
  );
};

export default AppRouter;