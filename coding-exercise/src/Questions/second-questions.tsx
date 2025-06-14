/**
 * In cases where you’re working with a value that updates frequently,
 * such as a text input, 💡 create a custom hook useDebounce() that
 * allows you to debounce such values.
 *
 * Here’s how you can implement it:
 *
 * function App() {
 *   const [value, setValue] = useState(...);            // Assume this value updates often
 *   const debouncedValue = useDebounce(value, 1000);    // Value is debounced with a delay of 1000ms
 *
 *   // …use debouncedValue in your effect, fetch, etc.
 * }
 *
 * This setup ensures that debouncedValue only updates after 1000 milliseconds have passed without value changing.
 */

import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

const SecondQuestions = () => {
    const [text, setText] = useState("");
    const [debouncedInputValue, setDebouncedInputValue] = useState("")

    useEffect(() => {
      const debouncedText = setTimeout(() => {
        setDebouncedInputValue(text)
      }, 1000);

      return () => clearTimeout(debouncedText)
    }, [text])

    return (
        <>
            <Sidebar />
            <div>
                <h1 className="mb-4">Debounce Hook Tester</h1>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type something..." />
                <p>Debounced Value: {debouncedInputValue} </p>
            </div>
        </>
    );
};

export default SecondQuestions;