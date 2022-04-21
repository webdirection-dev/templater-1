import {changeNotifyEven, handleToggleNotifyOps} from "../../store/notifySlice";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

const NotifyItemOps = ({alwaysSelected, selected, name, fullName, even}) => {
    const dispatch = useDispatch()
    const {evenNotify} = useSelector(state => state.notifyReducer)

    useEffect(() => {
        if (!alwaysSelected) {
            if (!evenNotify && even) {
                dispatch(changeNotifyEven('even'))
            }

            if (evenNotify && !even) {
                dispatch(changeNotifyEven('odd'))
            }
        }
        // eslint-disable-next-line
    }, [evenNotify])

    const viewItem = <View dispatch={dispatch} selected={selected} name={name} fullName={fullName}/>

    return(
        alwaysSelected ? viewItem : // всегда выводить на экран
        !alwaysSelected && evenNotify && !even ? viewItem : // выводить на экран по нечетным
        !alwaysSelected && !evenNotify && even ? viewItem : // выводить на экран по четным
        null
    )
}

export default NotifyItemOps

const View = ({dispatch, selected, name, fullName}) => {
    return(
        <label className='notify__label summary__chooseInsideLabel'>
            <input
                type="checkbox"
                name='ops'
                className="filled-in summary__chooseInside"
                checked={selected}
                onChange={() => dispatch(handleToggleNotifyOps(name))}
            />

            <span>{fullName}</span>
        </label>
    )
}