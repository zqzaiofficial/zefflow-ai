"use client"

export default function Message({ message, sender }: { message: string, sender: string }) {
    return <div className={`p-2 rounded-lg w-fit ${sender === "user" ? "!bg-blue-500 !text-white ml-auto rounded-br-none" : "bg-gray-200 mr-auto rounded-bl-none"} mb-2`}>{message}</div>;
}


