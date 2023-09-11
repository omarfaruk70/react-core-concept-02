// this file learned about state and how state changed
import { useState } from "react"
export default function Team(){
    const [team, setTeam] = useState(11);
    // we can use multiple useState update at a time
    const addMembers = () => {
        const newMem = team + 1;
        setTeam(newMem)
    };
    const removeMembers = () => {
        const reduceMem = team - 1;
        setTeam(reduceMem);
    }
    
    return(
        <div style={{marginTop: '20px', border: '3px solid tomato', margin:'20px', padding: '20px'}}>
            <h2>Players: {team}</h2>
            <button onClick={addMembers}>Add </button>
            <button onClick={removeMembers}>Remove</button>
        </div>
    )
}