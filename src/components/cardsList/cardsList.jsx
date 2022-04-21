import {useEffect, useState} from "react";

import './cardsList.css';
import CardItem from "../cardItem";
import NotifyPerson from "../notifyPerson";
import UpdateCard from "../updateCard";
import Alert from "../alert";

const CardsList = () => {
    const [isAlert, setAlert] = useState(false)

    const [isGetDataTime, setGetDataTime] = useState({})
    const [isGetTimeStart, setGetTimeStart] = useState({})
    const [isStartDay, setStartDay] = useState(false)

    const toGetDataTime = (start) => {
        setGetDataTime(start)
    }

    const toGetTimeStart = (start) => {
        setGetTimeStart(start)
    }

    const toGetAlert = () => {
        setAlert(true)
    }

    const closeAlert = () => {
        setAlert(false)
    }

    // componentDidUpdate
    // изчезновение алерта Скопировано в буфер
    useEffect(() => {
        const timerId = setTimeout(() => closeAlert(), 3000);

        // componentDidUnmount
        return () => clearTimeout(timerId)
        // eslint-disable-next-line
    }, [isAlert]);

    return(
        <div className="summary-forms">
            <div className="summary">
                <CardItem
                    toGetDataTime={toGetDataTime}
                    toGetTimeStart={toGetTimeStart}
                    getStartDay={(day => setStartDay(day))}

                    toGetAlert={toGetAlert}
                />
            </div>

            <div className="summary summary__helpers">
                <UpdateCard toGetAlert={toGetAlert}/>

                <NotifyPerson toGetAlert={toGetAlert}/>
            </div>

            {/*Закрытие*/}
            <div className="summary">
                <CardItem
                    flagOpening={false}
                    toGetAlert={toGetAlert}

                    isGetTimeStart={isGetTimeStart}
                    isGetDataTime={isGetDataTime}
                    isStartDay={isStartDay}
                />
            </div>

            <Alert
                isAlert={isAlert}
            />
        </div>
    )
};

export default CardsList;