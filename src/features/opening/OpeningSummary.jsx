import TextareaAutosize from 'react-textarea-autosize'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import './openingSummary.css'

import {useOpening} from './hooks/use-opening'

const OpeningSummary = ({setAlert}) => {
    const {
        copySummary,
        copyBot,
        handelInside,
        onWriteInput,

        isPrimary,

        stand,
        qualities,
        tg,
        priority,
        effect,

        isInside,
        openingTitle,
        jiraId,
        systemAdmins,
        openingDescription,

        startDate,
        setStartDate,

        isWarning,
        setWarning,
    } = useOpening()

    return(
        <div className="card blue-grey darken-1">
            <div className="card-content white-text summary-head">

                <div className={isInside ? 'summary__checkBox summary__checkBox-topCheckBox' : 'summary__checkBox'}>
                    <div className="summary__checkbox-content">
                        <span className={isInside ? 'card-title amber-text text-lighten-3' : 'hide'}>{isInside ? 'ВНУТРЕННИЙ' : null}</span>
                        <span className="card-title">Инцидент ОТКРЫТ</span>
                    </div>

                    <label className={isInside ? 'summary__chooseInsideLabel mt-7' : 'summary__chooseInsideLabel'}>
                        <input
                            type="checkbox"
                            name='inside'
                            className="filled-in summary__chooseInside"
                            checked={isInside}
                            onChange={handelInside}
                        />
                        <span>Внутренний</span>
                    </label>
                </div>

                <span className="card-title"><span className='red-text text-lighten-3 colorCoral'>{stand}</span> <span className='colorAqua'>{qualities}</span></span>
            </div>

            <div className="card-action">
                <div className="summary__body">
                    <div className="bot-topic">*</div>

                    <TextareaAutosize
                        className='summary__area'
                        value={openingTitle}
                        name="problem"
                        placeholder='Тема...'
                        onChange={onWriteInput}
                    />

                    <p>ТГ: <span>{tg}</span></p>

                    <p>Приоритет: <span>{priority}</span></p>
                    <p>Степень влияния: <span>{effect}</span></p>

                    <div className="summary__ops">
                        <p className={isWarning ? 'red lighten-1' : null}>JIRA/OPS-</p>
                        <input
                            value={jiraId}
                            name='ops'
                            className={isPrimary ? 'form__input summary__ops-input summary__ops-input-colors' : 'form__input orange darken-1 summary__ops-input'}
                            placeholder='00000'
                            type="text"
                            onChange={onWriteInput}
                            onBlur={ e => e.target.value.length < 5 && setWarning(true) }
                        />
                    </div>

                    <div className='summary__time'>
                        <div className='summary__time-title bot'>Начало инцидента:</div>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            showTimeSelect
                            dateFormat="dd.MM.yyyy HH:mm"
                            timeFormat={"HH:mm"}
                        />
                    </div>

                    <div className='summary__whoIsNotify'>
                        <div className='summary__whoIsNotify-title'>Кто оповещён:</div>
                        <TextareaAutosize
                            className='summary__area'
                            value={systemAdmins}
                            name="admins"
                            onChange={onWriteInput}
                        /></div>

                    <p className='bot'>Примечание:</p>

                    <TextareaAutosize
                        className='summary__area'
                        value={openingDescription}
                        name="description"
                        placeholder='Описание проблемы...'
                        onChange={onWriteInput}
                    />
                </div>
            </div>

            <div className="txt-out__card-footer">
                <button
                    className="btn-floating waves-effect waves-light main__action-btn-green mr15"
                    onClick={() => {
                        setAlert(true)
                        copyBot()
                    }}
                >
                    <i className="material-icons">adb</i>
                </button>

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

export default OpeningSummary
