import {createSlice} from '@reduxjs/toolkit'
import {staffPerson} from '../../static/data/dataNotify'

const initialState = {
    data: {
        staffPerson,
    }
}

const staffSlice = createSlice({
    name: '@@staff',
    initialState,
    reducers: {
        resetStaff: () => initialState,

        changeSelect: (state, action) => {
            const out = state.data.staffPerson.map(i => {
                if (i.name === action.payload) {
                    return {
                        ...i,
                        selected: !i.selected
                    }
                } else return i
            })
            state.data.staffPerson = out
        },
    }
})

export const {changeSelect} = staffSlice.actions
export const staffReducer = staffSlice.reducer

//selectors
export const selectStaffInfo = (state) => ({
    data: state.staffReducer.data,
})
