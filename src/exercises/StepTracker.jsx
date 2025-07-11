import { useState } from "react";

export default function StepTracker() {
    const [steps, setSteps] = useState(0);

    return (
        <div style={{ textAlign: "center", marginTop: "1rem"}}>

        <h2>Step Tracker</h2>

        <p>You have logged <strong>{steps}</strong> step{steps !== 1 ? "s" : ""}</p>

        <button onClick={() => setSteps(steps + 1)}>Add Steps</button>
        <button onClick={() => setSteps(steps - 1)}>Remove Steps</button>
        <button onClick={() => setSteps(0)}>Clear All Steps</button>
        </div>
    )
}