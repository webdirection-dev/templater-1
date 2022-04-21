import {changeNotifyEvenStaff, handleToggleNotifyStaff} from "../../store/notifySlice";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

const NotifyItemStaff = ({alwaysSelected, selected, name, fullName, even}) => {
    const dispatch = useDispatch()
    const {evenNotify, workTimeStaff, workDayStaff} = useSelector(state => state.notifyReducer)

    useEffect(() => {
        if ((!alwaysSelected && !workTimeStaff) || (!alwaysSelected && workDayStaff)) {
            if (!evenNotify && even) {
                dispatch(changeNotifyEvenStaff('even'))
            }

            if (evenNotify && !even) {
                dispatch(changeNotifyEvenStaff('odd'))
            }
        }
        // eslint-disable-next-line
    }, [evenNotify])

    return(
        <label className='notify__label summary__chooseInsideLabel'>
            <input
                type="checkbox"
                name='ops'
                className="filled-in summary__chooseInside"
                checked={selected}
                onChange={() => dispatch(handleToggleNotifyStaff(name))}
            />

            <span>{fullName}</span>
        </label>
    )
}

export default NotifyItemStaff