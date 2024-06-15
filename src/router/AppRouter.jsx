
import { Routes, Route } from 'react-router-dom';

import { HeroesRoutes } from "../heroes";
import { LoginPage } from '../auth';
import { PrivateRoute, PublicRoute } from './';


export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login/*" element={
            <PublicRoute>
              <Route path="/*" element={ <LoginPage /> } />
            </PublicRoute>
          }
        />

        <Route path="/*" element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
        {/* <Route path="login" element={ <LoginPage /> } /> */}
        {/* <Route path="/*" element={ <HeroesRoutes /> } /> */}
      </Routes>
    </>
  );
};
