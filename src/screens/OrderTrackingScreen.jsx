import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CoffeeIcon from "@mui/icons-material/Coffee";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import StarIcon from "@mui/icons-material/Star";

const steps = [
  { id: 1, label: "تم الاستلام", icon: AssignmentTurnedInIcon, done: true },
  { id: 2, label: "جاري التحضير", icon: CoffeeIcon, done: true },
  { id: 3, label: "مع المندوب", icon: LocalShippingIcon, done: false },
  { id: 4, label: "تم التوصيل", icon: RestaurantIcon, done: false },
];

export default function OrderTrackingScreen() {
  const navigate = useNavigate();
  const rating = 4.8;
  return (
    <div className="flex flex-col h-full bg-white">
      <header className="bg-primary text-white p-4 flex items-center gap-2">
        <button onClick={() => navigate("/")} className="p-1">
          <ArrowBackIcon />
        </button>
        <div className="flex-1 flex items-center justify-center gap-2">
          <img src="https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=200&q=80" alt="logo" className="w-8 h-8 rounded-full object-cover" />
          <h1 className="text-lg font-bold">دلّة</h1>
        </div>
        <div className="text-xs bg-accent px-2 py-1 rounded-full">مكافأة +5 نقاط</div>
      </header>
      <main className="flex-1 overflow-auto p-4 space-y-4">
        <div className="p-3 bg-secondary rounded-xl space-y-1">
          <div className="flex items-center justify-between">
            <div className="text-text font-semibold">تفاصيل الطلب</div>
            <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-full">
              <StarIcon sx={{ color: "#C89B3C", fontSize: 14 }} />
              <span className="text-xs font-semibold text-text">{rating}</span>
            </div>
          </div>
          <div className="text-sm text-muted">قهوة عربية × 1، آيس لاتيه × 2</div>
          <div className="text-sm text-muted">الإجمالي: 39 ر.س</div>
          <div className="text-sm text-muted">المقهى: مقهى دلّة الأصلي</div>
        </div>
        <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
          <div className="text-text font-bold mb-4 text-center">حالة التوصيل</div>
          <div className="relative">
            <div className="absolute right-6 top-0 bottom-0 w-0.5 bg-gray-200" />
            <div className="space-y-6 relative">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.id} className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${step.done ? "bg-accent/20" : "bg-gray-100"}`}>
                      <Icon sx={{ color: step.done ? "#C89B3C" : "#6B6B6B" }} />
                    </div>
                    <div className="flex-1">
                      <div className={`font-medium ${step.done ? "text-text" : "text-muted"}`}>{step.label}</div>
                      <div className="text-xs text-muted">{step.done ? "مكتمل" : "قيد الانتظار"}</div>
                    </div>
                    {step.done ? (
                      <CheckCircleIcon sx={{ color: "#C89B3C" }} />
                    ) : (
                      <RadioButtonUncheckedIcon sx={{ color: "#6B6B6B" }} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <nav className="bg-white border-t border-gray-100 p-2 flex items-center justify-around">
        <button onClick={() => navigate("/")} className="flex flex-col items-center text-muted">
          <CoffeeIcon sx={{ fontSize: 22 }} />
          <span className="text-xs">الرئيسية</span>
        </button>
        <button onClick={() => navigate("/cart")} className="flex flex-col items-center text-muted">
          <RestaurantIcon sx={{ fontSize: 22 }} />
          <span className="text-xs">السلة</span>
        </button>
        <button className="flex flex-col items-center text-primary">
          <LocalShippingIcon sx={{ fontSize: 22 }} />
          <span className="text-xs">تتبع</span>
        </button>
      </nav>
    </div>
  );
}
