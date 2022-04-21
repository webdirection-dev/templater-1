import './notifyPerson.css'
import CopyMarkdown from "../copyMarkdown";
import {useSelector} from "react-redux";
// import {toggleEvenNotify} from "../../store/notifySlice";

import NotifyList from "../notifyList/notifyList";

const NotifyPerson = ({toGetAlert = Function.prototype}) => {
    // const dispatch = useDispatch()
    const {
        isInsideIncident,
        dataFromPanel,
        // evenNotify,
        notifyPeople,
    } = useSelector(state => state.notifyReducer)

    const inside = isInsideIncident ? ' внутреннем' : ''

    let priority = null
    let effect = ''
    let pre = 'о'

    if (dataFromPanel.priority === 'Критический') priority = 'критическом'
    if (dataFromPanel.priority === 'Высокий') priority = 'высоком'
    if (dataFromPanel.priority === 'Средний') priority = 'среднем'

    if (dataFromPanel.effect === 'Массовое') effect = 'массовом'
    if (dataFromPanel.effect === 'Групповое') effect = 'групповом'
    if (dataFromPanel.effect === 'Одиночное') effect = 'одиночном'

    if (priority === null) pre = 'об'
    if ((priority === null &&  effect !== '') || inside) pre = 'о'

    const toCopyMarkdown = (flagCard, flagOpsOrStaff) => {
        let personNotify = []
        const arr = flagOpsOrStaff === 'ops' ? notifyPeople.notifyOps : notifyPeople.notifyStaff

        arr.forEach(i => {
            if (i.selected) personNotify.push(i.userName)
        })

        personNotify = personNotify.join(' ')

        let priorityOut = ''
        let effectOut = ''

        if (priority !== null) priorityOut = ` ${priority}`
        if (effect !== '') effectOut = ` ${effect}`

        const txtForCopy = `Оповещаем ${pre}${inside}${priorityOut}${effectOut} инциденте`

        toGetAlert()
        CopyMarkdown({
            flagCard,
            dataFromPanel,
            txtForCopy,
            personNotify
        })
    }

    return(
        <div className="card blue-grey darken-1">
            {/*<div className="card-content summary-head notify__head">*/}
            {/*    <label className={'summary__chooseInsideLabel'}>*/}
            {/*        <input*/}
            {/*            type="checkbox"*/}
            {/*            name='inside'*/}
            {/*            className="filled-in summary__chooseInside"*/}
            {/*            checked={evenNotify}*/}
            {/*            onChange={() => dispatch(toggleEvenNotify())}*/}
            {/*        />*/}
            {/*        <span>Нечётные дни</span>*/}
            {/*    </label>*/}
            {/*</div>*/}

            <NotifyList toCopyMarkdown={toCopyMarkdown}/>

            <div className="card-action card-action-notify summary__notifyPerson-txt">
                <p>Оповещаем {pre}{inside} {priority} {effect} инциденте</p>
            </div>
        </div>
    )
}

export default NotifyPerson;