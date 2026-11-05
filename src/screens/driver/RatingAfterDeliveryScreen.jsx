import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

export default function RatingAfterDeliveryScreen() {
  const navigate = useNavigate();
  const chips = ["مهذب", "دفع بسرعة", "عنوان واضح", "تأخر قليلًا"];

  return (
    <div className="flex flex-col h-full bg-white p-6 space-y-6">
      <header className="text-center">
        <h1 className="text-lg font-bold text-text">كيف كانت تجربتك مع العميل؟</h1>
      </header>
      <main className="flex-1 space-y-6">
        <div className="flex justify-center gap-2">
          {[1,2,3,4,5].map((star) => (
            <StarIcon key={star} sx={{ fontSize: 40, color: "#C89B3C" }} />
          ))}
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {chips.map((chip) => (
            <button key={chip} className="px-3 py-1.5 rounded-full bg-gray-100 text-sm text-text">{chip}</button>
          ))}
        </div>
        <textarea placeholder="ملاحظة (اختياري)" className="w-full p-3 border border-gray-200 rounded-xl h-24 outline-none"></textarea>
      </main>
      <footer className="space-y-2">
        <button onClick={() => navigate("/driver/home")} className="w-full py-3 rounded-xl bg-primary text-white font-semibold">إرسال</button>
        <button onClick={() => navigate("/driver/home")} className="w-full text-sm text-muted">تخطي</button>
      </footer>
    </div>
  );
}
