import './Landingpad.css'


const Landingpad = (props) => {
    const { name, region, landing_attempts, landing_successes } = props.landingpad;

   
    return (
        <div className="landingpads">
            <ul>
                <li>Name: {name}</li>
                <li>region: {region}</li>
                <li>Landing Attempts: {landing_attempts}</li>
                <li>Landing Successes: {landing_successes}</li>
            </ul>
        </div>
    )
}

export default Landingpad;