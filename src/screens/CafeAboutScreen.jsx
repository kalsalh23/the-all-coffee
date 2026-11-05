import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function CafeAboutScreen() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full bg-white">
      <header className="bg-primary text-white p-4 flex items-center gap-2">
        <button onClick={() => navigate(-1)} className="p-1">
          <ArrowBackIcon />
        </button>
        <div className="flex-1 flex items-center justify-center gap-2">
          <img src="https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=200&q=80" alt="logo" className="w-7 h-7 rounded-full object-cover" />
          <h1 className="text-lg font-bold">عن المقهى</h1>
        </div>
        <div className="w-8" />
      </header>
      <main className="flex-1 overflow-auto">
        <div className="relative h-40 w-full">
          <img src="https://images.unsplash.com/photo-1498804103079-a6351b050096?w=1200&q=80" alt="cafe" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-3">
            <div className="flex items-center gap-2 text-white">
              <LocalCafeIcon />
              <h2 className="text-base font-bold">مقهى دلّة الأصلي</h2>
            </div>
          </div>
        </div>
        <div className="p-4 space-y-3">
          <div className="p-3 bg-secondary rounded-xl space-y-2">
            <div className="text-text font-semibold">معلومات المقهى</div>
            <p className="text-sm text-text">مقهى فرعي يقدم أفضل أنواع القهوة الساخنة والباردة بأجواء مميزة وخدمة سريعة.</p>
          </div>
          <div className="p-3 bg-white border border-gray-100 rounded-xl shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-text font-semibold">
              <LocationOnIcon sx={{ color: "#C89B3C" }} />
              <span>الموقع</span>
            </div>
            <p className="text-sm text-muted">الرياض، حي النخيل، شارع الملك فهد</p>
          </div>
          <div className="p-3 bg-white border border-gray-100 rounded-xl shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-text font-semibold">
              <StarIcon sx={{ color: "#C89B3C" }} />
              <span>التقييم</span>
            </div>
            <p className="text-sm text-muted">4.9 / 5 بناءً على تقييمات العملاء</p>
          </div>
          <div className="p-3 bg-white border border-gray-100 rounded-xl shadow-sm space-y-2">
            <div className="text-text font-semibold mb-1">حسابات المقهى</div>
            <div className="flex items-center gap-2 text-muted text-sm">
              <PhoneIcon sx={{ fontSize: 18 }} />
              <span>+966 50 123 4567</span>
            </div>
            <div className="flex items-center gap-2 text-muted text-sm">
              <InstagramIcon sx={{ fontSize: 18 }} />
              <span>@dallah_original</span>
            </div>
            <div className="flex items-center gap-2 text-muted text-sm">
              <TwitterIcon sx={{ fontSize: 18 }} />
              <span>@dallah_cafe</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
