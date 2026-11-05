import { useNavigate } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PersonIcon from "@mui/icons-material/Person";

export default function DriverDashboardScreen() {
  const navigate = useNavigate();
  const isAvailable = true;

  return (
    <div className="flex flex-col h-full bg-white">
      <header className="bg-primary text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80" alt="driver" className="w-10 h-10 rounded-full object-cover" />
          <div>
            <p className="text-sm">أهلاً، أحمد</p>
            <p className="text-xs text-white/80">مندوب دلة</p>
          </div>
        </div>
        <NotificationsIcon />
      </header>
      <main className="flex-1 overflow-auto p-4 space-y-4">
        <button className={`w-full py-4 rounded-xl font-semibold ${isAvailable ? "bg-success text-white" : "bg-gray-300 text-text"}`}>
          {isAvailable ? "متاح لاستقبال الطلبات" : "غير متاح"}
        </button>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-secondary rounded-xl p-3 text-center">
            <p className="text-xs text-muted">طلبات اليوم</p>
            <p className="text-lg font-bold text-text">8</p>
          </div>
          <div className="bg-secondary rounded-xl p-3 text-center">
            <p className="text-xs text-muted">الأرباح</p>
            <p className="text-lg font-bold text-text">45,000</p>
          </div>
          <div className="bg-secondary rounded-xl p-3 text-center">
            <p className="text-xs text-muted">التقييم</p>
            <p className="text-lg font-bold text-text">4.8 ★</p>
          </div>
        </div>
        <div>
          <h3 className="text-text font-bold mb-2">آخر الطلبات</h3>
          <div className="space-y-2">
            {[1,2,3].map((i) => (
              <div key={i} className="p-3 bg-white border border-gray-100 rounded-xl shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-sm text-text font-medium">مقهى دلة الأصلي</p>
                  <p className="text-xs text-muted">12:30 م</p>
                </div>
                <div className="text-left">
                  <p className="text-sm text-accent font-semibold">5,000</p>
                  <p className="text-xs text-success">مكتمل</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <nav className="bg-white border-t border-gray-100 p-2 flex items-center justify-around">
        <button className="flex flex-col items-center text-primary">
          <HomeIcon sx={{ fontSize: 22 }} />
          <span className="text-xs">الرئيسية</span>
        </button>
        <button onClick={() => navigate("/driver/orders")} className="flex flex-col items-center text-muted">
          <ReceiptLongIcon sx={{ fontSize: 22 }} />
          <span className="text-xs">الطلبات</span>
        </button>
        <button onClick={() => navigate("/driver/earnings")} className="flex flex-col items-center text-muted">
          <AttachMoneyIcon sx={{ fontSize: 22 }} />
          <span className="text-xs">الأرباح</span>
        </button>
        <button onClick={() => navigate("/driver/profile")} className="flex flex-col items-center text-muted">
          <PersonIcon sx={{ fontSize: 22 }} />
          <span className="text-xs">الحساب</span>
        </button>
      </nav>
      <button onClick={() => navigate("/")} className="absolute top-4 left-4 text-white text-xs bg-black/30 px-2 py-1 rounded">← الرئيسية</button>
    </div>
  );
}
