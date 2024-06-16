import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { PublicRoute } from '../../router/PublicRoute';
import { AuthContext } from '../../auth';

describe("Pruebas en <PublicRoute />", () => {
  test("Debe de mostrar el children si no esta autenticado", () => {

    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={ contextValue }>
        <PublicRoute>
          <h1>Ruta Pública</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    expect(screen.getByText( 'Ruta pública' )).toBeTruthy();
  });

  test("Debe de navegar si esta autenticado", () => {

    const contextValue = {
      logged: true,
      user: {
        id: 'ABC',
        name: 'Juan',
      },
    };

    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={[ '/login' ]}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>Ruta Pública</h1>
                </PublicRoute>
              }
            />
            <Route path="marvel" element={ <h1>Página Marvel</h1> } />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText( 'Página Marvel' )).toBeTruthy();
  });
});
