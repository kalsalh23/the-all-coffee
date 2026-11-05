import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StoreIcon from "@mui/icons-material/Store";

export default function IncomingOrderScreen() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (countdown / 60) * circumference;

  return (
    <div className="fixed inset-0 bg-[#3E2723]/85 flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-[360px] space-y-4 animate-[slideUp_0.3s_ease-out]">
        <div className="flex flex-col items-center gap-2">
          <svg width="70" height="70" className="rotate-[-90deg]">
            <circle cx="35" cy="35" r={radius} stroke="#6B6B6B" strokeWidth="6" fill="none" />
            <circle cx="35" cy="35" r={radius} stroke="#C89B3C" strokeWidth="6" fill="none" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" />
          </svg>
          <p className="text-white font-bold">طلب جديد!</p>
          <p className="text-white text-sm">{countdown} ثانية</p>
        </div>
        <div className="bg-white rounded-2xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <StoreIcon sx={{ color: "#3E2723" }} />
              <span className="text-text font-semibold">مقهى دلة الأصلي</span>
            </div>
            <div className="flex items-center gap-1 text-muted">
              <LocationOnIcon sx={{ fontSize: 16 }} />
              <span className="text-sm">1.2 كم</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text font-medium">عنوان العميل</p>
              <p className="text-sm text-muted">حي النخيل، شارع 5</p>
            </div>
            <div className="flex items-center gap-1 text-muted">
              <LocationOnIcon sx={{ fontSize: 16 }} />
              <span className="text-sm">2.5 كم</span>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-3 space-y-1">
            <p className="text-sm text-text">قهوة عربية × 1</p>
            <p className="text-sm text-text">آيس لاتيه × 2</p>
          </div>
          <div className="border-t border-gray-100 pt-3 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-text font-semibold">المبلغ المطلوب تحصيله:</span>
              <span className="text-primary font-bold">25,000</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text font-semibold">أجرة التوصيل لك:</span>
              <span className="text-accent font-bold">5,000</span>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <button onClick={() => navigate("/driver/active/1042")} className="w-full py-3 rounded-xl bg-success text-white font-semibold">
            قبول الطلب
          </button>
          <button onClick={() => navigate("/driver/waiting")} className="w-full py-2 rounded-xl bg-danger text-white font-semibold">
            رفض
          </button>
        </div>
      </div>
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
