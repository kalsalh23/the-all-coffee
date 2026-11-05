import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DriverLayout from "../../layouts/DriverLayout";
import { useLang } from "../../i18n";

export default function DriverHomeScreen() {
  const navigate = useNavigate();
  const [isAvailable, setIsAvailable] = useState(false);
  const { lang, setLang, isAr } = useLang();
  const t = isAr
    ? {
        role: "مندوب",
        name: "أحمد محمد",
        subtitle: "نظرة سريعة على حالة عملك اليوم",
        status: "حالة العمل",
        available: "متاح لاستقبال الطلبات",
        unavailable: "غير متاح حالياً",
        waiting: "في انتظار طلب جديد",
        orders: "طلبات",
        earnings: "أرباح",
        rating: "تقييم",
      }
    : {
        role: "Driver",
        name: "Ahmed Mohammed",
        subtitle: "Quick view of your work today",
        status: "Work status",
        available: "Available for orders",
        unavailable: "Currently unavailable",
        waiting: "Waiting for a new order",
        orders: "Orders",
        earnings: "Earnings",
        rating: "Rating",
      };

  return (
    <DriverLayout active="home">
      <header className="bg-gradient-to-br from-primary via-[#4E342E] to-[#5D4037] px-4 pt-4 pb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 shrink-0">
              <span className="text-accent font-bold">{isAr ? "أح" : "A"}</span>
            </div>
            <div className="min-w-0">
              <p className="text-xs text-white/70">{t.role}</p>
              <p className="text-sm font-bold text-white truncate">{t.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <div className="flex items-center rounded-full bg-white/10 p-0.5 border border-white/20 text-[10px]">
              <button onClick={() => setLang("ar")} className={`px-1.5 py-1 rounded-full transition ${lang === "ar" ? "bg-accent text-white font-bold" : "text-white/80"}`}>ع</button>
              <button onClick={() => setLang("en")} className={`px-1.5 py-1 rounded-full transition ${lang === "en" ? "bg-accent text-white font-bold" : "text-white/80"}`}>EN</button>
            </div>
            <button onClick={() => navigate("/driver/notifications")} className="relative p-2 rounded-full bg-white/10 backdrop-blur-sm">
              <NotificationsIcon sx={{ color: "white", fontSize: 22 }} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full" />
            </button>
          </div>
        </div>
        <p className="text-center text-white/70 text-sm">{t.subtitle}</p>
      </header>
      <main className="flex-1 overflow-auto -mt-2">
        <div className="bg-[#f7f7f7] rounded-t-3xl pt-4 px-4 pb-4 space-y-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text font-semibold mb-1">{t.status}</p>
                <p className="text-xs text-muted">{isAvailable ? t.available : t.unavailable}</p>
              </div>
              <button onClick={() => setIsAvailable(!isAvailable)} className={`relative w-14 h-8 rounded-full transition ${isAvailable ? "bg-success" : "bg-gray-300"}`}>
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition ${isAvailable ? "left-7" : "left-1"}`}></div>
              </button>
            </div>
            {isAvailable && (
              <div className="mt-4 flex flex-col items-center py-4">
                <div className="w-24 h-24 rounded-full border-4 border-accent/30 flex items-center justify-center animate-pulse mb-3">
                  <div className="w-16 h-16 rounded-2xl bg-accent/15 flex items-center justify-center">
                    <LocalShippingIcon sx={{ color: "#C89B3C", fontSize: 30 }} />
                  </div>
                </div>
                <p className="text-text font-semibold">{t.waiting}</p>
              </div>
            )}
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white rounded-2xl p-3 text-center shadow-sm border border-gray-100">
              <p className="text-xs text-muted mb-1">{t.orders}</p>
              <p className="text-lg font-bold text-text">{isAr ? "8" : "8"}</p>
            </div>
            <div className="bg-white rounded-2xl p-3 text-center shadow-sm border border-gray-100">
              <p className="text-xs text-muted mb-1">{t.earnings}</p>
              <p className="text-lg font-bold text-text">{isAr ? "45ك" : "45k"}</p>
            </div>
            <div className="bg-white rounded-2xl p-3 text-center shadow-sm border border-gray-100">
              <p className="text-xs text-muted mb-1">{t.rating}</p>
              <p className="text-lg font-bold text-text">{isAr ? "4.8" : "4.8"}</p>
            </div>
          </div>
        </div>
      </main>
    </DriverLayout>
  );
}
