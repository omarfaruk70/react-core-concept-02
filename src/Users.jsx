import { useEffect, useState } from "react"

// this lessor is about Jsx useEffect 
export default function Users(){
    const [users, setUsers ] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( res => res.json())
        // .then(data => console.log(data) )
        .then(data => setUsers(data))
    }, []);
    
    return (
        <div>
            <h3>Users data lenght:{users.length} </h3>
        </div>
    )
}
/** import useEffect
 * 1. decleare a state to hold the data
 * 2. useEffect with callback and dependency (array)
 * 3. use fetch or async await with fetch
 * if there is no dependency pass an empty array []. otherwise it will run infinity
 */