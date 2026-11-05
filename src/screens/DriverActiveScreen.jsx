import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function DriverActiveScreen() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full bg-white">
      <header className="bg-primary text-white p-4 flex items-center gap-2">
        <button onClick={() => navigate("/driver/available")} className="p-1">
          <ArrowBackIcon />
        </button>
        <h1 className="text-lg font-bold flex-1 text-center">الطلب النشط</h1>
      </header>
      <main className="flex-1 overflow-auto p-4 space-y-3">
        <div className="p-3 bg-secondary rounded-lg space-y-1">
          <div className="text-text font-semibold">تفاصيل الطلب</div>
          <div className="text-sm text-muted">المقهى: مقهى دلّة الأصلي</div>
          <div className="text-sm text-muted">العناصر: قهوة عربية × 1، آيس لاتيه × 2</div>
          <div className="text-sm text-muted">أجرة التوصيل: 12 ر.س</div>
          <div className="text-sm text-muted">عنوان التوصيل: حي النخيل، شارع 5</div>
        </div>
      </main>
      <footer className="p-4 space-y-2">
        <button onClick={() => {}} className="w-full py-3 rounded-lg bg-accent text-white font-semibold text-lg">
          استلمت الطلب
        </button>
        <button onClick={() => navigate("/driver/available")} className="w-full py-3 rounded-lg bg-primary text-white font-semibold text-lg">
          تم التوصيل
        </button>
      </footer>
    </div>
  );
}
