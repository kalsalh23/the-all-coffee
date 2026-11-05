import { useNavigate } from "react-router-dom";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import StorefrontIcon from "@mui/icons-material/Storefront";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useLang } from "../i18n";

export default function RootScreen() {
  const navigate = useNavigate();
  const { lang, setLang, isAr } = useLang();
  const Chevron = isAr ? ChevronLeftIcon : ChevronRightIcon;
  const t = isAr
    ? {
        title: "تجربة التطبيق الموحدة",
        subtitle: "اختر نموذج الاستخدام لبدء التجربة",
        start: "ابدأ التجربة",
        choose: "اختر نوع الحساب",
        customer: "نموذج العميل",
        customerDesc: "اطلب القهوة من أقرب مقهى",
        driver: "نموذج المندوب",
        driverDesc: "وصّل واكسب أرباحك",
        cafe: "لوحة المقهى",
        cafeDesc: "إدارة الطلبات والقائمة",
        previews: "معاينات",
        welcome: "ترحيب",
        login: "دخول",
        roles: "أدوار",
      }
    : {
        title: "Unified app experience",
        subtitle: "Choose a mode to start exploring",
        start: "Start experience",
        choose: "Choose account type",
        customer: "Customer app",
        customerDesc: "Order coffee from nearby cafes",
        driver: "Driver app",
        driverDesc: "Deliver and earn",
        cafe: "Cafe dashboard",
        cafeDesc: "Manage orders and menu",
        previews: "Previews",
        welcome: "Welcome",
        login: "Login",
        roles: "Roles",
      };

  return (
    <div className="flex flex-col h-full bg-white overflow-auto">
      <div className="bg-gradient-to-br from-primary to-[#5D4037] p-6 space-y-3">
        <div className="flex items-center justify-between">
          <div className="w-16" />
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-accent text-xl font-bold">د</span>
            </div>
            <h1 className="text-2xl font-bold text-white">دلّة</h1>
          </div>
          <div className="w-16 flex justify-end">
            <div className="flex items-center rounded-full bg-white/10 p-0.5 border border-white/20 text-[11px]">
              <button onClick={() => setLang("ar")} className={`px-2 py-1 rounded-full transition ${lang === "ar" ? "bg-accent text-white font-bold" : "text-white/80"}`}>عربي</button>
              <button onClick={() => setLang("en")} className={`px-2 py-1 rounded-full transition ${lang === "en" ? "bg-accent text-white font-bold" : "text-white/80"}`}>EN</button>
            </div>
          </div>
        </div>
        <div className={`text-center space-y-1 ${isAr ? "" : "font-sans"}`}>
          <h2 className="text-lg font-bold text-white">{t.title}</h2>
          <p className="text-sm text-white/90">{t.subtitle}</p>
        </div>
        <button onClick={() => navigate("/app")} className="w-full py-3 rounded-xl bg-accent text-white flex items-center justify-center gap-2 font-semibold shadow-xl mt-4">
          <RocketLaunchIcon />
          <span>{t.start}</span>
        </button>
      </div>
      <div className="p-4 space-y-3 flex-1">
        <h3 className="text-text font-bold text-center mb-3">{t.choose}</h3>
        <button onClick={() => navigate("/customer/home")} className="w-full p-4 bg-white border-2 border-gray-100 rounded-2xl shadow-sm flex items-center gap-3 hover:border-accent hover:shadow-md transition">
          <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
            <PhoneAndroidIcon sx={{ fontSize: 28, color: "#C89B3C" }} />
          </div>
          <div className={`flex-1 ${isAr ? "text-right" : "text-left"}`}>
            <h4 className="text-text font-bold">{t.customer}</h4>
            <p className="text-xs text-muted">{t.customerDesc}</p>
          </div>
          <Chevron sx={{ color: "#6B6B6B" }} />
        </button>
        <button onClick={() => navigate("/driver/login")} className="w-full p-4 bg-white border-2 border-gray-100 rounded-2xl shadow-sm flex items-center gap-3 hover:border-success hover:shadow-md transition">
          <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center">
            <DeliveryDiningIcon sx={{ fontSize: 28, color: "#2E7D32" }} />
          </div>
          <div className={`flex-1 ${isAr ? "text-right" : "text-left"}`}>
            <h4 className="text-text font-bold">{t.driver}</h4>
            <p className="text-xs text-muted">{t.driverDesc}</p>
          </div>
          <Chevron sx={{ color: "#6B6B6B" }} />
        </button>
        <button onClick={() => navigate("/cafe/login")} className="w-full p-4 bg-white border-2 border-gray-100 rounded-2xl shadow-sm flex items-center gap-3 hover:border-primary hover:shadow-md transition">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
            <StorefrontIcon sx={{ fontSize: 28, color: "#3E2723" }} />
          </div>
          <div className={`flex-1 ${isAr ? "text-right" : "text-left"}`}>
            <h4 className="text-text font-bold">{t.cafe}</h4>
            <p className="text-xs text-muted">{t.cafeDesc}</p>
          </div>
          <Chevron sx={{ color: "#6B6B6B" }} />
        </button>
        <div className="pt-3">
          <p className="text-xs text-muted mb-2 text-center">{t.previews}</p>
          <div className="flex gap-2">
            <button onClick={() => navigate("/app/welcome")} className="flex-1 py-2 rounded-lg bg-gray-50 text-xs text-text">{t.welcome}</button>
            <button onClick={() => navigate("/app/login")} className="flex-1 py-2 rounded-lg bg-gray-50 text-xs text-text">{t.login}</button>
            <button onClick={() => navigate("/app/role")} className="flex-1 py-2 rounded-lg bg-gray-50 text-xs text-text">{t.roles}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
