import { useEffect, useState } from "react"
import SingleFriend from "./SingleFriend";

export default function Friends(){
    // style rule 
    const stylesFriends = {
        margin: '15px',
        padding: '15px',
        border: '5px solid yellow',
        borderRadius: '8px'
    };
    // creating a state
    const [friends, setFriends] = useState([]);
    // useEffect with dependency array
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data => setFriends(data))

    }, [])
    return (
        <div className='stylesFriends'>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend=> <SingleFriend friend={friend}></SingleFriend>)
            }
        </div>
    )
}




/**
 * 1. create a state to hold data
 * 2. useEffect with dependency array 
 * 3. use fetch to load data.
 * 4. set loaded data in state
 */