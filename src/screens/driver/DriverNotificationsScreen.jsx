import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DriverLayout from "../../layouts/DriverLayout";
import { useLang } from "../../i18n";

export default function DriverNotificationsScreen() {
  const navigate = useNavigate();
  const { isAr, lang, setLang } = useLang();
  const notifications = isAr
    ? [
        { id: 1, title: "طلب جديد", body: "طلب جديد متاح في منطقة الرياض", time: "منذ 5 دقائق", unread: true, icon: LocalShippingIcon, color: "#C89B3C" },
        { id: 2, title: "تم قبول الطلب", body: "تم قبول طلبك رقم 1042", time: "منذ 20 دقيقة", unread: true, icon: CheckCircleIcon, color: "#2E7D32" },
        { id: 3, title: "أرباح الأسبوع", body: "أرباحك لهذا الأسبوع جاهزة", time: "منذ ساعتين", unread: false, icon: AttachMoneyIcon, color: "#C89B3C" },
      ]
    : [
        { id: 1, title: "New order", body: "A new order is available in Riyadh", time: "5 min ago", unread: true, icon: LocalShippingIcon, color: "#C89B3C" },
        { id: 2, title: "Order accepted", body: "Your order #1042 was accepted", time: "20 min ago", unread: true, icon: CheckCircleIcon, color: "#2E7D32" },
        { id: 3, title: "Weekly earnings", body: "Your earnings for this week are ready", time: "2 hours ago", unread: false, icon: AttachMoneyIcon, color: "#C89B3C" },
      ];

  return (
    <DriverLayout active="notifications">
      <header className="bg-gradient-to-br from-primary via-[#4E342E] to-[#5D4037] px-4 pt-4 pb-6">
        <div className="flex items-center justify-between mb-2">
          <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-white/10 backdrop-blur-sm">
            <ArrowBackIcon sx={{ color: "white" }} />
          </button>
          <h1 className="text-lg font-bold text-white">{isAr ? "الإشعارات" : "Notifications"}</h1>
          <div className="flex items-center rounded-full bg-white/10 p-0.5 border border-white/20 text-[11px]">
            <button onClick={() => setLang("ar")} className={`px-2 py-1 rounded-full transition ${lang === "ar" ? "bg-accent text-white font-bold" : "text-white/80"}`}>عربي</button>
            <button onClick={() => setLang("en")} className={`px-2 py-1 rounded-full transition ${lang === "en" ? "bg-accent text-white font-bold" : "text-white/80"}`}>EN</button>
          </div>
        </div>
        <p className="text-center text-white/70 text-sm">{isAr ? "تحديثات الطلبات والأرباح" : "Order and earnings updates"}</p>
      </header>
      <main className="flex-1 overflow-auto -mt-2">
        <div className="bg-[#f7f7f7] rounded-t-3xl pt-4 px-4 pb-4 space-y-2">
          {notifications.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
                <NotificationsIcon sx={{ color: "#6B6B6B", fontSize: 32 }} />
              </div>
              <p className="text-text font-medium mb-1">{isAr ? "لا توجد إشعارات" : "No notifications"}</p>
              <p className="text-muted text-sm">{isAr ? "ستصلك الإشعارات هنا" : "Notifications will appear here"}</p>
            </div>
          ) : (
            notifications.map((n) => {
              const Icon = n.icon;
              return (
                <div key={n.id} className={`p-3 rounded-2xl border transition ${n.unread ? "bg-accent/5 border-accent/30" : "bg-white border-gray-100"}`}>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${n.color}15` }}>
                      <Icon sx={{ color: n.color, fontSize: 22 }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <p className="text-text font-semibold text-sm">{n.title}</p>
                        {n.unread && <div className="w-2 h-2 bg-danger rounded-full mt-1" />}
                      </div>
                      <p className="text-sm text-muted">{n.body}</p>
                      <div className="flex items-center gap-1 text-xs text-muted mt-1.5">
                        <AccessTimeIcon sx={{ fontSize: 12 }} />
                        <span>{n.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </main>
    </DriverLayout>
  );
}
