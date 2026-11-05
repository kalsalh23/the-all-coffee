import { useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import BarChartIcon from "@mui/icons-material/BarChart";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import { useLang } from "../i18n";

export default function CafeLayout({ children, active = "dashboard" }) {
  const navigate = useNavigate();
  const { dir, isAr, lang, setLang } = useLang();
  const menuItems = [
    { id: "dashboard", icon: DashboardIcon, label: isAr ? "الرئيسية" : "Home", path: "/cafe/dashboard" },
    { id: "orders", icon: ReceiptLongIcon, label: isAr ? "الطلبات" : "Orders", path: "/cafe/orders" },
    { id: "menu", icon: RestaurantMenuIcon, label: isAr ? "القائمة" : "Menu", path: "/cafe/menu" },
    { id: "stats", icon: BarChartIcon, label: isAr ? "التقارير" : "Reports", path: "/cafe/stats" },
    { id: "profile", icon: PersonIcon, label: isAr ? "الملف" : "Profile", path: "/cafe/profile" },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f]" dir={dir}>
      <header className="bg-[#1a1a1a] border-b border-[#2a2a2a] px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <MenuIcon sx={{ color: "#C89B3C" }} />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
              <LocalCafeIcon sx={{ color: "#C89B3C", fontSize: 18 }} />
            </div>
            <div>
              <span className="text-white font-bold">{isAr ? "دلّة" : "Dallah"}</span>
              <span className={`text-gray-400 text-sm ${isAr ? "mr-2" : "ml-2"}`}>| {isAr ? "مقهى النخبة" : "Elite Cafe"}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center rounded-full bg-[#2a2a2a] p-0.5 border border-[#3a3a3a] text-[11px]">
            <button onClick={() => setLang("ar")} className={`px-2 py-1 rounded-full transition ${lang === "ar" ? "bg-accent text-white font-bold" : "text-gray-300"}`}>عربي</button>
            <button onClick={() => setLang("en")} className={`px-2 py-1 rounded-full transition ${lang === "en" ? "bg-accent text-white font-bold" : "text-gray-300"}`}>EN</button>
          </div>
          <button className="relative p-2">
            <NotificationsIcon sx={{ color: "#C89B3C" }} />
            <span className={`absolute top-1 ${isAr ? "right-1" : "left-1"} w-2 h-2 bg-red-500 rounded-full`}></span>
          </button>
          <div className="flex items-center gap-2 bg-[#2a2a2a] px-3 py-1.5 rounded-lg">
            <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center">
              <span className="text-xs font-bold text-white">{isAr ? "نخ" : "EC"}</span>
            </div>
            <span className="text-sm text-white">{isAr ? "مقهى النخبة" : "Elite Cafe"}</span>
          </div>
          <button onClick={() => navigate("/cafe/login")} className="text-gray-400 hover:text-white">
            <LogoutIcon sx={{ fontSize: 20 }} />
          </button>
        </div>
      </header>
      <div className="flex">
        <aside className={`w-64 bg-[#1a1a1a] min-h-[calc(100vh-64px)] ${isAr ? "border-l" : "border-r"} border-[#2a2a2a]`}>
          <nav className="p-3 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.id;
              return (
                <button key={item.id} onClick={() => navigate(item.path)} className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition ${isActive ? "bg-accent text-white" : "text-gray-400 hover:bg-[#2a2a2a] hover:text-white"}`}>
                  <Icon sx={{ fontSize: 20 }} />
                  <span className="text-sm">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>
        <main className="flex-1 p-6 bg-[#0f0f0f] overflow-auto">{children}</main>
      </div>
    </div>
  );
}
