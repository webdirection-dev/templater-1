import {useSelector, useDispatch} from 'react-redux'
import {selectControlInfo} from '../../control/control-slice'
import {selectOpeningInfo} from '../../opening/opening-slice'
import {setUpdateDescription, selectUpdateInfo} from '../update-slice'
import {useCopyUpdate} from './use-copy-update'

export const useUpdate = () => {
    const dispatch = useDispatch()
    const {stand, qualities} = useSelector(store => selectControlInfo(store).controls)
    const {isInside} = useSelector(store => selectOpeningInfo(store).data)
    const {updateDescription} = useSelector(store => selectUpdateInfo(store).data)
    const {copySummary} = useCopyUpdate(stand, qualities, isInside, updateDescription)

    const onWriteInputUpdate = (e) => {
        dispatch(setUpdateDescription(e.target.value))
    }

    return {copySummary, updateDescription, isInside, stand, qualities, onWriteInputUpdate}
}
