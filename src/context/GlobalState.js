import React, { createContext, useReducer } from "react";

import appReducer from "./AppReducer";

const initialState = {
    contacts: [
        {
            id: 1,
            nama: "Wendy Nova",
            alamat: "Jalan Thamrin Cilacap",
            email: "11wendynova@gmail.com"
        },

        {
            id: 2,
            nama: "User Test",
            alamat: "Jakarta Selatan",
            email: 'user@user.com'
        }
    ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    function addContact(contact) {
        dispatch({
            type: "ADD_CONTACT",
            payload: contact
        });
    }

    function updateContact(contact) {
        dispatch({
            type: "EDIT_CONTACT",
            payload: contact
        });
    }

    function deleteContact(id) {
        dispatch({
            type: "DELETE_CONTACT",
            payload: id
        })
    }

    return (
        <GlobalContext.Provider 
            value={{
                contacts: state.contacts,
                addContact,
                updateContact,
                deleteContact
            }}>
            {children}
        </GlobalContext.Provider>
    )
}