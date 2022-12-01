import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    controls: { stand: null,  qualities: null, tg: null, priority: null, effect: null }
}

const controlSlice = createSlice({
    name: '@@control',
    initialState,
    reducers: {
        setControl(state, action) {
            state.controls = action.payload
        }
    }
})

export const {setControl} = controlSlice.actions
export const controlReducer = controlSlice.reducer

//selectors
export const selectControlInfo = (state) => ({
    controls: state.controlReducer.controls,
})
