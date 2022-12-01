import {useDispatch} from 'react-redux'
import {changeSelect} from './staff-slice'

const StaffItem = ({name, fullName, selected}) => {
    const dispatch = useDispatch()

    return(
        <label className='notify__label summary__chooseInsideLabel'>
            <input
                type="checkbox"
                name=''
                className="filled-in summary__chooseInside"
                checked={selected}
                onChange={() => dispatch(changeSelect(name))}
            />

            <span>{fullName}</span>
        </label>
    )
}

export default StaffItem
