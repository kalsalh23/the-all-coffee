import { useNavigate } from "react-router-dom";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import StarRateIcon from "@mui/icons-material/StarRate";
import HelpIcon from "@mui/icons-material/Help";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StarIcon from "@mui/icons-material/Star";
import VerifiedIcon from "@mui/icons-material/Verified";
import DriverLayout from "../../layouts/DriverLayout";
import { useLang } from "../../i18n";

export default function MoreScreen() {
  const navigate = useNavigate();
  const { isAr, lang, setLang } = useLang();
  const actions = [
    { id: "wallet", icon: AccountBalanceWalletIcon, label: isAr ? "المحفظة" : "Wallet", sub: isAr ? "الأرصدة والمعاملات" : "Balance & transactions", path: "/driver/wallet" },
    { id: "ratings", icon: StarRateIcon, label: isAr ? "التقييمات" : "Ratings", sub: isAr ? "آراء العملاء" : "Customer feedback", path: "/driver/ratings" },
    { id: "profile", icon: PersonIcon, label: isAr ? "الملف الشخصي" : "Profile", sub: isAr ? "بياناتك الشخصية" : "Your personal info", path: "/driver/profile" },
    { id: "settings", icon: SettingsIcon, label: isAr ? "الإعدادات" : "Settings", sub: isAr ? "التفضيلات والتنبيهات" : "Preferences & alerts", path: "/driver/settings" },
    { id: "help", icon: HelpIcon, label: isAr ? "المساعدة والدعم" : "Help & support", sub: isAr ? "تواصل معنا" : "Get assistance", path: "/driver/help" },
  ];

  return (
    <DriverLayout active="more">
      <header className="bg-gradient-to-br from-primary via-[#4E342E] to-[#5D4037] px-4 pt-4 pb-10">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-white/10 backdrop-blur-sm">
            <ArrowBackIcon sx={{ color: "white" }} />
          </button>
          <h1 className="text-lg font-bold text-white">{isAr ? "المزيد" : "More"}</h1>
          <div className="flex items-center rounded-full bg-white/10 p-0.5 border border-white/20 text-[11px]">
            <button onClick={() => setLang("ar")} className={`px-2 py-1 rounded-full transition ${lang === "ar" ? "bg-accent text-white font-bold" : "text-white/80"}`}>عربي</button>
            <button onClick={() => setLang("en")} className={`px-2 py-1 rounded-full transition ${lang === "en" ? "bg-accent text-white font-bold" : "text-white/80"}`}>EN</button>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/15 flex items-center gap-3">
          <div className="w-14 h-14 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0">
            <span className="text-accent font-bold text-lg">{isAr ? "أح" : "AM"}</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <p className="text-white font-bold truncate">{isAr ? "أحمد محمد" : "Ahmed Mohammed"}</p>
              <VerifiedIcon sx={{ color: "#C89B3C", fontSize: 16 }} />
            </div>
            <p className="text-white/70 text-xs mt-0.5">{isAr ? "مندوب توصيل" : "Delivery driver"}</p>
            <div className="flex items-center gap-1 mt-1 text-xs text-white/80">
              <StarIcon sx={{ color: "#C89B3C", fontSize: 14 }} />
              <span>4.8</span>
              <span className="text-white/50">•</span>
              <span>{isAr ? "150 توصيلة" : "150 deliveries"}</span>
            </div>
          </div>
          <button onClick={() => navigate("/driver/profile")} className="p-2 rounded-full bg-white/10">
            <ChevronRightIcon sx={{ color: "white", transform: isAr ? "rotate(180deg)" : "none" }} />
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-auto -mt-4">
        <div className="bg-[#f7f7f7] rounded-t-3xl pt-4 px-4 pb-4 space-y-3">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {actions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => item.path && navigate(item.path)}
                  className={`w-full flex items-center gap-3 p-3.5 hover:bg-gray-50 transition ${idx !== actions.length - 1 ? "border-b border-gray-100" : ""}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon sx={{ color: "#C89B3C", fontSize: 22 }} />
                  </div>
                  <div className={`flex-1 min-w-0 ${isAr ? "text-right" : "text-left"}`}>
                    <p className="text-text font-medium text-sm">{item.label}</p>
                    <p className="text-muted text-[11px] mt-0.5">{item.sub}</p>
                  </div>
                  <ChevronRightIcon sx={{ color: "#6B6B6B", fontSize: 20, transform: isAr ? "rotate(180deg)" : "none" }} />
                </button>
              );
            })}
          </div>

          <button onClick={() => navigate("/driver")} className="w-full bg-white rounded-2xl shadow-sm border border-danger/15 p-3.5 flex items-center gap-3 hover:bg-danger/5 transition">
            <div className="w-10 h-10 rounded-xl bg-danger/10 flex items-center justify-center shrink-0">
              <LogoutIcon sx={{ color: "#C62828", fontSize: 22 }} />
            </div>
            <span className={`flex-1 ${isAr ? "text-right" : "text-left"} text-danger font-medium text-sm`}>{isAr ? "تسجيل الخروج" : "Log out"}</span>
            <ChevronRightIcon sx={{ color: "#C62828", fontSize: 20, transform: isAr ? "rotate(180deg)" : "none" }} />
          </button>
        </div>
      </main>
    </DriverLayout>
  );
}
