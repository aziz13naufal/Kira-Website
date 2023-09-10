"use client";
import { useState, SyntheticEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const AddMessage = () => {
    const [message, setMessage] = useState("");
    const [isMutating, setIsMutating] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        setIsMutating(true);
        await axios.post('/api/messages', {
            message: message
        });
        setMessage('');
        setTimeout(() => {
            setIsMutating(false);
            router.refresh();
        }, 5000);
    }
    return (
        <form onSubmit={handleSubmit} className="mt-20 text-xl w-fit mx-auto mb-20 sm:mb-0">
            <div>
                <div className="border-white border-b-[1px] whitespace-nowrap">
                    <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} className="px-1 bg-black focus:outline-none" />
                    {!isMutating ? (
                        <button type="submit" className="text-gray-500">Send.</button>
                    ) : (
                        <button type="button" className="text-gray-500 invisible">Send.</button>
                    )}
                </div>
            </div>
                {!isMutating ? (
                    <></>
                ) : (
                    <div className="text-glow absolute smooth-animation bottom-0 right-0 text-right p-4">Wait for 5 seconds for the next message delivery.</div>
                )}
        </form>
    )
}

export default AddMessage
