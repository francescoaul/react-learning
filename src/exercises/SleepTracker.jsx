import { useState } from "react";

export default function SleepTracker() {
    const [hours, setHours] = useState(0);

    return (
        <div style={{ textAlign: "center", marginTop: "2rem"}}>
            <h2>Sleep Tracker</h2>

            <p>You slept <strong>{hours} </strong> hours</p>

            <button onClick={() => setHours (hours + 1)}>Increment Hours</button>
            <button onClick={() => setHours(0)}>Reset Hours</button>
        </div>
    )
}