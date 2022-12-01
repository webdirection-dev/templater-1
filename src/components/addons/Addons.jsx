import './addons.css'
import PanelAddons from '../../features/panelAddons/PanelAddons'
import StaffSummary from '../../features/staff/StaffSummary'
import Mi from '../../features/mi/Mi'
import {useAddons} from './useAddons'

const Addons = ({setAlert}) => {
    const {start, staff, mi, styleAddons} = useAddons()

    return(
        <div className="addons" style={styleAddons}>
            <StaffSummary setAlert={setAlert} start={start} staff={staff}/>
            <Mi setAlert={setAlert} start={start} mi={mi}/>
            <PanelAddons />
        </div>
    )
}

export default Addons
