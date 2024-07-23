import { LoginPage } from "../../../src/auth"
import { Navbar } from "../../../src/ui"
import { fireEvent, render, screen } from "@testing-library/react"
import { AuthContext } from "../../../src/auth"
import { MemoryRouter, useNavigate } from "react-router-dom"

const mockUseNavigate = jest.fn();

//Mocker es hookusenavigate
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}));

describe('Pruebas en el <NavBar />', () => { 
    
    const contextValue = {
        logged: true,
        user:{
            name: 'Juan Test',
            id:'test123'
        },
        logout: jest.fn()
    };

    beforeEach( () => jest.clearAllMocks() );
    
    test('deberia mostrar el usuario', () => { 

        render(
            <AuthContext.Provider value={ contextValue }>
               <MemoryRouter>
                    <Navbar />
               </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(screen.getByText('Juan Test')).toBeTruthy();
     });

     test('debe de llamar al navigate', () => { 

        render(
            <AuthContext.Provider value={ contextValue }>
               <MemoryRouter>
                    <Navbar />
               </MemoryRouter>
            </AuthContext.Provider>
        )
        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);
        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockUseNavigate).toHaveBeenCalledWith('/login', {"replace": true});
     });
 })