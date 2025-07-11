import { useState } from "react";

export function useInventoryManager(initial = []) {
    const [items, setItems] = useState(initial);

    function addItem(item) {
        setItems((all) => [...all, item]);
    }

    function removeItem(id) {
        setItems((all) => all.filter((i) => i.id !== id));
    }

    return { items, addItem, removeItem}
}