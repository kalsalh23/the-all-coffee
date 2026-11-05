import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useLang } from "../i18n";

const BottomNav = ({ active = "home" }) => {
  const navigate = useNavigate();
  const { isAr } = useLang();
  const tabs = [
    { id: "home", icon: HomeIcon, label: isAr ? "الرئيسية" : "Home", path: "/driver/home" },
    { id: "orders", icon: ReceiptLongIcon, label: isAr ? "طلباتي" : "Orders", path: "/driver/orders" },
    { id: "earnings", icon: AttachMoneyIcon, label: isAr ? "الأرباح" : "Earnings", path: "/driver/earnings" },
    { id: "notifications", icon: NotificationsIcon, label: isAr ? "التنبيهات" : "Alerts", path: "/driver/notifications" },
    { id: "more", icon: MoreHorizIcon, label: isAr ? "المزيد" : "More", path: "/driver/more" },
  ];
  return (
    <nav className="bg-white mx-2 mb-2 rounded-2xl shadow-2xl border border-gray-100 px-2 py-1.5 flex items-center justify-around">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = active === tab.id;
        return (
          <button key={tab.id} onClick={() => navigate(tab.path)} className="relative flex flex-col items-center gap-0.5 flex-1">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isActive ? "bg-primary" : "bg-transparent"}`}>
              <Icon sx={{ fontSize: 22, color: isActive ? "#FFFFFF" : "#6B6B6B" }} />
            </div>
            <span className={`text-xs ${isActive ? "font-bold text-primary" : "text-muted"}`}>{tab.label}</span>
            {tab.id === "notifications" && <span className="absolute top-0 right-1/4 w-2 h-2 bg-danger rounded-full" />}
          </button>
        );
      })}
    </nav>
  );
};

export default function DriverLayout({ children, active = "home" }) {
  return (
    <div className="flex flex-col h-full bg-[#f7f7f7]">
      {children}
      <BottomNav active={active} />
    </div>
  );
}

export { BottomNav };
