import './CrewMember.css'

const CrewMember = (props) => {
    const { name, image, status } = props.crewMember;

    return (
        <div className="crew">
            <ul>
                <img className='crewImage' src={image} alt="crewMember"/>
                <li>Name: {name}</li>
                <li>Status: {status}</li>
            </ul>
        </div>
    )
}

export default CrewMember;