import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {selectControlInfo} from '../../control/control-slice'
import {selectOpeningInfo} from '../../opening/opening-slice'
import {setFinishTime, setDuration, setClosingDescription, selectClosingInfo} from '../closing-slice'

import {sortTg} from '../../../static/helpers/var'
import {timeDuration} from '../../../static/helpers/timeDuration'
import {useCopyClosing} from './use-copy-closing'

export const useClosing = () => {
    const dispatch = useDispatch()
    const {qualities, stand, tg, priority, effect} = useSelector(store => selectControlInfo(store).controls)
    const {isInside, openingTitle, jiraId, systemAdmins, startTime} = useSelector(store => selectOpeningInfo(store).data)
    const {finishTime, closingDescription, duration} = useSelector(store => selectClosingInfo(store).data)
    const {copySummary} = useCopyClosing(qualities, stand, tg, priority, effect, isInside, openingTitle, jiraId, startTime, systemAdmins, finishTime, duration, closingDescription)
    const [finishDate, setFinishDate] = useState(new Date())
    const [durationIncident, setDurationIncident] = useState(null)

    const handelChange = (e) => {
        dispatch(setClosingDescription(e.target.value))
    }

    useEffect(() => {
        if (finishDate) {
            dispatch(setFinishTime(finishDate.toString()))
            setDurationIncident(timeDuration(startTime, finishDate))
        }
    }, [finishDate])

    useEffect(() => {
        const mathFloor = true
        setDurationIncident(timeDuration(startTime, finishDate, mathFloor))
    }, [startTime])

    useEffect(() => {
        dispatch(setDuration(durationIncident))
    }, [durationIncident])

    return {
        copySummary,
        handelChange,

        stand,
        qualities,
        tg: sortTg(tg),
        priority,
        effect,

        isInside,
        openingTitle,
        jiraId,
        systemAdmins,

        setFinishDate,
        finishDate,
        closingDescription,
        durationIncident,
    }
}
