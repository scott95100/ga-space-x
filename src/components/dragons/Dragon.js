import './Dragon.css'

const Dragon = (props) => {
    const { name, orbit_duration_yr, first_flight } = props.dragon;

   
    return (
        <div className="dragon">
            <ul>
                <li>Name: {name}</li>
                <li>It orbited the earth for {orbit_duration_yr} years</li>
                <li>FirstFlight: {first_flight}</li>
            </ul>
        </div>
    )
}

export default Dragon;