import './Roadster.css'


const Roadster = (props) => {
    // const { name, launch_date_utc } = props.roadster;

   
    return (
        <div className="roadster">
            <ul>
                <p>{props.roadster}</p>
                {/* <li>Name: {name}</li>
                <li>Launch Date: {launch_date_utc}</li> */}
                {/* <video width="320" height="240" autoplay source src={video} type="video/mp4"></video> */}
            </ul>
        </div>
    )
}

export default Roadster;