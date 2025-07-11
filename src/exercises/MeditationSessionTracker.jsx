import { useState } from "react";

export default function MeditationSessionTracker() {
    const [sessions, setSessions] = useState(0)

    return (
        <div style={{textAlign: "center", marginTop: "2rem"}}>

            <h2>Meditation Sessions</h2>
            <p>You've logged <strong>{sessions}</strong> session{sessions !== 1 ? "s" : ""}</p>
            <button onClick={() => setSessions (sessions + 1)}>Add Session 🧘</button>
            <button onClick={() => setSessions(sessions - 1)}>Delete</button>
            <button onClick={() => setSessions(0)}>Clear All Sessions</button>
        </div>
    )
}