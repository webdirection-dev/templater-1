import './controlPanel.css'
import Select from 'react-select'
import DataForItem from "../../static/data/dataForItem"

import {useControlPanel} from './use-control-panel'

const ControlPanel = () => {
    const {setStand, setQualities, setSelectTG, setSelectPriority, setSelectEffect} = useControlPanel()

    return(
        <div id='control' className="control-panel">
            <div className="control-panel__select">
                <label htmlFor='stand' className='control-panel__label bot-stand'> Контур </label>

                <Select
                    isClearable
                    name='stand'
                    className='select-react'
                    onChange={setStand}
                    options={DataForItem.stand}
                    placeholder='Контур'
                    noOptionsMessage={() => 'Не найдено'}
                />
            </div>

            <div className="control-panel__select">
                <label htmlFor='country' className='control-panel__label'>ЕАЭС</label>

                <Select
                    isClearable
                    name='country'
                    className='select-react'
                    onChange={setQualities}
                    options={DataForItem.qualities}
                    placeholder='ЕАЭС'
                    noOptionsMessage={() => 'Не найдено'}
                />
            </div>

            <div className="control-panel__select">
                <label htmlFor='tg' className='control-panel__label' > ТГ</label>

                <Select
                    isMulti
                    className='select-react'
                    onChange={setSelectTG}
                    options={DataForItem.tg}
                    placeholder='Выбрать ТГ'
                    noOptionsMessage={() => 'ТГ не найдена'}
                />
            </div>

            <div className="control-panel__select">
                <label htmlFor='priority' className='control-panel__label'>Приоритет</label>

                <Select
                    isClearable
                    name='priority'
                    className='select-react'
                    onChange={setSelectPriority}
                    options={DataForItem.priority}
                    placeholder='Приоритет'
                />
            </div>

            <div className="control-panel__select">
                <label htmlFor='effect' className='control-panel__label'>Влияние</label>

                <Select
                    isClearable
                    name='effect'
                    className='select-react'
                    onChange={setSelectEffect}
                    options={DataForItem.effect}
                    placeholder='Влияние'
                />
            </div>
        </div>
    )
};

export default ControlPanel;
