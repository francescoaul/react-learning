import { useState } from "react";

export default function Pomodoro() {
    const [sessions, setSessions] = useState(0)

    return (
        <div style={{ textAlign: "center", marginTop: "1rem"}}>
            <h2>Pomodoro Sessions</h2>

            <p>You have completed <strong>{sessions}</strong> pomodoro session{sessions !== 1 ? "s" : ""}</p>
            
            <button onClick={() => setSessions(sessions + 1)}>Add Session</button>
            <button onClick={() => setSessions(0)}>Clear</button>
        </div>
    )
}