/*
Initial Setup:
    Let an array of strings called fruits, for example: ["apple", "banana", "cherry", "date", "elderberry"]
    Display this list in the UI.
Search Input:
    Use the provided input fields.
    As the user types into the input, filter the displayed list to include only those items that show on DOM
Real-Time Filtering:
    The list should update as soon as the user types into the search box, without needing to submit
No Matches:
    Display a friendly message if no items match the search term.
*/

import { useState } from "react";
import Sidebar from "../components/Sidebar";

const FirstQuestions = () => {
    const fruits = [
        "Apple",
        "Apricot",
        "Banana",
        "Blueberry",
        "Cherry",
        "Cranberry",
        "Date",
        "Dragonfruit",
        "Elderberry",
        "Fig",
        "Grape",
        "Grapefruit"
    ];

    const [input, setInput] = useState<string>("");

    const filteredFruits = fruits.filter((item) => item.toLocaleLowerCase().includes(input.toLocaleLowerCase()));

    return (
        <>
            <Sidebar />
            <div className="w-full mx-auto">
                <h1 className="mb-4">Search Input</h1>
                <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder='Search here...' />
                {filteredFruits?.length ? filteredFruits.map((item, index) => (
                    <p key={index}>{item}</p>
                )) : <p>No results found</p>}
            </div>
        </>
    );
};

export default FirstQuestions;