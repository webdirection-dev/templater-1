import {useEffect, useState} from 'react'

export const useCardList = () => {
    const [isAlert, setAlert] = useState(false)

    useEffect(() => {
        // изчезновение алерта Скопировано в буфер
        const timerId = setTimeout(() => setAlert(false), 3000);
        // componentDidUnmount
        return () => clearTimeout(timerId)
    }, [isAlert])

    return {setAlert, isAlert}
}
