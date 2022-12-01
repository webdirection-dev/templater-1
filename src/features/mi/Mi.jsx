import './mi.css'
import TextareaAutosize from 'react-textarea-autosize'
import {useMi} from './use-mi'

const Mi = ({setAlert, start, mi}) => {
    const {stand, tg, priority, dev, support, miNumber, title, toGo, toDev, calls, handleChange, copySummary} = useMi()
    return(
        <div
            id='mi'
            className={start ? 'card blue-grey darken-1' : !start && mi ? 'card blue-grey darken-1 card-opacity' : 'hide'}
        >
            <div className="card-content white-text summary-head">

                <div className="summary__checkbox-content">
                    <span className="card-title staff-title">MASS</span>
                </div>
            </div>

            <div className="card-action">
                <form className='mi-header'>
                    <select id='miSupport' name='miSupport' className='browser-default mi-select' onChange={handleChange}>
                        <option value="2ЛП ГИС МТ">2ЛП ГИСМТ</option>
                        <option value="2ЛП МДЛП">2ЛП МДЛП</option>
                    </select>


                    {/*<label htmlFor="miSupport" className='mi-input-label'>2ЛП:*/}
                    {/*    <select id='miSupport' name='miSupport' className='browser-default mi-select' onChange={handleChange}>*/}
                    {/*        <option value="2ЛП ГИС МТ">ГИСМТ</option>*/}
                    {/*        <option value="2ЛП МДЛП">МДЛП</option>*/}
                    {/*    </select></label>*/}

                    <div className="mi-number">
                        <label htmlFor="miNumber" className='mi-input-label'>MI:</label>
                        <input
                            type="text"
                            id="miNumber"
                            name="miNumber"
                            className='browser-default'
                            value={miNumber}
                            onChange={handleChange}
                        />
                    </div>

                    <label className='mi-dev-label'>
                        <input
                            type="checkbox"
                            name='miDev'
                            className="filled-in"
                            checked={dev}
                            onChange={handleChange}
                        />
                        <span className='mi-dev-name'>To Dev</span>
                    </label>
                </form>

                <p className='mi-control'><span>{support}</span> завела массовый инцидент <span>MI{miNumber}</span></p>
                <p className='mi-control'>Приоритет: <span>{priority ? priority : 'Средний'}</span></p>
                <p className='mi-control'>Контур: <span>{stand ? stand : 'ПРОД'}</span></p>
                <p className='mi-control'>ТГ: <span>{tg ? tg : 'Не определено'}</span></p>

                <form className='mi-body'>
                    <TextareaAutosize
                        className='summary__area'
                        value={title}
                        name="miTitle"
                        placeholder='Title'
                        onChange={handleChange}
                    />
                </form>

                <div className="mi-sub-control" style={dev ? {justifyContent: 'space-between'} : undefined}>
                    <div className="mi-desc">
                        <p className='mi-control mi-control-p'>Передан:</p>
                        <input
                            type="text"
                            name="miToGo"
                            value={toGo}
                            className='browser-default'
                            onChange={handleChange}
                        />
                    </div>

                    {dev && (
                        <div className="mi-desc">
                            <p className='mi-control mi-control-p'>Задача:</p>
                            <input
                                type="text"
                                name="miToDev"
                                value={toDev}
                                className='browser-default'
                                onChange={handleChange}
                            />
                        </div>
                    )}

                    <div className="mi-desc">
                        <p className='mi-control mi-control-p'>Обращений:</p>
                        <input
                            type="text"
                            name="miCalls"
                            value={calls}
                            className='browser-default'
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <p className='mi-control mi-control-p'>Массовый инцидент передан <span>{toGo}</span></p>
                {dev && <p className='mi-control mi-control-p'>Заведена задача на разработку <span>{toDev}</span></p>}
                <p className='mi-control mi-control-p'>На данный момент зафиксировано <span>{calls}</span> обращений от УОТ</p>
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

export default Mi
