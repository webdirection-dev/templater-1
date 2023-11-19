import './alert.css'

const Alert = ({isAlert}) => (
    <div id="toast-container" className={isAlert ? 'main__alert' : 'hide'}>
        <div className="toast">
            Скопировано в буфер!
        </div>
    </div>
)

export default Alert
