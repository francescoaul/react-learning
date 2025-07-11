
import React, { useState } from "react"
import Card from "../components/Card"

export default function CardDemo() {

    
const [ count, setCount ] = useState(0)

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                padding: "2rem",
                gap: "1rem"
            }}
        >

        <Card title="Welcome">
            <p>Count: {count}</p>
            
            <button onClick={() => setCount(c => c + 1)}>+</button>
            <button onClick={()=> setCount(0)}style={{ marginLeft: "0.5rem", color: "white", backgroundColor: "darkgray"}}>Clear</button>
        </Card>

        <Card
        title="Profile"
        footer={<button onClick={() => alert("Clicked!")}>Edit</button>}
        >

        </Card>

        </div>
    )
}
