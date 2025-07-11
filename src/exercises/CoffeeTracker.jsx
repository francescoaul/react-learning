import { useState } from "react";

export default function CoffeeTracker() {
    const [cups, setCups] = useState(0);

    return (
        <div style={{ textAlign: "center", marginTop: "2rem"}}>

        <h2>Track Your Cups of Coffee!</h2>
        <p>You've had <strong>{cups}</strong> cup{cups !== 1 ? "s" : "" } of coffee!</p>

        <button onClick={() => setCups(cups + 1)}>Have a Coffee</button>
        <button onClick={() => setCups(0)}>Reset Cups</button>

        </div>
    )
}