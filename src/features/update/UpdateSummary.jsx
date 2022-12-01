import './updateSummary.css'
import TextareaAutosize from "react-textarea-autosize"

import {useUpdate} from './hooks/use-update'

const UpdateSummary = ({setAlert}) => {
    const {copySummary, updateDescription, isInside, stand, qualities, onWriteInputUpdate} = useUpdate()

    return(
        <div className="card blue-grey darken-1">
            <div className="card-content white-text summary-head">
                <div className="summary__checkbox-content">
                    <span className={isInside ? 'card-title' : 'hide'}>ВНУТРЕННИЙ</span>
                    <span className="card-title">Инцидент в работе</span>
                </div>

                <span className="card-title"><span>{stand}</span> <span>{qualities}</span></span>
            </div>

            <div className="card-action card-update">
                <TextareaAutosize
                    className='summary__area'
                    value={updateDescription}
                    name="notesUpdate"
                    placeholder='Update...'
                    onChange={onWriteInputUpdate}
                />
            </div>

            <div className="txt-out__card-footer">
                <button
                    className="btn-floating waves-effect waves-light main__action-btn-green"
                    onClick={() => {
                        setAlert(true)
                        copySummary()
                    }}
                >
                    <i className="material-icons">content_copy</i>
                </button>
            </div>
        </div>
    )
}
export default UpdateSummary
