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
            <button type="button" onClick={()=>handleDelete(message.id)}>Delete</button>
        </div>
    )
}

export default DeleteMessage