import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../src/auth/context/AuthContext';
import { Navbar } from '../../../src/ui/components/Navbar';


const mockNavigate = jest.fn();

jest.mock( 'react-router-dom', () => ({
  ...jest.requireActual( 'react-router-dom' ),
  useNavigate: () => mockNavigate,
}));

describe( 'Pruebas en el <Navbar />', () => {
  
  const mockLogout = jest.fn();
  
  const contextValue = {
    logged: true,
    user: {
      name: 'Juan',
    },
    logout: mockLogout,
  };

  beforeEach( () => jest.clearAllMocks );

  test('Debe de mostrar el nombre del usuario', () => {

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect( screen.getByText( 'Juan' ) ).toBeTruthy();
  });
  
  test( 'Debe de llamar el logout y navigate cuando se gace click en el botón', () => {

    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const logoutButton = screen.getByRole( 'button' );
    fireEvent.click( logoutButton );

    expect( mockLogout ).toHaveBeenCalled();
    expect( mockNavigate ).toHaveBeenCalledWith( '/login', { replace: true } );
  });
});