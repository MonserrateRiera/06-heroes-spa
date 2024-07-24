import  { render, screen } from "@testing-library/react";
import  { MemoryRouter } from "react-router-dom";
import { SearchPage } from '../../../src/heroes/pages/SearchPage';

describe('pruebas en <SeachPage />', () => { 
    
    test('deberia mostrar correctamente con valores por defecto', () => { 
        
        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        )
        expect( container ).toMatchSnapshot();
    });
    
    test('debe de mostrar a Batman y el input con el valor del querystring', () => { 
        
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        )
        const input = screen.getByRole( 'textbox' );
        expect( input.value ).toBe( 'batman' );
        const img = screen.getByRole( 'img' );
        expect( img.src ).toContain( 'batman' );
        const alertDiv = screen.getByLabelText('alert-danger');
        expect (alertDiv.style.display).toBe('none');
    });
 })