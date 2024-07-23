import {render, screen} from '@testing-library/react';
import {AuthContext} from '../../src/auth/context/'
import { MemoryRouter } from 'react-router-dom';
import AppRouter from '../../src/router/AppRouter'
import { useContext } from 'react';


describe('Pruebas en <AppRouter />', () => { 
    
    test('debe mostrar el login si no esta autenticado', () => { 
        const contextValue = {
            logged: false
        };

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect( screen.getAllByText('Login').length).toBe(2);
     })

     test('debe mostrar la pantalla de marvel si  esta autenticado', () => { 
        const contextValue = {
            logged: true,
            user: {
                name: 'Pep',
                id: 'ABC'
            }
        };

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect( screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
     })
 })