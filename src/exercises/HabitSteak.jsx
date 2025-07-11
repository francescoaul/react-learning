import { useState } from "react";

export default function HabitStreak() {
    const [days, setDays] = useState(0)

    return (
        <div style={{ textAlign: "right", marginTop: "5rem"}}>
        <h2>Habit Streaks</h2>
        <p>You've Steaked for <strong>{days}</strong> day{days !== 1 ? "s" : ""}</p>

        <button onClick={() => setDays (days + 1)}>Streak!</button>

        <button 
        onClick={() => setDays(0)}
        style={{ marginLeft: "0.5rem", backgroundColor: "lightblue"}}
        >Reset</button>
        </div>
    )
}