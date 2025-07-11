import { useState } from "react";

export default function JumpingJacksTracker() {
    const [jacks, setJacks] = useState(0);

    return (
        <div style={{textAlign: "center", marginTop: "1rem"}}>
            <h2>Jacks Incrementer</h2>
            <p>You have <strong>{jacks}</strong> jacks{jacks !== 1 ? "s" : ""}</p>

            <button onClick={() => setJacks(jacks + 1)}>Increment</button>
            <button onClick={() => setJacks(0)}>clear</button>
        </div>
    )
}