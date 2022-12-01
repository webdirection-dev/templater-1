import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {selectControlInfo} from '../../control/control-slice'
import {selectOpeningInfo, setInside, setTitle, setJiraId, setStartTime, setAdmins, setOpeningDescription} from '../opening-slice'

import {sortTg} from '../../../static/helpers/var'
import {useCopyOpening} from './use-copy-opening'
import {useCopyBot} from './use-copy-bot'

export const useOpening = () => {
    const dispatch = useDispatch()
    const {qualities, stand, tg, priority, effect} = useSelector(store => selectControlInfo(store).controls)
    const {isInside, openingTitle, jiraId, startTime, systemAdmins, openingDescription} = useSelector(store => selectOpeningInfo(store).data)
    const {copySummary} = useCopyOpening(qualities, stand, tg, priority, effect, isInside, openingTitle, jiraId, startTime, systemAdmins, openingDescription)
    const {copyBot} = useCopyBot(stand, openingTitle, startTime, openingDescription)
    const [startDate, setStartDate] = useState(new Date())
    const [isWarning, setWarning] = useState(false)
    const [isPrimary, setPrimary] = useState(false)

    const handelInside = () => {
        dispatch(setInside())
    }

    const onWriteInput = (event) => {
        const {name, value} = event.target
        if (name === 'problem') dispatch(setTitle(value))

        if (name === 'ops') {
            if (value.length < 5) setPrimary(false)
            if (value.length === 5) {
                setWarning(false)
                setPrimary(true)
            }

            if (value === '' || (Number(value) && value.length < 6)) dispatch(setJiraId(value))
        }

        if (name === 'admins') dispatch(setAdmins(value))
        if (name === 'description') dispatch(setOpeningDescription(value))
    }

    useEffect(() => {
        if (startDate) dispatch(setStartTime(startDate.toString()))
    }, [startDate])

    return {
        copySummary,
        copyBot,
        handelInside,
        onWriteInput,

        isPrimary,

        stand,
        qualities,
        tg: sortTg(tg),
        priority,
        effect,

        isInside,
        openingTitle,
        jiraId,
        systemAdmins,
        openingDescription,

        startDate,
        setStartDate,

        isWarning,
        setWarning,
    }
}
