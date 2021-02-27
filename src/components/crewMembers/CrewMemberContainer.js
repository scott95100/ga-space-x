import { useState, useEffect } from 'react';
import axios from 'axios'
import CrewMember from './CrewMember'


const CrewMemberContainer = () => {
    const [crewMembers, setCrewMembers] = useState ([]);
    useEffect(() => {
        const fetchCrewMembers = async () => {
            const response = await axios.get('https://api.spacexdata.com/v4/crew');
            const data = response.data;
            setCrewMembers(data)
        }
        fetchCrewMembers();
    }, [])
    const crewMemberList = crewMembers.map((crewMember, index) => {
        return <CrewMember crewMember={crewMember} key={index} />
    });
    return (
        <div>
            {crewMemberList}
        </div>
    )
}

export default CrewMemberContainer;
