import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11);
    // console.log(team);

    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    
    const teamStyle = {
        border: '2px solid green', 
        margin: '14px',
        padding: '15px',
        borderRadius: '10px',
    }
    return(
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={() => {
                const newTeam = team - 1;
                setTeam(newTeam)
            }}>Remove</button>
        </div>
    )
}