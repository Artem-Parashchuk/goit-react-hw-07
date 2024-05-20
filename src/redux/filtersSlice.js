import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    filterText: ''
}

const slice = createSlice({
    name: 'filter',
    initialState,
    selectors: {
        selectFilter: state => state.filterText
    },
    reducers: {
        setFilter: (state, action) => {
            state.filterText = action.payload
        }
    }
})

export const filterReduce = slice.reducer
export const { setFilter } = slice.actions
export const { selectFilter } = slice.selectors