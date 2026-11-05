import { useNavigate } from "react-router-dom";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import DriverLayout from "../../layouts/DriverLayout";
import { useLang } from "../../i18n";

export default function DriverOrdersScreen() {
  const navigate = useNavigate();
  const { isAr, lang, setLang } = useLang();
  const orders = [
    { id: "1042", cafe: isAr ? "مقهى دلة الأصلي" : "Original Dallah Cafe", customer: isAr ? "محمد أحمد" : "Mohammed Ahmed", date: "2026/11/04", status: isAr ? "مكتمل" : "Completed", amount: "5,000" },
    { id: "1041", cafe: isAr ? "كافيه الكرامة" : "Al Karama Cafe", customer: isAr ? "سارة علي" : "Sara Ali", date: "2026/11/04", status: isAr ? "مكتمل" : "Completed", amount: "6,000" },
  ];

  return (
    <DriverLayout active="orders">
      <header className="bg-gradient-to-br from-primary via-[#4E342E] to-[#5D4037] px-4 pt-4 pb-6">
        <div className="flex items-center justify-between mb-2">
          <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-white/10 backdrop-blur-sm">
            <ArrowBackIcon sx={{ color: "white" }} />
          </button>
          <h1 className="text-lg font-bold text-white">{isAr ? "طلباتي" : "My orders"}</h1>
          <div className="flex items-center rounded-full bg-white/10 p-0.5 border border-white/20 text-[11px]">
            <button onClick={() => setLang("ar")} className={`px-2 py-1 rounded-full transition ${lang === "ar" ? "bg-accent text-white font-bold" : "text-white/80"}`}>عربي</button>
            <button onClick={() => setLang("en")} className={`px-2 py-1 rounded-full transition ${lang === "en" ? "bg-accent text-white font-bold" : "text-white/80"}`}>EN</button>
          </div>
        </div>
        <p className="text-center text-white/70 text-sm">{isAr ? "سجل الطلبات التي نفذتها" : "History of orders you completed"}</p>
      </header>
      <main className="flex-1 overflow-auto -mt-2">
        <div className="bg-[#f7f7f7] rounded-t-3xl pt-4 px-4 pb-4 space-y-3">
          {orders.map((order) => (
            <button key={order.id} onClick={() => navigate(`/driver/orders/${order.id}`)} className={`w-full p-3 bg-white border border-gray-100 rounded-2xl shadow-sm ${isAr ? "text-right" : "text-left"} transition hover:shadow-md`}>
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <LocalCafeIcon sx={{ color: "#C89B3C", fontSize: 20 }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text">#{order.id}</p>
                    <p className="text-sm text-text">{order.cafe}</p>
                  </div>
                </div>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-success/10 text-success">{order.status}</span>
              </div>
              <p className="text-xs text-muted mb-2">{isAr ? "العميل" : "Customer"}: {order.customer}</p>
              <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                <div className="flex items-center gap-1 text-xs text-muted">
                  <AccessTimeIcon sx={{ fontSize: 12 }} />
                  <span>{order.date}</span>
                </div>
                <span className="text-sm text-accent font-semibold">{order.amount}</span>
              </div>
            </button>
          ))}
        </div>
      </main>
    </DriverLayout>
  );
}
