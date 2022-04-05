import React, { useEffect, useState } from 'react';
import useVolunteers from '../../hooks/useVolunteers';
import Activity from '../Activity/Activity';
import './Main.css';

const Main = () => {
    // const [volunteers] = useVolunteers();
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    useEffect( () =>{
        console.log('inside use Effect')
        fetch('data.json')
        .then(res => res.json())
        .then(data => {
            const match = data.filter(d => d.title.includes(searchText));
            setSearchResult(match);
        })
    }, [searchText])

    const handleSearchChange = event =>{
        setSearchText(event.target.value);
    }
    
    // const handleSearchChange2 = event =>{
    //     const searchText = event.target.value;
    //     const match = volunteers.filter(v => v.title.includes(searchText));
    //     setSearchResult(match);
    // }

    return (
        <div>
            <h2>Volunteer Activities: {searchResult.length}</h2>
            <div style={{'margin': '20px'}}>
                <input onChange={handleSearchChange} type="text" placeholder='search'/>
            </div>
            <div className="activity-container">
                {
                    searchResult.map(activity => <Activity
                        key={activity._id}
                        activity={activity}
                    ></Activity>)
                }
            </div>
        </div>
    );
};

export default Main;