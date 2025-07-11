import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style= {{ textAlign: "center", marginTop: "2rem"}}>
            <button
                onClick={() => setCount(count + 1)}
                style={{padding: "0.5rem 1rem", fontSize: "1.25rem"}}
            >
                count is {count}
            </button>
        </div>
    )
}