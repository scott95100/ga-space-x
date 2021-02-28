import { useState, useEffect } from 'react';
import axios from 'axios'
import Landingpad from './Landingpad'


const LandingpadContainer = () => {
    const [landingpads, setLandingpads] = useState ([]);
    useEffect(() => {
        const fetchLandingpads = async () => {
            const response = await axios.get('https://api.spacexdata.com/v4/landpads');
            const data = response.data;
            setLandingpads(data)
        }
        fetchLandingpads();
    }, [])
    const landingpadList= landingpads.map((landingpad, index) => {
        return <Landingpad landingpad={landingpad} key={index} />
    });
    return (
        <div>
            {landingpadList}
        </div>
    )
}

export default LandingpadContainer;