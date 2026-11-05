import { useNavigate } from "react-router-dom";
import InboxIcon from "@mui/icons-material/Inbox";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useLang } from "../../i18n";

export function EmptyState({ type = "default" }) {
  const navigate = useNavigate();
  const { isAr } = useLang();
  const states = {
    orders: { icon: InboxIcon, title: isAr ? "لا توجد طلبات بعد" : "No orders yet", text: isAr ? "ابدأ باستقبال الطلبات ليظهر هنا" : "Start accepting orders to see them here", button: isAr ? "اذهب للرئيسية" : "Go home", path: "/driver/home" },
    notifications: { icon: NotificationsOffIcon, title: isAr ? "لا توجد إشعارات" : "No notifications", text: isAr ? "ستصلك الإشعارات هنا" : "Notifications will appear here", button: null },
    earnings: { icon: AccountBalanceWalletIcon, title: isAr ? "لم تبدأ بعد" : "Not started yet", text: isAr ? "ابدأ باستقبال الطلبات لكسب الأرباح" : "Start accepting orders to earn", button: isAr ? "ابدأ الآن" : "Start now", path: "/driver/home" },
    wallet: { icon: AccountBalanceWalletIcon, title: isAr ? "لا توجد معاملات" : "No transactions", text: isAr ? "ستظهر معاملاتك هنا" : "Your transactions will appear here", button: null },
    ratings: { icon: StarOutlineIcon, title: isAr ? "لا توجد تقييمات" : "No ratings", text: isAr ? "ستظهر تقييمات العملاء هنا" : "Customer ratings will appear here", button: null },
  };
  const s = states[type] || states.orders;
  const Icon = s.icon;
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 space-y-4">
      <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
        <Icon sx={{ fontSize: 40, color: "#6B6B6B" }} />
      </div>
      <div className="text-center space-y-1">
        <h3 className="text-text font-semibold">{s.title}</h3>
        <p className="text-sm text-muted">{s.text}</p>
      </div>
      {s.button && <button onClick={() => navigate(s.path)} className="px-6 py-2 rounded-xl bg-primary text-white">{s.button}</button>}
    </div>
  );
}

export function LoadingState() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-10 h-10 border-4 border-gray-200 border-t-primary rounded-full animate-spin"></div>
    </div>
  );
}

export function ErrorState() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 space-y-4">
      <div className="w-20 h-20 rounded-full bg-danger/10 flex items-center justify-center">
        <span className="text-4xl text-danger">!</span>
      </div>
      <div className="text-center space-y-1">
        <h3 className="text-text font-semibold">حدث خطأ</h3>
        <p className="text-sm text-muted">يرجى المحاولة مرة أخرى</p>
      </div>
      <button onClick={() => window.location.reload()} className="px-6 py-2 rounded-xl bg-primary text-white">إعادة المحاولة</button>
    </div>
  );
}

export function NoInternetState() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 space-y-4">
      <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
        <span className="text-4xl">📶</span>
      </div>
      <div className="text-center space-y-1">
        <h3 className="text-text font-semibold">لا يوجد اتصال</h3>
        <p className="text-sm text-muted">تحقق من الشبكة</p>
      </div>
    </div>
  );
}
