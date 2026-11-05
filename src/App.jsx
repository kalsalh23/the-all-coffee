import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { LanguageProvider, useLang } from "./i18n";
import HomeScreen from "./screens/HomeScreen";
import CafeMenuScreen from "./screens/CafeMenuScreen";
import CartScreen from "./screens/CartScreen";
import OrderTrackingScreen from "./screens/OrderTrackingScreen";
import DriverAvailableScreen from "./screens/DriverAvailableScreen";
import DriverActiveScreen from "./screens/DriverActiveScreen";
import AboutScreen from "./screens/AboutScreen";
import CafeAboutScreen from "./screens/CafeAboutScreen";
import CafeSplashScreen from "./screens/CafeSplashScreen";
import RootScreen from "./screens/RootScreen";
import DriverLoginScreen from "./screens/driver/DriverLoginScreen";
import DriverHomeScreen from "./screens/driver/DriverHomeScreen";
import IncomingOrderScreen from "./screens/driver/IncomingOrderScreen";
import DriverActiveScreen2 from "./screens/driver/DriverActiveScreen";
import DriverCompletedScreen from "./screens/driver/DriverCompletedScreen";
import DriverOrdersScreen from "./screens/driver/DriverOrdersScreen";
import DriverEarningsScreen from "./screens/driver/DriverEarningsScreen";
import DriverProfileScreen from "./screens/driver/DriverProfileScreen";
import MoreScreen from "./screens/driver/MoreScreen";
import DriverNotificationsScreen from "./screens/driver/DriverNotificationsScreen";
import OrderDetailsScreen from "./screens/driver/OrderDetailsScreen";
import SplashScreen from "./screens/unified/SplashScreen";
import WelcomeScreen from "./screens/unified/WelcomeScreen";
import UnifiedLoginScreen from "./screens/unified/UnifiedLoginScreen";
import RoleSelectionScreen from "./screens/unified/RoleSelectionScreen";
import CafeLoginScreen from "./screens/cafe/CafeLoginScreen";
import CafeDashboardScreen from "./screens/cafe/CafeDashboardScreen";
import CafeOrdersHistoryScreen from "./screens/cafe/CafeOrdersHistoryScreen";
import CafeMenuManagementScreen from "./screens/cafe/CafeMenuManagementScreen";
import CafeStatisticsScreen from "./screens/cafe/CafeStatisticsScreen";
import CafeProfileScreen from "./screens/cafe/CafeProfileScreen";
import CustomerHomeScreen from "./screens/customer/CustomerHomeScreen";
import CustomerLayout from "./components/customer/CustomerLayout";
import CustomerNotificationsScreen from "./screens/customer/CustomerNotificationsScreen";
import DriverWelcomeScreen from "./screens/driver/DriverWelcomeScreen";
import ChatScreen from "./screens/driver/ChatScreen";
import RatingAfterDeliveryScreen from "./screens/driver/RatingAfterDeliveryScreen";
import DriverSettingsScreen from "./screens/driver/DriverSettingsScreen";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import SearchIcon from "@mui/icons-material/Search";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import SettingsIcon from "@mui/icons-material/Settings";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function HomeButton() {
  const navigate = useNavigate();
  const { isAr } = useLang();
  return (
    <button onClick={() => navigate("/")} className={`absolute top-2 ${isAr ? "left-2" : "right-2"} text-xs text-primary bg-white/80 px-2 py-1 rounded z-50`}>
      {isAr ? "← الرئيسية" : "Home →"}
    </button>
  );
}

function CustomerSearchScreen() {
  const navigate = useNavigate();
  const { isAr } = useLang();
  const recent = isAr ? ["لاتيه", "كابتشينو", "سبانيش لاتيه", "كراميل ماكياتو"] : ["Latte", "Cappuccino", "Spanish Latte", "Caramel Macchiato"];
  const cafes = [
    { id: 1, name: isAr ? "مقهى دلة الأصلي" : "Original Dallah Cafe", rating: "4.9", distance: isAr ? "1.2 كم" : "1.2 km" },
    { id: 2, name: isAr ? "كافيه الكرامة" : "Al Karama Cafe", rating: "4.8", distance: isAr ? "2.1 كم" : "2.1 km" },
  ];
  return (
    <CustomerLayout active="search">
      <header className="bg-gradient-to-br from-primary via-[#4E342E] to-[#5D4037] px-4 pt-4 pb-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <LocalCafeIcon sx={{ color: "#C89B3C" }} />
          </div>
          <h1 className="text-white font-bold text-lg">{isAr ? "البحث" : "Search"}</h1>
        </div>
        <div className="bg-white rounded-2xl p-3 flex items-center gap-2 shadow-2xl">
          <SearchIcon sx={{ color: "#6B6B6B" }} />
          <input placeholder={isAr ? "ابحث عن مقهى أو مشروب..." : "Search for a cafe or drink..."} className="flex-1 text-sm outline-none bg-transparent text-text" autoFocus />
        </div>
      </header>
      <main className="flex-1 overflow-auto -mt-2">
        <div className="bg-white rounded-t-3xl pt-4 px-4 pb-4 space-y-5">
          <div>
            <h3 className="text-text font-bold text-base mb-2">{isAr ? "البحث الأخير" : "Recent searches"}</h3>
            <div className="flex gap-2 flex-wrap">
              {recent.map((item, idx) => (
                <button key={idx} className="px-3 py-1.5 bg-gray-100 rounded-full text-xs text-text">{item}</button>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-text font-bold text-base">{isAr ? "مقاهي قريبة" : "Nearby cafes"}</h3>
              <button onClick={() => navigate("/customer/home")} className="text-xs text-accent">{isAr ? "عرض الكل" : "View all"}</button>
            </div>
            <div className="space-y-2">
              {cafes.map((cafe) => (
                <button key={cafe.id} onClick={() => navigate(`/cafe/splash/${cafe.id}`)} className="w-full flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <LocalCafeIcon sx={{ color: "#C89B3C" }} />
                  </div>
                  <div className={`flex-1 ${isAr ? "text-right" : "text-left"}`}>
                    <p className="text-text font-semibold text-sm">{cafe.name}</p>
                    <div className="flex items-center gap-2 text-xs text-muted mt-0.5">
                      <span>⭐ {cafe.rating}</span>
                      <span>•</span>
                      <span>{cafe.distance}</span>
                    </div>
                  </div>
                  <ChevronRightIcon sx={{ color: "#6B6B6B", transform: isAr ? "rotate(180deg)" : "none" }} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </CustomerLayout>
  );
}

function CustomerOrdersScreen() {
  const navigate = useNavigate();
  const { isAr } = useLang();
  const orders = [
    { id: 1, cafe: isAr ? "مقهى دلة الأصلي" : "Original Dallah Cafe", status: isAr ? "قيد التوصيل" : "Out for delivery", time: "14:30", items: isAr ? "2 مشروب" : "2 items", price: isAr ? "54 ريال" : "54 SAR", statusColor: "accent" },
    { id: 2, cafe: isAr ? "كافيه الكرامة" : "Al Karama Cafe", status: isAr ? "تم التوصيل" : "Delivered", time: isAr ? "أمس 12:15" : "Yesterday 12:15", items: isAr ? "1 مشروب" : "1 item", price: isAr ? "28 ريال" : "28 SAR", statusColor: "success" },
  ];
  return (
    <CustomerLayout active="orders">
      <header className="bg-gradient-to-br from-primary via-[#4E342E] to-[#5D4037] px-4 pt-4 pb-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <ReceiptLongIcon sx={{ color: "#C89B3C" }} />
          </div>
          <h1 className="text-white font-bold text-lg">{isAr ? "طلباتي" : "My orders"}</h1>
        </div>
        <p className="text-white/70 text-sm">{isAr ? "تابع طلباتك الحالية والسابقة" : "Track your current and past orders"}</p>
      </header>
      <main className="flex-1 overflow-auto -mt-2">
        <div className="bg-white rounded-t-3xl pt-4 px-4 pb-4">
          <div className="flex gap-2 mb-4">
            <button className="flex-1 py-2 rounded-xl bg-primary text-white text-sm font-medium">{isAr ? "الكل" : "All"}</button>
            <button className="flex-1 py-2 rounded-xl bg-gray-100 text-text text-sm">{isAr ? "جاري" : "Active"}</button>
            <button className="flex-1 py-2 rounded-xl bg-gray-100 text-text text-sm">{isAr ? "مكتمل" : "Done"}</button>
          </div>
          <div className="space-y-3">
            {orders.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
                  <ReceiptLongIcon sx={{ color: "#6B6B6B", fontSize: 32 }} />
                </div>
                <p className="text-text font-medium mb-1">{isAr ? "لا توجد طلبات" : "No orders"}</p>
                <p className="text-muted text-sm mb-4">{isAr ? "ابدأ بطلب مشروبك المفضل" : "Start by ordering your favorite drink"}</p>
                <button onClick={() => navigate("/customer/home")} className="px-6 py-2 bg-primary text-white rounded-xl text-sm">{isAr ? "تصفح المقاهي" : "Browse cafes"}</button>
              </div>
            ) : (
              orders.map((order) => (
                <button key={order.id} onClick={() => navigate(`/customer/orders/${order.id}`)} className={`w-full ${isAr ? "text-right" : "text-left"} bg-white border border-gray-100 rounded-2xl p-3 shadow-sm hover:shadow-md transition`}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <LocalCafeIcon sx={{ color: "#C89B3C", fontSize: 20 }} />
                      </div>
                      <div>
                        <p className="text-text font-semibold text-sm">{order.cafe}</p>
                        <div className="flex items-center gap-1 text-xs text-muted mt-0.5">
                          <AccessTimeIcon sx={{ fontSize: 12 }} />
                          <span>{order.time}</span>
                        </div>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${order.statusColor === "success" ? "bg-success/10 text-success" : "bg-accent/10 text-accent"}`}>{order.status}</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                    <span className="text-xs text-muted">{order.items}</span>
                    <span className="text-text font-bold text-sm">{order.price}</span>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>
      </main>
    </CustomerLayout>
  );
}

function CustomerProfileScreen() {
  const navigate = useNavigate();
  const { isAr } = useLang();
  const menuItems = [
    { icon: PersonIcon, label: isAr ? "معلوماتي الشخصية" : "Personal info", path: "/customer/profile" },
    { icon: LocationOnIcon, label: isAr ? "عناويني" : "My addresses", path: "/customer/profile" },
    { icon: FavoriteIcon, label: isAr ? "المفضلة" : "Favorites", path: "/customer/home" },
    { icon: ReceiptLongIcon, label: isAr ? "طلباتي" : "My orders", path: "/customer/orders" },
    { icon: SettingsIcon, label: isAr ? "الإعدادات" : "Settings", path: "/customer/profile" },
    { icon: HelpIcon, label: isAr ? "المساعدة والدعم" : "Help & support", path: "/customer/profile" },
  ];
  return (
    <CustomerLayout active="profile">
      <header className="bg-gradient-to-br from-primary via-[#4E342E] to-[#5D4037] px-4 pt-4 pb-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <PersonIcon sx={{ color: "#C89B3C" }} />
          </div>
          <h1 className="text-white font-bold text-lg">{isAr ? "حسابي" : "Profile"}</h1>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 flex items-center gap-3 border border-white/20">
          <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center border-2 border-accent/30">
            <span className="text-accent font-bold text-lg">{isAr ? "أح" : "AM"}</span>
          </div>
          <div className="flex-1">
            <p className="text-white font-bold">{isAr ? "أحمد محمد" : "Ahmed Mohammed"}</p>
            <div className="flex items-center gap-1 text-white/70 text-sm mt-0.5" dir="ltr">
              <PhoneIcon sx={{ fontSize: 14 }} />
              <span>0501234567</span>
            </div>
          </div>
          <button className="p-2 rounded-full bg-white/10">
            <ChevronRightIcon sx={{ color: "white", transform: isAr ? "rotate(180deg)" : "none" }} />
          </button>
        </div>
      </header>
      <main className="flex-1 overflow-auto -mt-2">
        <div className="bg-white rounded-t-3xl pt-4 px-4 pb-4">
          <div className="space-y-1 mb-4">
            {menuItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button key={idx} onClick={() => navigate(item.path)} className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon sx={{ color: "#C89B3C", fontSize: 20 }} />
                  </div>
                  <span className={`flex-1 ${isAr ? "text-right" : "text-left"} text-text text-sm`}>{item.label}</span>
                  <ChevronRightIcon sx={{ color: "#6B6B6B", transform: isAr ? "rotate(180deg)" : "none" }} />
                </button>
              );
            })}
          </div>
          <button className="w-full flex items-center gap-3 p-3 hover:bg-danger/5 rounded-xl transition">
            <div className="w-9 h-9 rounded-xl bg-danger/10 flex items-center justify-center">
              <LogoutIcon sx={{ color: "#C62828", fontSize: 20 }} />
            </div>
            <span className={`flex-1 ${isAr ? "text-right" : "text-left"} text-danger text-sm`}>{isAr ? "تسجيل الخروج" : "Log out"}</span>
          </button>
        </div>
      </main>
    </CustomerLayout>
  );
}

function AppShell() {
  const { dir, lang } = useLang();
  return (
    <BrowserRouter>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div dir={dir} lang={lang} className="w-[390px] h-[844px] bg-white shadow-2xl overflow-hidden flex flex-col font-cairo relative">
          <Routes>
            <Route path="/" element={<RootScreen />} />
            <Route path="/app" element={<SplashScreen />} />
            <Route path="/app/welcome" element={<WelcomeScreen />} />
            <Route path="/app/login" element={<UnifiedLoginScreen />} />
            <Route path="/app/role" element={<RoleSelectionScreen />} />
            <Route path="/customer/login" element={<UnifiedLoginScreen />} />
            <Route path="/cafe/login" element={<UnifiedLoginScreen />} />
            <Route path="/driver/login" element={<UnifiedLoginScreen />} />
            <Route path="/driver" element={<UnifiedLoginScreen />} />
            <Route path="/customer/home" element={<CustomerHomeScreen />} />
            <Route path="/customer" element={<CustomerHomeScreen />} />
            <Route path="/customer/search" element={<CustomerSearchScreen />} />
            <Route path="/customer/orders" element={<CustomerOrdersScreen />} />
            <Route path="/customer/profile" element={<CustomerProfileScreen />} />
            <Route path="/customer/notifications" element={<CustomerNotificationsScreen />} />
            <Route path="/menu/:cafeId" element={<><HomeButton /><CafeMenuScreen /></>} />
            <Route path="/customer/cafe/:id" element={<><HomeButton /><CafeMenuScreen /></>} />
            <Route path="/cafe/splash/:cafeId" element={<CafeSplashScreen />} />
            <Route path="/customer/cart" element={<><HomeButton /><CartScreen /></>} />
            <Route path="/customer/orders/:id" element={<><HomeButton /><OrderTrackingScreen /></>} />
            <Route path="/cart" element={<><HomeButton /><CartScreen /></>} />
            <Route path="/tracking" element={<><HomeButton /><OrderTrackingScreen /></>} />
            <Route path="/about" element={<><HomeButton /><AboutScreen /></>} />
            <Route path="/cafe/about/:cafeId" element={<><HomeButton /><CafeAboutScreen /></>} />
            <Route path="/cafe/dashboard" element={<CafeDashboardScreen />} />
            <Route path="/cafe/orders" element={<CafeOrdersHistoryScreen />} />
            <Route path="/cafe/menu" element={<CafeMenuManagementScreen />} />
            <Route path="/cafe/stats" element={<CafeStatisticsScreen />} />
            <Route path="/cafe/profile" element={<CafeProfileScreen />} />
            <Route path="/driver/welcome" element={<DriverWelcomeScreen />} />
            <Route path="/driver/chat/:orderId" element={<ChatScreen />} />
            <Route path="/driver/rating/:orderId" element={<RatingAfterDeliveryScreen />} />
            <Route path="/driver/settings" element={<DriverSettingsScreen />} />
            <Route path="/driver/home" element={<DriverHomeScreen />} />
            <Route path="/driver/waiting" element={<DriverHomeScreen />} />
            <Route path="/driver/orders" element={<DriverOrdersScreen />} />
            <Route path="/driver/orders/:id" element={<OrderDetailsScreen />} />
            <Route path="/driver/earnings" element={<DriverEarningsScreen />} />
            <Route path="/driver/notifications" element={<DriverNotificationsScreen />} />
            <Route path="/driver/more" element={<MoreScreen />} />
            <Route path="/driver/wallet" element={<><HomeButton /><MoreScreen /></>} />
            <Route path="/driver/ratings" element={<><HomeButton /><MoreScreen /></>} />
            <Route path="/driver/help" element={<><HomeButton /><MoreScreen /></>} />
            <Route path="/driver/profile" element={<DriverProfileScreen />} />
            <Route path="/driver/incoming" element={<IncomingOrderScreen />} />
            <Route path="/driver/active/:id" element={<DriverActiveScreen2 />} />
            <Route path="/driver/completed" element={<DriverCompletedScreen />} />
            <Route path="/driver/available" element={<DriverAvailableScreen />} />
            <Route path="/driver/active" element={<DriverActiveScreen />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppShell />
    </LanguageProvider>
  );
}

export default App;
