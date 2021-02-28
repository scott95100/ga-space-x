import { useState, useEffect } from 'react';
import axios from 'axios'
import Roadster from './Roadster'


const RoadsterContainer = () => {
    const [roadsters, setRoadsters] = useState ([]);
    useEffect(() => {
        const fethchRoadsters = async () => {
            const response = await axios.get('https://api.spacexdata.com/v4/roadster');
            const data = response.data;
            setRoadsters(data)
        }
        fethchRoadsters();
    }, [])

    console.log({roadsters});

    // const roadsterList = roadsters.map((roadster, index) => {
    //     return <Roadster roadster={roadster} key={index} />
    // });

    
    return (
        <div>
            {roadsters}
        </div>
    )
}

export default RoadsterContainer;