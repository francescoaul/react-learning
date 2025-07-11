import { useState } from "react";

export default function WaterTracker() {

const [glasses, setGlasses] = useState(0);

return (
    <div style={{textAlign: "center", marginTop: "2rem" }}>
        <h2>Water Intake Tracker</h2>

    <p>You have had <strong>{glasses}</strong> glass{glasses !== 1 ? "es" : ""}</p>

    <button onClick={() => setGlasses(glasses + 1)}>
        Drink a glass 💧
    </button>

    <button
        onClick={() => setGlasses(0)}
        style={{ marginLeft: "1rem"}}>
        Reset
    </button>

    </div>
  )
}