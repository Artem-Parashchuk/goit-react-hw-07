import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    contacts: [
        {
            id: "id-1",
            name: "Rosie Simpson",
            number: "459-12-56"
        },
        {
            id: "id-2",
            name: "Hermione Kline",
            number: "443-89-12"
        },
        {
            id: "id-3",
            name: "Eden Clements",
            number: "645-17-79"
        },
        {
            id: "id-4",
            name: "Annie Copeland",
            number: "227-91-26"
        }
    ]
}

const slice = createSlice({
    name: 'contactList',
    initialState,
    selectors: {
       selectContacts: state => state.contacts,
    },
    reducers: {
        deleteContacts: (state, action) => {
            state.contacts = state.contacts.filter(todo => todo.id !== action.payload)
        },
        addContact: {
            prepare: ({name, number}) => {
                const id = nanoid()
                return {
                    payload: {
                        id,
                        name,
                        number
                    }
                }
            },
            reducer: (state, action) => {
                state.contacts.push(action.payload)
            }

        }
    }
})

export const contactReducer = slice.reducer;
export const {deleteContacts, addContact} = slice.actions;
export const {selectContacts} = slice.selectors