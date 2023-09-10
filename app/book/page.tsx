import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export const revalidate = 0;

const getMessages = async () => {
    const res = await prisma.message.findMany({
        select: {
            id: true,
            message: true,
        },
        orderBy: {
            id: 'desc',
        },
    });
    return res;
}

const Book = async () => {
    const messages = await getMessages();
    return (
      <div className="absolute top-0 left-0 sm:left-0 sm:right-0 flex flex-col px-4 pt-20 sm:pt-10 sm:items-center pb-20 sm:pb-0">
        {messages.map((message, index) => (
        <div key={message.id}>
            <p className="mb-[20px] sm:w-[500px] sm:text-center leading-7 text-xl font-medium text-glow">{message.message}</p>
        </div>
        ))}
        </div>
    )
}

export default Book
