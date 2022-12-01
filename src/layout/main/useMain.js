import {useEffect, useState} from 'react'

export const useMain = () => {
    const [height, setHeight] = useState({})
    useEffect(() => {
        const header = document.getElementById('header').offsetHeight
        const control = document.getElementById('control').offsetHeight
        const footer = document.getElementById('footer').offsetHeight

        setHeight(header + control + footer)
    }, [])

    return {height}
}
