import { createSlice } from "@reduxjs/toolkit"
export const srcDataSlice = createSlice({
    name: 'srcDataImput',
    initialState: {
        value: "",
    },
    reducers: {
        srcDataImput: (state, action) => {
            state.value = `${action.payload}`
        }

    }
},
)

export const { srcDataImput } = srcDataSlice.actions
export const srcDataReducer = srcDataSlice.reducer
