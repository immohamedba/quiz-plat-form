import React, { createContext, useReducer } from 'react'

export const TestContext = createContext();

export const testsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TESTS':
            return {
                tests: action.payload
            }
        case 'CREATE_TEST':
            return {
                tests: [action.payload, ...state.tests]
            }
        default:
            return state;
    }
}

export const TestContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(testsReducer, { tests: null })

    return (
        <TestContext.Provider value={{ ...state, dispatch }}>
            {children}
        </TestContext.Provider>
    )
}
