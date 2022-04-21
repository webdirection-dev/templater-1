import {createSlice} from "@reduxjs/toolkit";
import DataNotify from "../data/dataNotify";

const hours = new Date().getHours() >= 9 && new Date().getHours() < 18
const weekend = new Date().getDay() === 0 || new Date().getDay() === 6

const notifySlice = createSlice({
    name: 'notify',

    initialState: {
        isInsideIncident: false,

        dataFromPanel: { stand: null, qualities: null, tg: null, priority: null, effect: null },

        problem: '',
        opsNumber: '',
        whoNotify: '',

        evenNotify: new Date().getDate() % 2 !== 0,
        workTimeStaff: hours,
        workDayStaff: weekend,
        notifyPeople: DataNotify,
    },

    reducers: {
        handlerSetIsInsideIncident(state) {
            state.isInsideIncident = !state.isInsideIncident
        },

        getDataFromPanel(state, action) {
            state.dataFromPanel = action.payload
        },

        getProblem(state, action) {
            state.problem = action.payload
        },

        getOpsNumber(state, action) {
            state.opsNumber = action.payload
        },

        getWhoNotify(state, action) {
            state.whoNotify = action.payload
        },

        toggleEvenNotify(state) {
            state.evenNotify = !state.evenNotify
        },

        changeNotifyEven(state, action) {
            if (action.payload === 'even') {
                const out = state.notifyPeople.notifyOps.map(i => {
                    if (i.even) {
                        return(
                            {
                                ...i,
                                selected: true
                            }
                        )
                    }

                    if (i.even === false) {
                        return(
                            {
                                ...i,
                                selected: false
                            }
                        )
                    }

                    return i
                })

                state.notifyPeople.notifyOps = out
            }

            if (action.payload === 'odd') {
                const out = state.notifyPeople.notifyOps.map(i => {
                    if (i.even) {
                        return(
                            {
                                ...i,
                                selected: false
                            }
                        )
                    }

                    if (i.even === false) {
                        return(
                            {
                                ...i,
                                selected: true
                            }
                        )
                    }

                    return i
                })

                state.notifyPeople.notifyOps = out
            }
        },

        changeNotifyEvenStaff(state, action) {
            if (action.payload === 'even') {
                const out = state.notifyPeople.notifyStaff.map(i => {
                    if (i.even) {
                        return(
                            {
                                ...i,
                                selected: true
                            }
                        )
                    }

                    if (i.even === false) {
                        return(
                            {
                                ...i,
                                selected: false
                            }
                        )
                    }

                    return i
                })

                state.notifyPeople.notifyStaff = out
            }

            if (action.payload === 'odd') {
                const out = state.notifyPeople.notifyStaff.map(i => {
                    if (i.even) {
                        return(
                            {
                                ...i,
                                selected: false
                            }
                        )
                    }

                    if (i.even === false) {
                        return(
                            {
                                ...i,
                                selected: true
                            }
                        )
                    }

                    return i
                })

                state.notifyPeople.notifyStaff = out
            }
        },

        handleToggleNotifyOps(state, action) {
            const changeUser = state.notifyPeople.notifyOps.find(i => i.name === action.payload)
            if (changeUser) {
                changeUser.selected = !changeUser.selected
            }
        },

        handleToggleNotifyStaff(state, action) {
            const changeUser = state.notifyPeople.notifyStaff.find(i => i.name === action.payload)
            if (changeUser) {
                changeUser.selected = !changeUser.selected
            }
        }
    }
})

export const {
    handlerSetIsInsideIncident,
    getDataFromPanel,
    getProblem,
    getOpsNumber,
    getWhoNotify,

    toggleEvenNotify,
    changeNotifyEven,
    changeNotifyEvenStaff,
    handleToggleNotifyOps,
    handleToggleNotifyStaff,
} = notifySlice.actions

export default notifySlice.reducer