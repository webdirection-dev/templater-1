import {useDispatch, useSelector} from 'react-redux'
import {selectControlInfo} from '../control/control-slice'
import {setSupport, setDev, setNumber, setTitle, setToGo, setToDev, setCalls, selectMiInfo} from './mi-slice'
import {setAnimation} from '../panelAddons/panel-addons-slice'
import {useCopyMi} from './use-copy-mi'
import {sortTg} from '../../static/helpers/var'

export const useMi = () => {
    const dispatch = useDispatch()
    const {stand, tg, priority} = useSelector(store => selectControlInfo(store).controls)
    const {support, dev, miNumber, title, toGo, toDev, calls} = useSelector(store => selectMiInfo(store).data)
    const {copySummary} = useCopyMi({stand, tg, priority, support, dev, miNumber, title, toGo, toDev, calls})

    const handleChange = (e) => {
        dispatch(setAnimation(false))
        const {name, value} = e.target

        if (name === 'miSupport') dispatch(setSupport(value))
        if (name === 'miNumber' && value.length <= 8) dispatch(setNumber(value))
        if (name === 'miTitle') dispatch(setTitle(value))
        if (name === 'miDev') dispatch(setDev())

        if (name === 'miToGo') dispatch(setToGo(value))
        if (name === 'miToDev') dispatch(setToDev(value))
        if (name === 'miCalls') dispatch(setCalls(value))

    }

    return {stand, tg: sortTg(tg), priority, dev, support, miNumber, title, toGo, toDev, calls, handleChange, copySummary}
}
