import { useInventoryManager } from "../hooks/useInventoryManager";
import { useState } from "react";

export default function InventoryTracker() {
    const { items, addItem, removeItem } = useInventoryManager([]);
    const [ text, setText ]= useState("");

    return (
        <div style={{padding: "1rem", maxWidth: "40px", margin: "auto" }}>
            <h2>Inventory</h2>
            <ul>
                {items.map((it) => (
                    <li key={it.id}>
                        {it.name} <button onClick={() => removeItem(it.id)}>❌</button>
                    </li>
                ))}
            </ul>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="New item"
            />
            <button
            onClick={() => {
                addItem({ id: Date.now(), name: text});
            }}
            >
                Add
            </button>
        </div>
    )
}