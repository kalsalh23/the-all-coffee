import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CoffeeIcon from "@mui/icons-material/Coffee";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CategoryIcon from "@mui/icons-material/Category";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SearchIcon from "@mui/icons-material/Search";

const cafeData = {
  1: { name: "مقهى دلّة الأصلي", rating: 4.9, distance: "1.2 كم", cover: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=1200&q=80", slogan: "أصالة القهوة العربية", theme: "from-primary/95" },
  2: { name: "كافيه الكرامة", rating: 4.8, distance: "2.1 كم", cover: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&q=80", slogan: "كرامة الضيافة", theme: "from-[#5D4037]/95" },
  3: { name: "مقهى البركة", rating: 4.7, distance: "3.0 كم", cover: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&q=80", slogan: "بركة الطعم", theme: "from-[#6D4C41]/95" },
};

const menus = {
  1: [
    { id: 101, name: "قهوة عربية", type: "hot", price: 12, desc: "قهوة عربية أصيلة", image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&q=80" },
    { id: 102, name: "كابتشينو", type: "hot", price: 18, desc: "كابتشينو كلاسيكي", image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&q=80" },
    { id: 103, name: "آيس لاتيه", type: "cold", price: 22, desc: "آيس لاتيه منعش", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80" },
  ],
  2: [
    { id: 201, name: "اسبريسو", type: "hot", price: 10, desc: "اسبريسو مركز", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80" },
    { id: 202, name: "موكا بارد", type: "cold", price: 24, desc: "موكا بالشوكولاتة", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80" },
  ],
  3: [
    { id: 301, name: "قهوة تركية", type: "hot", price: 14, desc: "قهوة تركية غنية", image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80" },
    { id: 302, name: "قهوة باردة", type: "cold", price: 16, desc: "قهوة باردة منعشة", image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&q=80" },
  ],
};

const categories = [
  { id: 1, name: "الكل" },
  { id: 2, name: "ساخنة" },
  { id: 3, name: "باردة" },
];

const topOrdered = [
  { id: 102, name: "كابتشينو", price: 18, image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&q=80", type: "hot" },
  { id: 103, name: "آيس لاتيه", price: 22, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80", type: "cold" },
  { id: 101, name: "قهوة عربية", price: 12, image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&q=80", type: "hot" },
];

export default function CafeMenuScreen() {
  const navigate = useNavigate();
  const { cafeId } = useParams();
  const cafe = cafeData[cafeId] || cafeData[1];
  const items = menus[cafeId] || [];
  const hot = items.filter((i) => i.type === "hot");
  const cold = items.filter((i) => i.type === "cold");

  return (
    <div className="flex flex-col h-full bg-white">
      <header className="bg-primary text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=200&q=80" alt="logo" className="w-9 h-9 rounded-full object-cover border-2 border-accent" />
          <div>
            <h1 className="text-lg font-bold">دلّة</h1>
            <p className="text-xs text-white/80">{cafe.name}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-accent px-2 py-1 rounded-full">
          <CardGiftcardIcon sx={{ fontSize: 16 }} />
          <span className="text-xs">مكافأة</span>
        </div>
      </header>
      <main className="flex-1 overflow-auto">
        <div className="h-1 bg-gradient-to-r from-primary to-accent" />
        <div className="relative h-48 w-full">
          <img src={cafe.cover} alt={cafe.name} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-t ${cafe.theme} to-transparent flex flex-col justify-center p-4`}>
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-white">{cafe.name}</h2>
              <p className="text-white/90 text-sm">{cafe.slogan}</p>
              <div className="flex items-center gap-2 text-white/90 text-xs">
                <div className="flex items-center gap-1">
                  <LocationOnIcon sx={{ fontSize: 14 }} />
                  <span>{cafe.distance}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <StarIcon sx={{ fontSize: 14, color: "#C89B3C" }} />
                  <span>{cafe.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 -mt-6 relative z-20">
          <div className="bg-white rounded-xl shadow-xl p-2 flex items-center gap-2 border border-gray-100">
            <SearchIcon sx={{ color: "#6B6B6B" }} />
            <input type="text" placeholder="ابحث في قائمة المقهى..." className="flex-1 text-sm outline-none bg-transparent text-text" />
          </div>
        </div>
        <div className="p-4 space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <CategoryIcon sx={{ color: "#C89B3C" }} />
              <h3 className="text-text font-bold">الفئات</h3>
            </div>
            <div className="flex gap-2">
              {categories.map((cat, idx) => (
                <button key={cat.id} className={`flex-1 py-1.5 rounded-lg ${idx === 0 ? "bg-primary text-white" : "bg-secondary text-text"}`}>
                  <span className="text-xs">{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUpIcon sx={{ color: "#C89B3C" }} />
              <h3 className="text-text font-bold">الأكثر طلباً</h3>
            </div>
            <div className="flex gap-2">
              {topOrdered.map((item) => (
                <button key={item.id} onClick={() => navigate("/cart")} className="flex-1 bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                  <img src={item.image} alt={item.name} className="w-full h-20 object-cover" />
                  <div className="p-1.5">
                    <div className="text-xs text-text font-medium truncate">{item.name}</div>
                    <div className="text-xs text-accent font-semibold">{item.price} ر.س</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          {hot.length > 0 && (
            <section>
              <h2 className="font-bold text-text mb-2">مشروبات ساخنة</h2>
              <div className="space-y-2">
                {hot.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-2 bg-white border border-gray-100 rounded-xl shadow-sm">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                    <div className="flex-1">
                      <div className="text-text font-semibold text-sm">{item.name}</div>
                      <div className="text-muted text-xs">{item.desc}</div>
                      <div className="text-accent font-semibold mt-1">{item.price} ر.س</div>
                    </div>
                    <button onClick={() => navigate("/cart")} className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                      <AddIcon sx={{ fontSize: 18 }} />
                    </button>
                  </div>
                ))}
              </div>
            </section>
          )}
          {cold.length > 0 && (
            <section>
              <h2 className="font-bold text-text mb-2">مشروبات باردة</h2>
              <div className="space-y-2">
                {cold.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-2 bg-white border border-gray-100 rounded-xl shadow-sm">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                    <div className="flex-1">
                      <div className="text-text font-semibold text-sm">{item.name}</div>
                      <div className="text-muted text-xs">{item.desc}</div>
                      <div className="text-accent font-semibold mt-1">{item.price} ر.س</div>
                    </div>
                    <button onClick={() => navigate("/cart")} className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                      <AddIcon sx={{ fontSize: 18 }} />
                    </button>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <nav className="bg-white border-t border-gray-100 p-2 flex items-center justify-around">
        <button onClick={() => navigate("/")} className="flex flex-col items-center text-muted">
          <CoffeeIcon sx={{ fontSize: 22 }} />
          <span className="text-xs">الرئيسية</span>
        </button>
        <button onClick={() => navigate("/cart")} className="flex flex-col items-center text-muted">
          <ShoppingCartIcon sx={{ fontSize: 22 }} />
          <span className="text-xs">السلة</span>
        </button>
        <button onClick={() => navigate("/tracking")} className="flex flex-col items-center text-muted">
          <LocalShippingIcon sx={{ fontSize: 22 }} />
          <span className="text-xs">تتبع</span>
        </button>
        <button onClick={() => navigate("/cafe/about/1")} className="flex flex-col items-center text-primary">
          <InfoOutlinedIcon sx={{ fontSize: 22 }} />
          <span className="text-xs">عن المقهى</span>
        </button>
      </nav>
    </div>
  );
}
