import { createSlice } from "@reduxjs/toolkit"
export const dataSlice = createSlice({
    name: 'loadData',
    initialState: {
        value: [],
    },
    reducers: {
        putData: (state, action) => {
            state.value = action.payload
        },

    }
})

export const { putData } = dataSlice.actions
export const dataReducer = dataSlice.reducer