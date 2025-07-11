import { useState } from "react";

export default function SquatCounter() {
    const [squats, setSquats] = useState(0);

    return (
        <div style={{ textAlign: "center", marginTop: "1rem"}}>
        
        <h2>Squat Counter</h2>
        <p>You have completed <strong>{squats}</strong> squat{squats >= 0 ? "s" : ""}</p>

        <button onClick={() => setSquats(squats + 1)} style = {{cursor: "pointer", transition: "transform 0.2s", transform: "scale(1)", marginRight: "0.5rem"}} onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05")} onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}>Add Squats</button>
        <button onClick={() => setSquats(0)} style = {{cursor: "pointer", transition: "transform 0.2s", transform: "scale(1)", marginRight: "0.5rem"}}onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05")} onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}>Clear</button>

        </div>
    )
}