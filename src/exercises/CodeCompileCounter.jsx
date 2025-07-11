import { useState } from "react";

export default function CodeCompileCounter() {
    const [compiles, setCompiles] = useState(0)

    return (
        <div style={{ textAlign: "center", marginTop: "1rem"}}>
            <h2>Code Compiler</h2>

            <p>You have compiled <strong>{compiles}</strong> code base</p>

            <button onClick={() => setCompiles(compiles + 1)}>Compile</button>
            <button onClick={() => setCompiles(0)} style={{ marginLeft: "0.5rem"}}>Decompile</button>
        </div>
    )
}