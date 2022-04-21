import {useSelector} from "react-redux";
import NotifyItemOps from "../notifyItemOps/notifyItemOps";
import NotifyItemStaff from "../notifyItemStaff/notifyItemStaff";

const NotifyList = ({toCopyMarkdown}) => {
    const {notifyPeople} = useSelector(state => state.notifyReducer)

    return(
        <div className="card__notify summary__notifyPerson-txt">
            <div className='notify__body'>
                <div className="notify__content">
                    <h6 className='notify__title'>ШТАБ</h6>
                    <div className="notify__divider" />

                    <div className="notify__labels notify__ops">
                        {
                            notifyPeople.notifyStaff.map(i => {
                                return(
                                    <NotifyItemStaff
                                        key={i.name}
                                        {...i}
                                    />
                                )
                            })
                        }
                    </div>

                    <div className="txt-out__card-footer">
                        <button
                            className="btn-floating waves-effect waves-light main__action-btn-green"
                            onClick={() => {toCopyMarkdown('notify', 'staff')}}
                        >
                            <i className="material-icons">content_copy</i>
                        </button>
                    </div>
                </div>

                <div className="notify__divider-vert" />

                <div className="notify__content">
                    <h6 className='notify__title'>OPS</h6>
                    <div className="notify__divider" />

                    <div className="notify__labels">
                        {
                            notifyPeople.notifyOps.map(i => {
                                return(
                                    <NotifyItemOps
                                        key={i.name}
                                        {...i}
                                    />
                                )
                            })
                        }
                    </div>

                    <div className="txt-out__card-footer">
                        <button
                            className="btn-floating waves-effect waves-light main__action-btn-green"
                            onClick={() => {toCopyMarkdown('notify', 'ops')}}
                        >
                            <i className="material-icons">content_copy</i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotifyList