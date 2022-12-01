import {useSelector} from 'react-redux'
import {selectControlInfo} from '../control/control-slice'
import {selectOpeningInfo} from '../opening/opening-slice'
import {addZero, printTg} from '../../static/helpers/var'

export const useCopyStaff = (staffPerson) => {
    const {qualities, stand, tg, priority, effect} = useSelector(store => selectControlInfo(store).controls)
    const {isInside, openingTitle, jiraId, startTime, systemAdmins, openingDescription} = useSelector(store => selectOpeningInfo(store).data)

    const inside = isInside ? `**ВНУТРЕННИЙ**\n` : ''
    const standOut = stand ? `${stand} ` : ''
    const qualitiesOut = qualities ? `${qualities}` : ''
    const person = staffPerson.filter(i => i.selected).map(i => i.userName).join(' ').trim()
    const printTgTxt = printTg(tg)
    const hourStart = new Date(Date.parse(startTime)).getHours()
    const minutesStart = new Date(Date.parse(startTime)).getMinutes()

    const str = (
        `**FYI**` +
        `\n` +
        `\n${person}` +
        `\n` +
        `\n${inside}` +
        `**Инцидент ОТКРЫТ**` +
        `\n**${standOut}${qualitiesOut}**` +
        `\n` +
        `\n**${openingTitle}**` +
        `\n**ТГ:** ${printTgTxt}` +
        `\n` +
        `\n**Приоритет:** ${priority}` +
        `\n**Степень влияния:** ${effect}` +
        `\nhttps://jira.crpt.ru/browse/OPS-${jiraId}` +
        `\n**Время инцидента:** ${addZero(hourStart)}:${addZero(minutesStart)}` +
        `\n**Кто оповещён:** ${systemAdmins}` +
        `\n` +
        `\n**Примечание:** ${openingDescription}`
    )

    const copySummary = () => {
        navigator.clipboard.writeText(str)
        document.execCommand("copy")
    }

    return {copySummary}
}
