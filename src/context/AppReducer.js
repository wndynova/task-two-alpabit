export default function appReducer(state, action) {
    switch (action.type) {
        case "ADD_CONTACT":
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            };
        case "EDIT_CONTACT":
            const updateContact = action.payload;
            const updateContacts = state.contacts.map((contact) => {
                if (contact.id === updateContact.id) {
                    return updateContact;
                }
                return contact;
            });

            return {
                ...state,
                contacts: updateContacts,
            };
        case "DELETE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter(
                    (contact) => contact.id !== action.payload
                ),
            };
        
            default:
                return state;
    }
}