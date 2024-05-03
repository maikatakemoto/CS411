import { createContext, useReducer, useEffect } from 'react'

// Created using createContext(), this is a React context object that can be used to provide and consume authentication state throughout the component tree.
export const AuthContext = createContext()


// This is a reducer function for use with the useReducer hook. It takes the current state and an action, then returns a new state based on the action type. It handles two action types: 'LOGIN' sets the user state to the payload, and 'LOGOUT' resets the user state to null.
export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT':
            return { user: null }
        default:
            return state
    }
}

// This is a React component that wraps its children with the AuthContext.Provider. It uses the useReducer hook to manage the authentication state and provides both the state and the dispatch function to the context so that child components can update the auth state.
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })
    // try to get user from local storage
    // if there exists, we have a value which is the object with the email and token
    // if not, we do not dispatch the action
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))

        if (user) {
            dispatch({ type: 'LOGIN', payload: user })
        }
    }, [])

    console.log('AuthContext state: ', state)
    
    // The AuthContextProvider component initializes the authentication state with user: null indicating no user is logged in by default. It logs the current auth state to the console and provides the state and dispatch function to the AuthContext.Provider. This allows child components to access and modify the authentication state using the useContext hook.
    return (
        <AuthContext.Provider value = {{...state, dispatch}} >
            { children }
        </AuthContext.Provider>
    )
}