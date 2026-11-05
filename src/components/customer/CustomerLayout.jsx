import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PersonIcon from "@mui/icons-material/Person";
import { useLang } from "../../i18n";

export const CustomerBottomNav = ({ active = "home" }) => {
  const navigate = useNavigate();
  const { isAr } = useLang();
  const tabs = [
    { id: "home", icon: HomeIcon, label: isAr ? "الرئيسية" : "Home", path: "/customer/home" },
    { id: "search", icon: SearchIcon, label: isAr ? "بحث" : "Search", path: "/customer/search" },
    { id: "orders", icon: ReceiptLongIcon, label: isAr ? "طلباتي" : "Orders", path: "/customer/orders" },
    { id: "profile", icon: PersonIcon, label: isAr ? "حسابي" : "Profile", path: "/customer/profile" },
  ];
  return (
    <nav className="bg-white border-t border-gray-100 px-2 py-1 flex items-center justify-around">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = active === tab.id;
        return (
          <button key={tab.id} onClick={() => navigate(tab.path)} className="flex flex-col items-center gap-0.5 py-1 px-3">
            <Icon sx={{ fontSize: 24, color: isActive ? "#C89B3C" : "#6B6B6B" }} />
            <span className={`text-xs ${isActive ? "font-bold text-accent" : "text-muted"}`}>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default function CustomerLayout({ children, active = "home" }) {
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex-1 overflow-auto">{children}</div>
      <CustomerBottomNav active={active} />
    </div>
  );
}
