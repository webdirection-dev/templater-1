import {configureStore} from "@reduxjs/toolkit"
import { combineReducers } from '@reduxjs/toolkit'

import {controlReducer} from './control/control-slice'
import {openingReducer} from './opening/opening-slice'
import {updateReducer} from './update/update-slice'
import {staffReducer} from './staff/staff-slice'
import {closingReducer} from './closing/closing-slice'
import {panelAddonsReducer} from './panelAddons/panel-addons-slice'
import {miReducer} from './mi/mi-slice'

const rootReducer = combineReducers({
    controlReducer,
    openingReducer,
    updateReducer,
    staffReducer,
    closingReducer,
    panelAddonsReducer,
    miReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
})
