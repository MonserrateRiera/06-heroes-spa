import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth'
import PublicRoute from '../../src/router/PublicRoute';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('pruebas en public route', () => { 

    test('deberia mostrar el children si no esta autenticado', () => { 
        const contextValue = {
            logged: false
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute >
                    <h1>Ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

       
        expect( screen.getByText('Ruta publica') ).toBeTruthy();
     })

     test('debe nagevar si esta autenticado', () => { 
        const contextValue = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'Marinao'
            }
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute >
                                <h1>Ruta publica</h1>
                            </PublicRoute>
                            } 
                        />
                        <Route path='marvel' element={<h1>Página de Marvel</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );
         expect( screen.getByText('Página de Marvel') ).toBeTruthy();
      })
 })