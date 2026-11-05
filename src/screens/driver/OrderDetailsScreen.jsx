import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StoreIcon from "@mui/icons-material/Store";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";

export default function OrderDetailsScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div className="flex flex-col h-full bg-white">
      <header className="bg-primary text-white p-4 flex items-center gap-2">
        <button onClick={() => navigate(-1)} className="p-1">
          <ArrowBackIcon />
        </button>
        <h1 className="text-lg font-bold flex-1 text-center">تفاصيل الطلب #{id}</h1>
      </header>
      <main className="flex-1 overflow-auto p-4 space-y-3">
        <div className="p-3 bg-secondary rounded-xl space-y-2">
          <div className="flex items-center gap-2">
            <StoreIcon sx={{ color: "#3E2723" }} />
            <div className="flex-1">
              <div className="flex items-center justify-between gap-2">
                <p className="text-text font-semibold">مقهى دلة الأصلي</p>
                <div className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-full">
                  <StarIcon sx={{ color: "#C89B3C", fontSize: 14 }} />
                  <span className="text-xs font-semibold text-text">4.9</span>
                </div>
              </div>
              <p className="text-xs text-muted">حي النخيل، شارع 5</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <PersonIcon sx={{ color: "#3E2723" }} />
            <div>
              <p className="text-text font-semibold">محمد أحمد</p>
              <p className="text-xs text-muted">0501234567</p>
            </div>
          </div>
        </div>
        <div className="p-3 bg-white border border-gray-100 rounded-xl space-y-1">
          <p className="text-text font-semibold mb-1">الأصناف</p>
          <p className="text-sm text-text">قهوة عربية × 1</p>
          <p className="text-sm text-text">آيس لاتيه × 2</p>
        </div>
        <div className="p-3 bg-white border border-gray-100 rounded-xl space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-muted">أجرة التوصيل</span>
            <span className="text-accent font-semibold">5,000</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-text font-semibold">المجموع</span>
            <span className="text-primary font-semibold">25,000</span>
          </div>
        </div>
      </main>
      <button onClick={() => navigate("/")} className="absolute top-4 left-4 text-white text-xs bg-black/30 px-2 py-1 rounded">← الرئيسية</button>
    </div>
  );
}
