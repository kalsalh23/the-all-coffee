import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";

export default function RoleSelectionScreen() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full bg-white p-6 space-y-6">
      <header className="text-center space-y-2 mt-8">
        <h1 className="text-xl font-bold text-text">كيف تريد استخدام دلّة؟</h1>
      </header>
      <main className="flex-1 space-y-4">
        <div className="p-4 border border-gray-200 rounded-2xl space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <ShoppingCartIcon sx={{ color: "#C89B3C" }} />
            </div>
            <div>
              <h3 className="text-text font-semibold">أنا عميل</h3>
              <p className="text-sm text-muted">اطلب قهوتك</p>
            </div>
          </div>
          <button onClick={() => navigate("/app/login")} className="w-full py-2 rounded-xl bg-accent text-white">دخول كعميل</button>
        </div>
        <div className="p-4 border border-gray-200 rounded-2xl space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
              <DeliveryDiningIcon sx={{ color: "#2E7D32" }} />
            </div>
            <div>
              <h3 className="text-text font-semibold">أنا مندوب</h3>
              <p className="text-sm text-muted">وصّل واكسب</p>
            </div>
          </div>
          <button onClick={() => navigate("/app/login")} className="w-full py-2 rounded-xl bg-success text-white">دخول كمندوب</button>
        </div>
      </main>
      <button onClick={() => navigate("/")} className="text-sm text-muted text-center">← العودة للرئيسية</button>
    </div>
  );
}
