import { useState } from "react";

export default function PagesRead() {
    const [ pages, setPages] = useState(0);

    const [ increment, setIncrement ] = useState(1)

    function handleAdd() {
        const i = Number(increment);
        if (isNaN(i) || i < 1) 
        return ;
        setPages(prev => prev + i);
    }

    return (
        <div style={{ textAlign: "center", marginTop: "3rem"}}>

        <h2>Pages Read</h2>

        <input 
            type="number"
            min="1"
            value={increment}
            onChange={e => setIncrement(e.target.value)}
            style={{ width: "4rem", marginRight: "0.5rem"}}
        />

        <button onClick={handleAdd}>Add Pages</button>
        <button onClick={() =>setPages(0)}>Clear</button>

        <p>You have read {pages} page{pages !== 1 ? "s" : ""}</p>

        </div>
    )
}