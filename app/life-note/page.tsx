import { PrismaClient } from "@prisma/client"
import DeleteMessage from "./deleteMessage";

const prisma = new PrismaClient();

export const revalidate = 0;

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
      <div className="absolute top-0 left-0 sm:left-0 flex flex-col-reverse px-4 pt-20 sm:pt-10 sm:items-center mt-5 pb-20 sm:pb-0">
        {messages.map((message, index) => (
            <div key={message.id} className="flex">
                <DeleteMessage message={message} />
                <p className="mb-[20px] sm:w-[500px] leading-7 text-xl font-medium text-glow">{message.message}</p>
            </div>
        ))}
        </div>
    )
}

export default Book
