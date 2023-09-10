"use client";
import { useRouter } from "next/navigation";
import axios from "axios";

type Message = {
    id: number;
    message: string;
}

const DeleteMessage = ({ message }: { message: Message }) => {

    const router = useRouter();

    const handleDelete = async (messageId: number) => {
        await axios.delete(`/api/messages/${messageId}`);
        router.refresh();
    }
    return (
        <div>
            <button type="button" onClick={()=>handleDelete(message.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6 mr-2 mt-[3px] cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>
    )
}

export default DeleteMessage