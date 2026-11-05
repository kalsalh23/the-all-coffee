import { useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function DriverCompletedScreen() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full bg-white items-center justify-center p-6 space-y-6">
      <CheckCircleIcon sx={{ fontSize: 80, color: "#2E7D32" }} />
      <div className="text-center">
        <h1 className="text-xl font-bold text-text">تم التوصيل بنجاح!</h1>
      </div>
      <div className="w-full bg-secondary rounded-xl p-4 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted">اسم المقهى</span>
          <span className="text-sm text-text">مقهى دلة الأصلي</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted">اسم العميل</span>
          <span className="text-sm text-text">محمد أحمد</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted">رقم الطلب</span>
          <span className="text-sm text-text">#1042</span>
        </div>
      </div>
      <div className="w-full space-y-2">
        <div className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-xl">
          <span className="text-text font-semibold">أجرة التوصيل</span>
          <span className="text-accent font-bold text-lg">5,000</span>
        </div>
        <div className="flex items-center justify-between p-2">
          <span className="text-sm text-muted">الإجمالي المُحصَّل</span>
          <span className="text-sm text-muted">25,000</span>
        </div>
      </div>
      <button onClick={() => navigate("/driver/waiting")} className="w-full py-3 rounded-xl bg-primary text-white font-semibold">
        العودة للرئيسية
      </button>
      <button onClick={() => navigate("/")} className="text-xs text-muted">← الرئيسية</button>
    </div>
  );
}
