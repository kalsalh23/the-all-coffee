import { useNavigate } from "react-router-dom";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";

export default function DriverWaitingScreen() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full bg-white items-center justify-center p-6 space-y-6">
      <div className="flex flex-col items-center gap-3">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <LocalCafeIcon sx={{ fontSize: 32, color: "#3E2723" }} />
        </div>
        <h1 className="text-xl font-bold text-primary">دلة</h1>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="w-32 h-32 rounded-full bg-accent/20 flex items-center justify-center animate-pulse">
          <div className="w-20 h-20 rounded-full bg-accent/40 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-accent"></div>
          </div>
        </div>
        <p className="text-lg font-semibold text-text">ننتظر الطلبات...</p>
        <p className="text-sm text-muted text-center">سيصلك إشعار صوتي عند وصول طلب</p>
      </div>
      <button onClick={() => navigate("/driver/incoming")} className="mt-8 text-xs text-muted">محاكاة طلب جديد</button>
      <button onClick={() => navigate("/")} className="absolute top-4 right-4 text-muted text-xs">← الرئيسية</button>
    </div>
  );
}
