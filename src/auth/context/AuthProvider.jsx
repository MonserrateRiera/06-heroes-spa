import { useReducer } from "react"

import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"

import { types } from "../types/types";


export const AuthProvider = ({ children }) => {

    const inicialState = {
        logged: false
    };

    const [ authState, dispatch ] = useReducer( authReducer, inicialState )

    const login =  (name = '') =>{

        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: name
            }
        }
        dispatch(action);
    }
    return (
        <AuthContext.Provider value={{ 
            ...authState,
            login: login
        }}>

            {children}

        </AuthContext.Provider>
    )
}