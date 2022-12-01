import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    data: {
        isInside: false,
        openingTitle: '',
        jiraId: '',
        startTime: null,
        systemAdmins: '',
        openingDescription: '',
    }
}

const openingSlice = createSlice({
    name: '@@opening',
    initialState,
    reducers: {
        resetOpening: () => initialState,

        setInside: (state) => {
            state.data.isInside = !state.data.isInside
        },

        setTitle: (state, action) => {
            state.data.openingTitle = action.payload
        },

        setJiraId: (state, action) => {
            state.data.jiraId = action.payload
        },

        setStartTime: (state, action) => {
            state.data.startTime = action.payload
        },

        setAdmins: (state, action) => {
            state.data.systemAdmins = action.payload
        },

        setOpeningDescription: (state, action) => {
            state.data.openingDescription = action.payload
        },
    }
})

export const {resetOpening, setInside, setTitle, setJiraId, setStartTime, setAdmins, setOpeningDescription} = openingSlice.actions
export const openingReducer = openingSlice.reducer

//selectors
export const selectOpeningInfo = (state) => ({
    data: state.openingReducer.data,
})
