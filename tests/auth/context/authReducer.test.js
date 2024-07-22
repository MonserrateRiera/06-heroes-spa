import { types } from "../../../src/auth/types/types";
import { authReducer } from "../../../src/auth/context/authReducer";

describe('AuthReducer testing', () => {


    test('should return default state', () => {
        const result = authReducer({ logged : false }, { });
         
         expect(result).toEqual({logged: false})
    })
    test('should return logged', () => { 
        //Inicialitzam ses variables

        const user = {
            id: 'ABC',
            name: 'Pep'
        }
        const action ={
            type: types.login,
            payload: user
        }

        const result = authReducer({ logged : false }, action);
        expect(result.logged).toBeTruthy;
        expect(result.user.name).toEqual('Pep');
        expect(result.user.id).toEqual('ABC');
     })

     test('should return not logged and erase name of the user', () => { 
        const user = {
            id: 'ABC',
            name: 'Pep'
        }
        const action ={
            type: types.logout,
        }
        const inicialState = {
            logged: true,
            user
        }
        const result = authReducer(inicialState, action);
        expect(result.logged).toBeTruthy;
        expect(result.user).toBeUndefined;
      })
});