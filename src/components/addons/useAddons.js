import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {selectPanelAddonsInfo, selectStyleAddons} from '../../features/panelAddons/panel-addons-slice'
import {selectMiInfo} from '../../features/mi/mi-slice'

export const useAddons = () => {
    const {start, staff, mi} = useSelector(store => selectPanelAddonsInfo(store).data)
    const {withAnimation} = useSelector(store => selectStyleAddons(store))
    const {data} = useSelector((store => selectMiInfo(store)))
    const [styleAddons, setStyleAddons] = useState({})

    useEffect(() => {
        let styleOut = {}
        const staffHeight = document.getElementById('staff').offsetHeight
        const miHeight = document.getElementById('mi').offsetHeight
        const height = staff ? staffHeight : miHeight

        if (start) styleOut = {height: '223px'}
        if (!start && withAnimation) styleOut = {transition: 'all .25s', height: `${height}px`}
        if (!start && !withAnimation) styleOut = {height: `${height}px`}

        setStyleAddons(styleOut)

    }, [start, staff, mi, data, withAnimation])

    return {start, staff, mi, styleAddons}
}
