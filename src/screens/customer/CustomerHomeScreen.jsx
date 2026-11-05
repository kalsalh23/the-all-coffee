import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import TuneIcon from "@mui/icons-material/Tune";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CustomerLayout from "../../components/customer/CustomerLayout";
import { useLang } from "../../i18n";

export default function CustomerHomeScreen() {
  const navigate = useNavigate();
  const { lang, setLang, isAr } = useLang();
  const t = isAr
    ? {
        deliverTo: "التوصيل إلى",
        location: "الرياض، حي النخيل",
        search: "ابحث عن مقهى أو مشروب...",
        categories: ["الكل", "قهوة ساخنة", "قهوة باردة", "حلويات", "مميز"],
        recommended: "موصى به لك",
        discover: "اكتشف المقاهي",
        branch: "مقهى فرعي",
        open: "مفتوح",
        orderNow: "اطلب الآن",
        viewAll: "عرض الكل",
      }
    : {
        deliverTo: "Deliver to",
        location: "Riyadh, Al Nakheel",
        search: "Search for a cafe or drink...",
        categories: ["All", "Hot coffee", "Iced coffee", "Desserts", "Featured"],
        recommended: "Recommended for you",
        discover: "Discover cafes",
        branch: "Branch cafe",
        open: "Open",
        orderNow: "Order now",
        viewAll: "View all",
      };

  const cafes = isAr
    ? [
        { id: 1, name: "مقهى دلة الأصلي", rating: "4.9", distance: "1.2 km", cover: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=1200&q=80", time: "20-30 min", tag: "الأعلى تقييمًا" },
        { id: 2, name: "كافيه الكرامة", rating: "4.8", distance: "2.1 km", cover: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&q=80", time: "25-35 min", tag: "سريع" },
      ]
    : [
        { id: 1, name: "Original Dallah Cafe", rating: "4.9", distance: "1.2 km", cover: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=1200&q=80", time: "20-30 min", tag: "Top rated" },
        { id: 2, name: "Al Karama Cafe", rating: "4.8", distance: "2.1 km", cover: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&q=80", time: "25-35 min", tag: "Fast" },
      ];
  const featured = cafes[0];

  return (
    <CustomerLayout active="home">
      <header className="bg-white px-4 pt-4 pb-3 border-b border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <button className={`flex items-center gap-2 min-w-0 ${isAr ? "text-right" : "text-left"}`}>
            <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
              <LocationOnIcon sx={{ color: "#C89B3C", fontSize: 20 }} />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] text-muted leading-none">{t.deliverTo}</p>
              <p className="text-sm font-bold text-text truncate mt-0.5">{t.location}</p>
            </div>
          </button>
          <div className="flex items-center gap-1 shrink-0">
            <div className="flex items-center rounded-full bg-gray-100 p-0.5 text-[10px]">
              <button onClick={() => setLang("ar")} className={`px-1.5 py-1 rounded-full transition ${lang === "ar" ? "bg-primary text-white font-bold" : "text-muted"}`}>ع</button>
              <button onClick={() => setLang("en")} className={`px-1.5 py-1 rounded-full transition ${lang === "en" ? "bg-primary text-white font-bold" : "text-muted"}`}>EN</button>
            </div>
            <button onClick={() => navigate("/customer/notifications")} className="relative p-2 rounded-full bg-gray-100">
              <NotificationsIcon sx={{ color: "#3E2723", fontSize: 20 }} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full" />
            </button>
            <button onClick={() => navigate("/customer/profile")} className="p-2 rounded-full bg-gray-100">
              <PersonIcon sx={{ color: "#3E2723", fontSize: 20 }} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex-1 bg-[#f7f7f7] rounded-2xl px-3 py-2.5 flex items-center gap-2 border border-gray-100">
            <SearchIcon sx={{ color: "#6B6B6B", fontSize: 20 }} />
            <input placeholder={t.search} className="flex-1 text-sm outline-none bg-transparent text-text" />
          </div>
          <button className="w-11 h-11 rounded-2xl bg-primary flex items-center justify-center shadow-sm">
            <TuneIcon sx={{ color: "white", fontSize: 20 }} />
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-auto bg-[#f7f7f7]">
        <div className="px-4 pt-3 pb-2 flex gap-2 overflow-x-auto">
          {t.categories.map((cat, idx) => (
            <button key={cat} className={`px-3.5 py-2 rounded-xl text-xs flex-shrink-0 font-medium border transition ${idx === 0 ? "bg-primary text-white border-primary" : "bg-white text-text border-gray-100"}`}>
              {cat}
            </button>
          ))}
        </div>

        <section className="px-4 pt-2">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-text font-bold text-base">{t.recommended}</h3>
            <span className="text-[11px] px-2 py-1 rounded-full bg-accent/10 text-accent font-medium">{t.open}</span>
          </div>
          <button onClick={() => navigate(`/cafe/splash/${featured.id}`)} className={`w-full bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm ${isAr ? "text-right" : "text-left"}`}>
            <div className="relative">
              <img src={featured.cover} alt={featured.name} className="w-full h-36 object-cover" />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
              <div className={`absolute bottom-2 ${isAr ? "right-2 left-2" : "left-2 right-2"} flex items-end justify-between gap-2`}>
                <div className="min-w-0">
                  <p className="text-white font-bold text-base truncate">{featured.name}</p>
                  <p className="text-white/80 text-xs">{t.branch}</p>
                </div>
                <span className="shrink-0 inline-flex items-center gap-1 bg-white/95 px-2 py-1 rounded-full text-xs font-semibold">
                  <StarIcon sx={{ color: "#C89B3C", fontSize: 14 }} /> {featured.rating}
                </span>
              </div>
            </div>
            <div className="p-3 flex items-center justify-between">
              <div className="flex items-center gap-3 text-xs text-muted">
                <span className="inline-flex items-center gap-1"><LocationOnIcon sx={{ fontSize: 14 }} />{featured.distance}</span>
                <span className="inline-flex items-center gap-1"><AccessTimeIcon sx={{ fontSize: 14 }} />{featured.time}</span>
              </div>
              <span className="inline-flex items-center gap-0.5 text-accent text-sm font-semibold">
                {t.orderNow}
                <ChevronRightIcon sx={{ fontSize: 18, transform: isAr ? "rotate(180deg)" : "none" }} />
              </span>
            </div>
          </button>
        </section>

        <section className="px-4 pt-4 pb-4">
          <div className="flex items-center justify-between mb-2.5">
            <h3 className="text-text font-bold text-base">{t.discover}</h3>
            <button className="text-xs text-accent">{t.viewAll}</button>
          </div>
          <div className="space-y-2.5">
            {cafes.map((cafe) => (
              <button key={cafe.id} onClick={() => navigate(`/cafe/splash/${cafe.id}`)} className={`w-full bg-white rounded-2xl border border-gray-100 p-2.5 shadow-sm flex items-center gap-3 ${isAr ? "text-right" : "text-left"}`}>
                <img src={cafe.cover} alt={cafe.name} className="w-20 h-20 rounded-xl object-cover shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-text font-bold text-sm truncate">{cafe.name}</p>
                      <p className="text-[11px] text-muted mt-0.5">{cafe.tag} · {t.branch}</p>
                    </div>
                    <FavoriteBorderIcon sx={{ color: "#6B6B6B", fontSize: 18 }} />
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-[11px] text-muted flex-wrap">
                    <span className="inline-flex items-center gap-0.5 text-text font-semibold bg-accent/10 px-1.5 py-0.5 rounded-md"><StarIcon sx={{ color: "#C89B3C", fontSize: 13 }} />{cafe.rating}</span>
                    <span>{cafe.distance}</span>
                    <span className="inline-flex items-center gap-0.5"><AccessTimeIcon sx={{ fontSize: 13 }} />{cafe.time}</span>
                  </div>
                </div>
                <ChevronRightIcon sx={{ color: "#C89B3C", fontSize: 20, transform: isAr ? "rotate(180deg)" : "none" }} />
              </button>
            ))}
          </div>
        </section>
      </main>
    </CustomerLayout>
  );
}
