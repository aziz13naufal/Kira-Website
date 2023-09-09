"use client";
import { useState, SyntheticEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const AddMessage = () => {
    const [message, setMessage] = useState("");

    const router = useRouter();

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await axios.post('/api/messages', {
            message: message
        })
        setMessage("");
        router.refresh();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button type="submit">Send.</button>
        </form>
    )
}

export default AddMessage
