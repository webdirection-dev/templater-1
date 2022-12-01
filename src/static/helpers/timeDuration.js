import {addZero} from './var'

export const timeDuration = (startTime, finishDate, mathFloor) => {
    let duration = Date.parse(finishDate) - Date.parse(startTime),
        // seconds = addZero(Math.floor((duration / 1000) % 60)), // секунды делим на 60 секунд, остаток = кол-во секунд
        minutes = addZero(Math.ceil((duration / 1000 / 60) % 60)), // секунды / секунды / минуты, остаток минуты
        hours = addZero(Math.floor((duration / (1000 * 60 * 60)) % 24)), // милисек/(1000* 60*60) отстаток от 24 часов
        days = addZero(Math.floor(duration / (1000 * 60 * 60 * 24))); // остаток дней

    if (mathFloor) minutes = addZero(Math.floor((duration / 1000 / 60) % 60))

    if (duration >= 0) {
        const dayPrint = days !== '00' ? `${days}дн.` : ''
        let hourPrint = hours !== '00' ? `${hours}ч.` : ''
        let minutePrint = minutes !== '00' ? `${minutes}мин.` : ''

        if (minutes === 60) {
            hourPrint = `${addZero(+hours + 1)}ч.`
            minutePrint = ``
        }

        return `${dayPrint} ${hourPrint} ${minutePrint}`.trim()
    } else return  '0дн. 0ч. 0мин.'
}
