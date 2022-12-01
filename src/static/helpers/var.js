import {getDaysToPrint} from './getDaysToPrint'

export const addZero = num => num <= 9 ? "0" + num : num

export const sortTg = (arr) => {
    // Обработка входящего массива с ТГ
    let out = null

    if (arr && arr.length === 1) out = arr.map(i => i.value)

    if (arr && arr.length > 1) {
        out = arr.map((i, index) => {
            if (index < arr.length - 1) return `${i.value}, `
            return i.value
        })
    }

    return out
}

export const printTg = (arr) => {
    // готовим данные из массива объектов для одной строки
    if (arr !== undefined && arr !== null) {
        const out = []
        arr.forEach(item => {
            out.push(item.value)
        })

        return out.join(', ')
    }
}

export const printDay = (start, finish) => {
    const a = new Date(Date.parse(start))
    const b = new Date(Date.parse(finish))

    const beginDate = getDaysToPrint(a)
    const endDate = getDaysToPrint(b)

    if (beginDate < endDate) return {begin: ` ${beginDate}`, end: `${endDate} `}
    else return {begin: '', end: ''}
}

export const hours = new Date().getHours() >= 9 && new Date().getHours() < 18
export const weekend = new Date().getDay() === 0 || new Date().getDay() === 6
