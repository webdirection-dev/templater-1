import {printTg, printDay, addZero} from '../../../static/helpers/var'

export const useCopyClosing = (qualities, stand, tg, priority, effect, isInside, openingTitle, jiraId, startTime, systemAdmins, finishTime, duration, closingDescription) => {
    const inside = isInside ? `**ВНУТРЕННИЙ**\n` : ''
    const standOut = stand ? `${stand} ` : ''
    const qualitiesOut = qualities ? `${qualities}` : ''
    const printTgTxt = printTg(tg)

    const hourStart = new Date(Date.parse(startTime)).getHours()
    const minutesStart = new Date(Date.parse(startTime)).getMinutes()
    const hourFinish = new Date(Date.parse(finishTime)).getHours()
    const minutesFinish = new Date(Date.parse(finishTime)).getMinutes()
    const {begin, end} = printDay(startTime, finishTime)
    const outTime = `${begin} ${addZero(hourStart)}:${addZero(minutesStart)} - ${end}${addZero(hourFinish)}:${addZero(minutesFinish)}`

    const str = (
        `${inside}` +
        `**Инцидент ЗАКРЫТ**` +
        `\n**${standOut}${qualitiesOut}**` +
        `\n` +
        `\n**${openingTitle}**` +
        `\n**ТГ:** ${printTgTxt}` +
        `\n` +
        `\n**Приоритет:** ${priority}` +
        `\n**Степень влияния:** ${effect}` +
        `\nhttps://jira.crpt.ru/browse/OPS-${jiraId}` +
        `\n**Время инцидента:** ${outTime.trim()} (${duration})` +
        `\n**Кто оповещён:** ${systemAdmins}` +
        `\n` +
        `\n**Примечание:** ${closingDescription}`
    )

    const copySummary = () => {
        navigator.clipboard.writeText(str)
        document.execCommand("copy")
    }

    return {copySummary}
}
