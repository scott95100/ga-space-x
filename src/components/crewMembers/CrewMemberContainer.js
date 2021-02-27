import { useState, useEffect } from 'react';
import axios from 'axios'
import CrewMember from './CrewMember'


// {
//     "name": "Robert Behnken",
//     "agency": "NASA",
//     "image": "https://imgur.com/0smMgMH.png",
//     "wikipedia": "https://en.wikipedia.org/wiki/Robert_L._Behnken",
//     "launches": [
//         "5eb87d46ffd86e000604b388"
//     ],
//     "status": "active",
//     "id": "5ebf1a6e23a9a60006e03a7a"
// }

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
