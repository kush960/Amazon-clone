//setup data layer(context API)
//we need this to track the basket

import React, { createContext, useContext, useReducer } from "react";

//This is the data layer
export const StateContext = createContext();

//Build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//cosumer with usecontext
export const useStateValue = () => useContext(StateContext);