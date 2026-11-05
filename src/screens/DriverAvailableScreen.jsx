import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const available = [
  { id: 1, cafe: "مقهى دلّة الأصلي", distance: "1.2 كم", fee: 12 },
  { id: 2, cafe: "كافيه الكرامة", distance: "2.1 كم", fee: 15 },
];

export default function DriverAvailableScreen() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full bg-white">
      <header className="bg-primary text-white p-4 flex items-center gap-2">
        <button onClick={() => navigate("/")} className="p-1">
          <ArrowBackIcon />
        </button>
        <h1 className="text-lg font-bold flex-1 text-center">الطلبات المتاحة</h1>
      </header>
      <main className="flex-1 overflow-auto p-4 space-y-3">
        {available.map((order) => (
          <div key={order.id} className="p-3 bg-white border border-gray-100 rounded-lg shadow-sm space-y-2">
            <div className="text-text font-semibold">{order.cafe}</div>
            <div className="flex items-center justify-between text-muted text-sm">
              <div className="flex items-center gap-1">
                <LocationOnIcon sx={{ fontSize: 16 }} />
                <span>{order.distance}</span>
              </div>
              <div className="flex items-center gap-1">
                <AttachMoneyIcon sx={{ fontSize: 16 }} />
                <span>أجرة التوصيل: {order.fee} ر.س</span>
              </div>
            </div>
            <button onClick={() => navigate("/driver/active")} className="w-full py-2 rounded-lg bg-accent text-white font-semibold">
              قبول
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}
