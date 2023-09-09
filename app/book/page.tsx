import { PrismaClient } from "@prisma/client"

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
      <div>
        {messages.map((message, index) => (
        <div key={message.id}>
            <p>{message.message}</p>
        </div>
        ))}
        </div>
    )
}

export default Book
