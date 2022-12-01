import {printTg, addZero} from '../../../static/helpers/var'

export const useCopyOpening = (qualities, stand, tg, priority, effect, isInside, openingTitle, jiraId, startTime, systemAdmins, openingDescription) => {
    const inside = isInside ? `**ВНУТРЕННИЙ**\n` : ''
    const standOut = stand ? `${stand} ` : ''
    const qualitiesOut = qualities ? `${qualities}` : ''
    const printTgTxt = printTg(tg)
    const hourStart = new Date(Date.parse(startTime)).getHours()
    const minutesStart = new Date(Date.parse(startTime)).getMinutes()

    const str = (
        `${inside}` +
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
