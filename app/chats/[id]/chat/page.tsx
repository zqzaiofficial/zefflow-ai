import { Input } from "@/components/ui/input";
import Message from "@/components/ui/message";
// chat is about how to use spotify api 
const messages = [
  {
    id: 1,
    content: "Hello, how are you?",
    sender: "user",
  },
  {
    id: 2,
    content: "I'm fine, thank you!",
    sender: "assistant",
  },
  {
    id: 3,
    content: "How do I use the Spotify API?",
    sender: "user",
  },
  {
    id: 4,
    content: "You can use the Spotify API by calling the API endpoints and passing in the required parameters.",
    sender: "assistant",
  }
];

export default function Home() {
  return (
    <div>
        <main className="w-[90%] h-full mx-auto mt-10 flex flex-col">
          <div className="flex flex-col">
            {messages.map((message) => (
              <Message key={message.id} message={message.content} sender={message.sender} />
            ))}
          </div>

          <Input placeholder="Type your message here..." className="w-[90%] mx-auto mt-5" />
        </main>
    </div>
  );
}
