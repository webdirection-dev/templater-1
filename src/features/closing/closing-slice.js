import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    data: {
        finishTime: null,
        duration: '',
        closingDescription: '',
    }
}

const closingSlice = createSlice({
    name: '@@closing',
    initialState,
    reducers: {
        resetClosing: () => initialState,

        setFinishTime: (state, action) => {
            state.data.finishTime = action.payload
        },

        setDuration: (state, action) => {
            state.data.duration = action.payload
        },

        setClosingDescription: (state, action) => {
            state.data.closingDescription = action.payload
        },
    }
})

export const {resetOpening, setFinishTime, setDuration, setClosingDescription} = closingSlice.actions
export const closingReducer = closingSlice.reducer

//selectors
export const selectClosingInfo = (state) => ({
    data: state.closingReducer.data,
})
