import ControlPanel from "../../features/control/ControlPanel"
import CardsList from "../../components/cardsList/cardsList"
import {useMain} from './useMain'

const Main = () => {
    const {height} = useMain()

    return(
        <>
            <ControlPanel />

            <div className='content container' style={{minHeight: `calc(100vh + 2px - ${height}px)`}}>
                <CardsList />
            </div>
        </>
    )
}

export default Main
