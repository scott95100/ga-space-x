
import './Core.css'

const Core = (props) => {
    const {last_update, status} = props.core;

    return (
        <div className="core">
            <ul>
                <li>Last Update: {last_update}</li>
                <li>Status: {status}</li>
            </ul>
        </div>
    )
}

export default Core;