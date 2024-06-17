
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';

const mockUseNavigate = jest.fn();

jest.mock( 'react-router-dom', () => ({
  ...jest.requireActual( 'react-router-dom' ),
  useNavigate: () => mockUseNavigate,
}));

describe('Pruebas en el <SearchPage />', () => {
  
  beforeEach(() => jest.clearAllMocks());
  
  test('Debe de mostrarse correctamente con valores por defecto', () => {
    
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    expect( container ).toMatchSnapshot();

    // screen.debug();
  });

  test('Debe de mostrar a Batman y el input con el valor del queryString', () => {
    
    render(
      <MemoryRouter initialEntries={[ '/search?q=batman' ]}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole( 'textbox' );
    expect( input.value ).toBe( 'batman' );
    
    const img = screen.getByRole( 'img' );
    expect( img.src ).toContain( '/heroes/dc-batman.jpg' );

    const alert = screen.getByLabelText( 'alert-danger' );
    expect( alert.style.display ).toBe( 'none' );

    // screen.debug();
  });

  test('Debe de mostrar un error si no se encuentra el hero (batman123)', () => {
    
    render(
      <MemoryRouter initialEntries={[ '/search?q=batman123' ]}>
        <SearchPage />
      </MemoryRouter>
    );

    const alert = screen.getByLabelText( 'alert-danger' );
    expect( alert.style.display ).toBe( '' );
  });

  test('Debe de llamar el navigate a la pantalla nueva', () => {

    const inputValue = 'superman';
    
    render(
      <MemoryRouter initialEntries={[ '/search' ]}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole( 'textbox' );
    fireEvent.change( input, { target: { value: inputValue } });
    
    const form = screen.getByRole( 'form' );
    fireEvent.submit( form );
    screen.debug();
    expect( mockUseNavigate ).toHaveBeenCalledWith( `?q=${ inputValue }` );

  });
});