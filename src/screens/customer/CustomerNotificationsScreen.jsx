import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function CustomerNotificationsScreen() {
  const navigate = useNavigate();
  const notifications = [
    { id: 1, title: "طلبك قيد التوصيل", body: "يصل طلبك من مقهى دلة الأصلي قريباً", time: "منذ 5 دقائق", unread: true, icon: LocalCafeIcon, color: "#C89B3C" },
    { id: 2, title: "تم قبول الطلب", body: "تم قبول طلبك رقم 1042 وسيبدأ التحضير", time: "منذ 20 دقيقة", unread: true, icon: CheckCircleIcon, color: "#2E7D32" },
    { id: 3, title: "تم التوصيل", body: "تم توصيل طلبك بنجاح", time: "أمس 12:15", unread: false, icon: CheckCircleIcon, color: "#2E7D32" },
  ];

  return (
    <div className="flex flex-col h-full bg-white">
      <header className="bg-gradient-to-br from-primary via-[#4E342E] to-[#5D4037] px-4 pt-4 pb-6">
        <div className="flex items-center gap-2 mb-2">
          <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-white/10 backdrop-blur-sm">
            <ArrowBackIcon sx={{ color: "white" }} />
          </button>
          <div className="flex-1 text-center">
            <h1 className="text-lg font-bold text-white">الإشعارات</h1>
          </div>
          <div className="w-9" />
        </div>
        <p className="text-center text-white/70 text-sm">تابع تحديثات طلباتك</p>
      </header>
      <main className="flex-1 overflow-auto -mt-2">
        <div className="bg-white rounded-t-3xl pt-4 px-4 pb-4 space-y-2">
          {notifications.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
                <NotificationsIcon sx={{ color: "#6B6B6B", fontSize: 32 }} />
              </div>
              <p className="text-text font-medium mb-1">لا توجد إشعارات</p>
              <p className="text-muted text-sm">ستصلك الإشعارات هنا</p>
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
    </div>
  );
}
