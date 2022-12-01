import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    data: {
        support: '2ЛП ГИС МТ',
        dev: false,
        miNumber: '00001800',
        title: '',
        toGo: '',
        toDev: '',
        calls: '',
    }
}

const miSlice = createSlice({
    name: '@@mi',
    initialState,
    reducers: {
        resetMi: () => initialState,

        setSupport: (state, action) => {
            state.data.support = action.payload
        },

        setDev: (state) => {
            state.data.dev = !state.data.dev
        },

        setNumber: (state, action) => {
            state.data.miNumber = action.payload
        },

        setTitle: (state, action) => {
            state.data.title = action.payload
        },

        setToGo: (state, action) => {
            state.data.toGo = action.payload
        },

        setToDev: (state, action) => {
            state.data.toDev = action.payload
        },

        setCalls: (state, action) => {
            state.data.calls = action.payload
        },
    }
})

export const {setSupport, setDev, setNumber, setTitle, setToGo, setToDev, setCalls} = miSlice.actions
export const miReducer = miSlice.reducer

//selectors
export const selectMiInfo = (state) => ({
    data: state.miReducer.data,
})
