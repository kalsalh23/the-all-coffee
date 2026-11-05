import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import StarIcon from "@mui/icons-material/Star";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BottomNav = ({ active = "profile" }) => {
  const navigate = useNavigate();
  const tabs = [
    { id: "home", icon: HomeIcon, label: "الرئيسية", path: "/driver/home" },
    { id: "orders", icon: ReceiptLongIcon, label: "طلباتي", path: "/driver/orders" },
    { id: "earnings", icon: AttachMoneyIcon, label: "الأرباح", path: "/driver/earnings" },
    { id: "notifications", icon: NotificationsIcon, label: "الإشعارات", path: "/driver/notifications" },
    { id: "more", icon: MoreHorizIcon, label: "المزيد", path: "/driver/more" },
  ];
  return (
    <nav className="bg-white border-t border-gray-100 p-2 flex items-center justify-around">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = active === tab.id;
        return (
          <button key={tab.id} onClick={() => navigate(tab.path)} className="flex flex-col items-center gap-0.5 relative">
            {isActive && <div className="absolute -top-2 w-6 h-0.5 bg-accent rounded" />}
            <Icon sx={{ fontSize: 22, color: isActive ? "#C89B3C" : "#6B6B6B" }} />
            <span className={`text-xs ${isActive ? "font-bold text-accent" : "text-muted"}`}>{tab.label}</span>
            {tab.id === "notifications" && <span className="absolute -top-1 right-1 w-2 h-2 bg-danger rounded-full" />}
          </button>
        );
      })}
    </nav>
  );
};

export default function DriverProfileScreen() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full bg-white">
      <header className="bg-primary text-white p-4 flex items-center gap-2">
        <button onClick={() => navigate(-1)} className="p-1">
          <ArrowBackIcon />
        </button>
        <h1 className="text-lg font-bold flex-1 text-center">الملف الشخصي</h1>
      </header>
      <main className="flex-1 overflow-auto p-4 space-y-4">
        <div className="flex items-center gap-3 p-4 bg-secondary rounded-xl">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80" alt="driver" className="w-14 h-14 rounded-full object-cover" />
          <div className="flex-1">
            <p className="text-text font-semibold">أحمد محمد</p>
            <p className="text-sm text-muted">0501234567</p>
          </div>
          <div className="flex items-center gap-1">
            <StarIcon sx={{ color: "#C89B3C", fontSize: 18 }} />
            <span className="text-text font-semibold">4.8</span>
            <span className="text-xs text-muted">(125)</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="p-3 bg-white border border-gray-100 rounded-xl">
            <p className="text-sm text-muted mb-1">الاسم</p>
            <p className="text-text">أحمد محمد</p>
          </div>
          <div className="p-3 bg-white border border-gray-100 rounded-xl">
            <p className="text-sm text-muted mb-1">رقم الهاتف</p>
            <p className="text-text">0501234567</p>
          </div>
          <div className="p-3 bg-white border border-gray-100 rounded-xl">
            <p className="text-sm text-muted mb-1">البريد الإلكتروني</p>
            <p className="text-text">ahmed@dalla.com</p>
          </div>
          <div className="p-3 bg-white border border-gray-100 rounded-xl">
            <p className="text-sm text-muted mb-1">سجل العمل</p>
            <p className="text-text">150 طلب مكتمل</p>
          </div>
          <div className="p-3 bg-white border border-gray-100 rounded-xl">
            <p className="text-sm text-muted mb-1">اللغة</p>
            <p className="text-text">العربية</p>
          </div>
          <div className="p-3 bg-white border border-gray-100 rounded-xl">
            <p className="text-sm text-muted mb-1">المنطقة المفضلة</p>
            <p className="text-text">الرياض</p>
          </div>
          <button className="w-full p-3 bg-white border border-danger/30 rounded-xl text-danger">حذف الحساب</button>
        </div>
      </main>
      <BottomNav active="more" />
      <button onClick={() => navigate("/")} className="absolute top-4 left-4 text-white text-xs bg-black/30 px-2 py-1 rounded">← الرئيسية</button>
    </div>
  );
}
