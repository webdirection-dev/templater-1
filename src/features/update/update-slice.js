import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    data: {
        updateDescription: '',
    }
}

const updateSlice = createSlice({
    name: '@@update',
    initialState,
    reducers: {
        resetUpdate: () => initialState,

        setUpdateDescription: (state, action) => {
            state.data.updateDescription = action.payload
        },
    }
})

export const {setUpdateDescription} = updateSlice.actions
export const updateReducer = updateSlice.reducer

//selectors
export const selectUpdateInfo = (state) => ({
    data: state.updateReducer.data,
})
