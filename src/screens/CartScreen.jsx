import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CoffeeIcon from "@mui/icons-material/Coffee";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

const cartItems = [
  { id: 101, name: "قهوة عربية", price: 12, qty: 1 },
  { id: 103, name: "آيس لاتيه", price: 22, qty: 2 },
];

export default function CartScreen() {
  const navigate = useNavigate();
  const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
  const delivery = 5;
  const total = subtotal + delivery;

  return (
    <div className="flex flex-col h-full bg-white">
      <header className="bg-primary text-white p-4 flex items-center gap-2">
        <button onClick={() => navigate(-1)} className="p-1">
          <ArrowBackIcon />
        </button>
        <div className="flex-1 flex items-center justify-center gap-2">
          <img src="https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=200&q=80" alt="logo" className="w-7 h-7 rounded-full object-cover" />
          <h1 className="text-lg font-bold">دلّة</h1>
        </div>
        <div className="flex items-center gap-1 bg-accent px-2 py-1 rounded-full">
          <CardGiftcardIcon sx={{ fontSize: 14 }} />
          <span className="text-xs">+5 نقاط</span>
        </div>
      </header>
      <main className="flex-1 overflow-auto p-4 space-y-3">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
            <div>
              <div className="text-text font-medium">{item.name}</div>
              <div className="text-muted text-sm">{item.price * item.qty} ر.س</div>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <RemoveIcon sx={{ fontSize: 18 }} />
              </button>
              <span className="w-6 text-center">{item.qty}</span>
              <button className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center">
                <AddIcon sx={{ fontSize: 18 }} />
              </button>
            </div>
          </div>
        ))}
        <div className="mt-4 p-3 bg-secondary rounded-xl space-y-2">
          <div className="flex items-center justify-between text-text">
            <span>المجموع</span>
            <span>{subtotal} ر.س</span>
          </div>
          <div className="flex items-center justify-between text-text">
            <span>رسوم التوصيل</span>
            <span>{delivery} ر.س</span>
          </div>
          <div className="flex items-center justify-between font-semibold text-text">
            <span>الإجمالي</span>
            <span>{total} ر.س</span>
          </div>
        </div>
      </main>
      <footer className="p-4">
        <button onClick={() => navigate("/tracking")} className="w-full py-3 rounded-xl bg-primary text-white font-semibold">
          تأكيد الطلب
        </button>
      </footer>
      <nav className="bg-white border-t border-gray-100 p-2 flex items-center justify-around">
        <button onClick={() => navigate("/")} className="flex flex-col items-center text-muted">
          <CoffeeIcon sx={{ fontSize: 22 }} />
          <span className="text-xs">الرئيسية</span>
        </button>
        <button className="flex flex-col items-center text-primary">
          <ShoppingCartIcon sx={{ fontSize: 22 }} />
          <span className="text-xs">السلة</span>
        </button>
        <button onClick={() => navigate("/tracking")} className="flex flex-col items-center text-muted">
          <LocalShippingIcon sx={{ fontSize: 22 }} />
          <span className="text-xs">تتبع</span>
        </button>
      </nav>
    </div>
  );
}
