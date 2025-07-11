import { useState } from "react";

export default function PushCounter() {
    const [reps, setReps] = useState(0);

    return (
        <div style={{ textAlign: "center", marginTop: "2rem"}}>

        <h2>Pushups</h2>

        <p>You've completed <strong>{reps}</strong> rep{reps !== 1 ? "s" : ""}</p>

        <button onClick={() => setReps (reps +1 )}>Reps</button>
        <button onClick={() => setReps(0)}>Reset Reps</button>
        
        </div>

    )
}