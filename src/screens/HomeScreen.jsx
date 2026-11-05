import { useNavigate } from "react-router-dom";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CoffeeIcon from "@mui/icons-material/Coffee";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SearchIcon from "@mui/icons-material/Search";
import { useLang } from "../i18n";

export default function HomeScreen() {
  const navigate = useNavigate();
  const { lang, setLang, isAr } = useLang();
  const t = isAr
    ? {
        brand: "دلة",
        tagline: "أكبر تطبيق لتوصيل القهوة",
        reward: "مكافأة",
        heroTitle: "أسرع توصيل قهوة",
        heroSub: "من أفضل المقاهي الفرعية",
        search: "ابحث عن مقهى أو مشروب...",
        featured: "مقاهي مميزة",
        badge: "مميز",
        all: "جميع المقاهي",
        explore: "استكشف",
        home: "الرئيسية",
        cart: "السلة",
        track: "تتبع",
        about: "عن التطبيق",
      }
    : {
        brand: "Dallah",
        tagline: "The biggest coffee delivery app",
        reward: "Rewards",
        heroTitle: "Fastest coffee delivery",
        heroSub: "From the best local cafes",
        search: "Search for a cafe or drink...",
        featured: "Featured cafes",
        badge: "Featured",
        all: "All cafes",
        explore: "Explore",
        home: "Home",
        cart: "Cart",
        track: "Track",
        about: "About",
      };
  const cafes = isAr
    ? [
        { id: 1, name: "مقهى دلة الأصلي", rating: "4.9", distance: "1.2 كم", cover: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=1200&q=80", slogan: "أصالة القهوة العربية" },
        { id: 2, name: "كافيه الكرامة", rating: "4.8", distance: "2.1 كم", cover: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&q=80", slogan: "كرامة الضيافة" },
        { id: 3, name: "مقهى البركة", rating: "4.7", distance: "3.0 كم", cover: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&q=80", slogan: "بركة الطعم" },
      ]
    : [
        { id: 1, name: "Original Dallah Cafe", rating: "4.9", distance: "1.2 km", cover: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=1200&q=80", slogan: "Authentic Arabic coffee" },
        { id: 2, name: "Al Karama Cafe", rating: "4.8", distance: "2.1 km", cover: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&q=80", slogan: "Hospitality with honor" },
        { id: 3, name: "Al Baraka Cafe", rating: "4.7", distance: "3.0 km", cover: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&q=80", slogan: "A blessed taste" },
      ];
  const featured = cafes.map((c) => ({ id: c.id, name: c.name, badge: t.badge, rating: c.rating, image: c.cover.replace("w=1200", "w=800") }));
  return (
    <div className="flex flex-col h-full bg-white">
      <header className="bg-primary text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=200&q=80" alt="logo" className="w-9 h-9 rounded-full object-cover border-2 border-accent" />
          <div>
            <h1 className="text-lg font-bold">{t.brand}</h1>
            <p className="text-xs text-white/80">{t.tagline}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-full bg-white/10 p-0.5 border border-white/20 text-[10px]">
            <button onClick={() => setLang("ar")} className={`px-1.5 py-1 rounded-full transition ${lang === "ar" ? "bg-accent text-white font-bold" : "text-white/80"}`}>ع</button>
            <button onClick={() => setLang("en")} className={`px-1.5 py-1 rounded-full transition ${lang === "en" ? "bg-accent text-white font-bold" : "text-white/80"}`}>EN</button>
          </div>
          <div className="flex items-center gap-1 bg-accent px-2 py-1 rounded-full">
            <CardGiftcardIcon sx={{ fontSize: 16 }} />
            <span className="text-xs">{t.reward}</span>
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-auto">
        <div className="relative h-52 w-full">
          <img
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&q=80"
            alt="hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent flex flex-col justify-center p-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white">
                <LocalCafeIcon />
                <h2 className="text-xl font-bold">{t.brand}</h2>
              </div>
              <p className="text-white text-base font-semibold">{t.heroTitle}</p>
              <p className="text-white/90 text-xs">{t.heroSub}</p>
            </div>
          </div>
        </div>
        <div className="px-4 -mt-7 relative z-20">
          <div className="bg-white rounded-xl shadow-xl p-2 flex items-center gap-2 border border-gray-100">
            <SearchIcon sx={{ color: "#6B6B6B" }} />
            <input type="text" placeholder={t.search} className="flex-1 text-sm outline-none bg-transparent text-text" />
          </div>
        </div>
        <div className="p-4 space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <EmojiEventsIcon sx={{ color: "#C89B3C" }} />
              <h3 className="text-text font-bold">{t.featured}</h3>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {featured.map((cafe) => (
                <button key={cafe.id} onClick={() => navigate(`/cafe/splash/${cafe.id}`)} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                  <div className="relative">
                    <img src={cafe.image} alt={cafe.name} className="w-full h-20 object-cover" />
                    <span className="absolute top-1 right-1 bg-accent text-white text-xs px-1.5 py-0.5 rounded-full">{cafe.badge}</span>
                  </div>
                  <div className="p-1.5 space-y-1">
                    <div className="text-xs text-text font-medium truncate">{cafe.name}</div>
                    <div className="flex items-center gap-1">
                      <StarIcon sx={{ color: "#C89B3C", fontSize: 12 }} />
                      <span className="text-xs text-text">{cafe.rating}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-text font-bold">{t.all}</h3>
              <span className="text-muted text-sm">{t.explore}</span>
            </div>
            <div className="space-y-3">
              {cafes.map((cafe) => (
                <button
                  key={cafe.id}
                  onClick={() => navigate(`/cafe/splash/${cafe.id}`)}
                  className="w-full text-right bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition"
                >
                  <div className="flex items-center gap-3 p-2">
                    <img src={cafe.cover} alt={cafe.name} className="w-20 h-20 object-cover rounded-xl" />
                    <div className="flex-1 space-y-1">
                      <h2 className="text-base font-semibold text-text">{cafe.name}</h2>
                      <p className="text-xs text-muted">{cafe.slogan}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-muted">
                          <LocationOnIcon sx={{ fontSize: 14 }} />
                          <span className="text-xs">{cafe.distance}</span>
                        </div>
                        <div className="flex items-center gap-1 bg-secondary px-2 py-0.5 rounded-full">
                          <StarIcon sx={{ color: "#C89B3C", fontSize: 14 }} />
                          <span className="text-xs text-text">{cafe.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
      <nav className="bg-white border-t border-gray-100 p-2 flex items-center justify-around">
        <button className="flex flex-col items-center text-primary">
          <CoffeeIcon sx={{ fontSize: 22 }} />
          <span className="text-xs">{t.home}</span>
        </button>
        <button onClick={() => navigate("/cart")} className="flex flex-col items-center text-muted">
          <ShoppingCartIcon sx={{ fontSize: 22 }} />
          <span className="text-xs">{t.cart}</span>
        </button>
        <button onClick={() => navigate("/tracking")} className="flex flex-col items-center text-muted">
          <LocalShippingIcon sx={{ fontSize: 22 }} />
          <span className="text-xs">{t.track}</span>
        </button>
        <button onClick={() => navigate("/about")} className="flex flex-col items-center text-muted">
          <InfoOutlinedIcon sx={{ fontSize: 22 }} />
          <span className="text-xs">{t.about}</span>
        </button>
      </nav>
    </div>
  );
}
