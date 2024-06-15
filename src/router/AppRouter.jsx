
import { Navigate, Routes, Route } from 'react-router-dom';

import { MarvelPage, DCPage } from "../heroes";
import { LoginPage } from '../auth';
import { Navbar } from '../ui';

export const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="marvel" element={ <MarvelPage /> } />
        <Route path="dc" element={ <DCPage /> } />
        
        <Route path="login" element={ <LoginPage /> } />
        <Route path="/" element={ <Navigate to={ '/marvel' } /> } />
      </Routes>
    </>
  );
};
