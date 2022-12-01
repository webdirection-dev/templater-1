import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setStaffAddons, setMiAddons, selectPanelAddonsInfo, setAnimation} from './panel-addons-slice'
import './panelAddons.css'

const PanelAddons = () => {
    const dispatch = useDispatch()
    const {staff, mi} = useSelector(store => selectPanelAddonsInfo(store).data)
    const [hover, setHover] = useState(false)

    return(
        <div className='addon-panel'
            onMouseEnter={() => {setHover(true)}}
            onMouseLeave={() => {setHover(false)}}
        >
            {mi && <div
                className='addon-btn staff-btn'
                onClick={() => {
                    dispatch(setAnimation(true))
                    dispatch(setStaffAddons())
                }}
            >{hover && 'Ш'}</div>}

            {staff && <div
                className='addon-btn mi-btn'
                onClick={() => {
                    dispatch(setAnimation(true))
                    dispatch(setMiAddons())
                }}
            >{hover && 'М'}</div>}
        </div>
    )
}

export default PanelAddons
