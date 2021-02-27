import { useState, useEffect } from 'react';
import axios from 'axios'
import Dragon from './Dragon'


const DragonContainer = () => {
    const [dragons, setDragons] = useState ([]);
    useEffect(() => {
        const fetchDragons = async () => {
            const response = await axios.get('https://api.spacexdata.com/v4/dragons');
            const data = response.data;
            setDragons(data)
        }
        fetchDragons();
    }, [])
    const dragonsList = dragons.map((dragon, index) => {
        return <Dragon dragon={dragon} key={index} />
    });
    return (
        <div>
            {dragonsList}
        </div>
    )
}

export default DragonContainer;