import useDateHook from "../hooks/getDate";


const CopyMarkdown = ({
                          dataFromPanel = Object.prototype,
                          flagCard = '',
                          isInsideIncident = false,
                          problem = '',
                          opsNumber = '',
                          whoNotify = '',

                          isNotes = '',
                          isNotesClosing = '',

                          isNotesUpdate = '',
                          txtForCopy = '',
                          personNotify = '',

                          hoursStartDate = null,
                          minutesStartDate = null,

                          isGetTimeStart = {startHour: null, startMinute: null},
                          hoursEndDate = null,
                          minutesEndDate = null,
                          durationIncOut = '',

                          isStartDay = '',
                          dayClose = '',

                          dateForBot = '',

                      }) => {
    const {
        qualities,
        stand,
        tg,
        priority,
        effect,
    } = dataFromPanel

    let insideOpen = ''
    if (isInsideIncident) insideOpen = `**ВНУТРЕННИЙ**\n`

    let inside = ''
    if (isInsideIncident) inside = `**ВНУТРЕННИЙ**\n`

    // готовим данные из массива объектов для одной строки
    let tgForTable = ''
    if (tg !== undefined && tg !== null) {
        const arr = []
        tg.forEach(item => {
            arr.push(item.value)
        })
        tgForTable = arr.join(', ')
    }

    let standOut = ''
    let standBot = ''
    if (stand !== null) {
        standOut = `${stand}`
        if (stand === 'ПРОД') standBot = 'Прод'
        if (stand === 'ДЕМО') standBot = 'Демо'
        if (stand === 'ПРОД+ДЕМО') standBot = 'Демо + Прод'
    }

    let qualitiesOut = ''
    if (qualities !== null) qualitiesOut = ` ${qualities}`

    //Логика для отрисовки дня начала и дня окончания
    let dayStart = ''
    let dayEnd = ''
    const start = useDateHook(isStartDay)
    const end = useDateHook(dayClose)

    //For Bot
    const botTime = useDateHook(dateForBot)

    if (start < end) {
        dayStart = ` ${start}`
        dayEnd = `${end} `
    }

    const strBot = (
        `#Problem` +
        `\nТема - ${problem}` +
        `\nКонтур - ${standBot}` +
        `\nОписание - ${isNotes}` +
        `\nВремя начала инцидента - ${botTime}, ${hoursStartDate}:${minutesStartDate}`
    )

    const strOpening = (
        `${insideOpen}` +
        `**Инцидент ОТКРЫТ**` +
        `\n**${standOut}${qualitiesOut}**` +
        `\n` +
        `\n**${problem}**` +
        `\n**ТГ:** ${tgForTable}` +
        `\n` +
        `\n**Приоритет:** ${priority}` +
        `\n**Степень влияния:** ${effect}` +
        `\nhttps://jira.crpt.ru/browse/OPS-${opsNumber}` +
        `\n**Время инцидента:** ${hoursStartDate}:${minutesStartDate}` +
        `\n**Кто оповещён:** ${whoNotify}` +
        `\n` +
        `\n**Примечание:** ${isNotes}`
    )

    const strClosing = (
        `${inside}` +
        `**Инцидент ЗАКРЫТ**` +
        `\n**${standOut}${qualitiesOut}**` +
        `\n` +
        `\n**${problem}**` +
        `\n**ТГ:** ${tgForTable}` +
        `\n` +
        `\n**Приоритет:** ${priority}` +
        `\n**Степень влияния:** ${effect}` +
        `\nhttps://jira.crpt.ru/browse/OPS-${opsNumber}` +
        `\n**Время инцидента:**${dayStart} ${isGetTimeStart.startHour}:${isGetTimeStart.startMinute} - ${dayEnd}${hoursEndDate}:${minutesEndDate} (${durationIncOut})` +
        `\n**Кто оповещён:** ${whoNotify}` +
        `\n` +
        `\n**Примечание:** ${isNotesClosing}`
    )

    const strNotify = (
        `${personNotify}` +
        `\n${txtForCopy}`
    )

    const strUpdate = (
        `${inside}` +
        `**Инцидент в работе**` +
        `\n**${standOut}${qualitiesOut}**` +
        `\n` +
        `\n${isNotesUpdate}`
    )

    if (flagCard === 'bot') navigator.clipboard.writeText(strBot)
    if (flagCard === 'opening') navigator.clipboard.writeText(strOpening)
    if (flagCard === 'closing') navigator.clipboard.writeText(strClosing)
    if (flagCard === 'update') navigator.clipboard.writeText(strUpdate)
    if (flagCard === 'notify') navigator.clipboard.writeText(strNotify)

    document.execCommand("copy")
}

export default CopyMarkdown