import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth'
import PrivateRoute from '../../src/router/PrivateRoute';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('pruebas en private route', () => { 

    test('deberia mostrar el children si esta autenticado', () => {

        Storage.prototype.setItem = jest.fn();
        const contextValue = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'Pep'
            }
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute >
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta privada') ).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/search?q=batman');
     });
});