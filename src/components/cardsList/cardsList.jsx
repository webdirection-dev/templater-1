import './cardsList.css'

import OpeningSummary from '../../features/opening/OpeningSummary'
import UpdateSummary from "../../features/update/UpdateSummary"
import ClosingSummary from '../../features/closing/ClosingSummary'

import Alert from '../alert/alert'
import {useCardList} from './use-card-list'
import Addons from '../addons/Addons'

const CardsList = () => {
    const {setAlert, isAlert} = useCardList()

    return(
        <div className="summary-forms">
            {/*Открытие*/}
            <div className="summary">
                <OpeningSummary setAlert={setAlert} />
            </div>

            <div className="summary summary__helpers">
                <UpdateSummary setAlert={setAlert}/>
                <Addons setAlert={setAlert}/>
            </div>

            {/*Закрытие*/}
            <div className="summary">
                <ClosingSummary setAlert={setAlert}/>
            </div>

            <Alert isAlert={isAlert} />
        </div>
    )
}

export default CardsList
