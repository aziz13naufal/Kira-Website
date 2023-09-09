import { PrismaClient } from "@prisma/client"
import DeleteMessage from "./deleteMessage";

const prisma = new PrismaClient();

const getMessages = async () => {
    const res = await prisma.message.findMany({
        select: {
            id: true,
            message: true,
        }
    });
    return res;
}

const Book = async () => {
    const messages = await getMessages();
    return (
      <div>
        {messages.map((message, index) => (
        <div key={message.id} className="flex gap-x-2">
            <p>{message.message}</p>
            <DeleteMessage message={message} />
        </div>
        ))}
        </div>
    )
}

export default Book
