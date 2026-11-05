import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CallIcon from "@mui/icons-material/Call";
import SendIcon from "@mui/icons-material/Send";

export default function ChatScreen() {
  const navigate = useNavigate();
  const messages = [
    { id: 1, sender: "customer", text: "أنا في الشقة رقم 3، الدور الثاني" },
    { id: 2, sender: "driver", text: "تمام، وصلت بعد دقيقتين" },
    { id: 3, sender: "customer", text: "شكراً!" },
  ];

  return (
    <div className="flex flex-col h-full bg-white">
      <header className="bg-primary text-white p-4 flex items-center gap-2">
        <button onClick={() => navigate(-1)} className="p-1">
          <ArrowBackIcon />
        </button>
        <div className="flex-1">
          <p className="font-semibold">محمد أحمد</p>
          <p className="text-xs text-white/80">متصل الآن</p>
        </div>
        <CallIcon />
      </header>
      <main className="flex-1 overflow-auto p-4 space-y-3">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === "driver" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[70%] p-3 rounded-2xl ${msg.sender === "driver" ? "bg-primary text-white" : "bg-gray-100 text-text"}`}>
              <p className="text-sm">{msg.text}</p>
            </div>
          </div>
        ))}
      </main>
      <footer className="p-3 border-t border-gray-100 flex items-center gap-2">
        <input placeholder="اكتب رسالة..." className="flex-1 p-2 bg-gray-50 rounded-xl outline-none" />
        <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
          <SendIcon sx={{ fontSize: 18 }} />
        </button>
      </footer>
    </div>
  );
}
