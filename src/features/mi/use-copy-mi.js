import {printTg} from '../../static/helpers/var'

export const useCopyMi = ({stand, tg, priority, support, dev, miNumber, title, toGo, toDev, calls}) => {
    const standOut = stand ? `${stand} ` : ''
    const printTgTxt = printTg(tg)

    const description =  dev
        ? `Массовый инцидент передан ${toGo}. Заведена задача на разработку ${toDev}.\nНа данный момент зафиксировано ${calls} обращений от УОТ.`
        : `Массовый инцидент передан ${toGo}.\nНа данный момент зафиксировано ${calls} обращений от УОТ.`

    const str = (
        `**FYI**` +
        `\n` +
        `\n**${support} завела массовый инцидент** MI${miNumber}.` +
        `\n**Приоритет:** ${priority}` +
        `\n**Контур:** ${standOut}` +
        `\n**ТГ:** ${printTgTxt}` +
        `\n` +
        `\n**${title}**` +
        `\n` +
        `\n${description}`
    )

    const copySummary = () => {
        navigator.clipboard.writeText(str)
        document.execCommand("copy")
    }

    return {copySummary}
}
