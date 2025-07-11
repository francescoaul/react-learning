import { useState } from "react";

export default function StudySessionCounter() {
    const [sessions, setSessions] = useState(0);

    return (
        <div style={{ textAlign: "center", marginTop: "2rem"}}>

            <h2>Study Sessions</h2>
            <p>You've had <strong>{sessions}</strong> study session{sessions !== 1 ? "s" : ""} so far.</p>

            <button onClick={() => setSessions(sessions + 1)}>Add a Session</button>
            <button onClick={() => setSessions(0)}>Reset Sessions</button>
        </div>
    )
}