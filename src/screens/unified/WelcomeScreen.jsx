import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import StarIcon from "@mui/icons-material/Star";
import { useLang } from "../../i18n";

export default function WelcomeScreen() {
  const navigate = useNavigate();
  const { isAr, lang, setLang } = useLang();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = isAr
    ? [
        { icon: LocalCafeIcon, title: "قهوتك المفضلة، الآن أقرب إليك", text: "اطلب من أفضل مقاهي مدينتك في دقائق" },
        { icon: DeliveryDiningIcon, title: "توصيل سريع وموثوق", text: "مندوبونا يصلون إليك في أسرع وقت" },
        { icon: StarIcon, title: "تجربة تليق بك", text: "قيّم تجربتك وكن جزءًا من مجتمع دلّة" },
      ]
    : [
        { icon: LocalCafeIcon, title: "Your favorite coffee, closer than ever", text: "Order from the best cafes in your city in minutes" },
        { icon: DeliveryDiningIcon, title: "Fast and reliable delivery", text: "Our couriers reach you as quickly as possible" },
        { icon: StarIcon, title: "An experience made for you", text: "Rate your experience and be part of Dallah" },
      ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
    else navigate("/app/login");
  };

  const CurrentIcon = slides[currentSlide].icon;

  return (
    <div className="relative flex flex-col h-full overflow-hidden bg-gradient-to-b from-primary via-[#4E342E] to-[#5D4037]">
      <div className="pointer-events-none absolute -top-16 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute top-1/3 -right-10 h-40 w-40 rounded-full bg-accent/10 blur-2xl" />

      <header className="relative z-10 flex items-center justify-between px-4 pt-4">
        <div className="flex items-center rounded-full bg-white/10 p-0.5 border border-white/20 text-[11px]">
          <button onClick={() => setLang("ar")} className={`px-2 py-1 rounded-full transition ${lang === "ar" ? "bg-accent text-white font-bold" : "text-white/80"}`}>عربي</button>
          <button onClick={() => setLang("en")} className={`px-2 py-1 rounded-full transition ${lang === "en" ? "bg-accent text-white font-bold" : "text-white/80"}`}>EN</button>
        </div>
        <button
          onClick={() => navigate("/app/login")}
          className="rounded-full bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur-sm"
        >
          {isAr ? "تخطي" : "Skip"}
        </button>
      </header>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        <div className="mb-8 flex h-36 w-36 items-center justify-center rounded-full border border-accent/30 bg-accent/20">
          <CurrentIcon sx={{ fontSize: 72, color: "#C89B3C" }} />
        </div>
        <h2 className="max-w-[280px] text-2xl font-bold leading-snug text-white">
          {slides[currentSlide].title}
        </h2>
        <p className="mt-3 max-w-[280px] text-sm leading-6 text-white/75">
          {slides[currentSlide].text}
        </p>
      </main>

      <footer className="relative z-10 px-4 pb-6 pt-2">
        <div className="mb-5 flex items-center justify-center gap-2">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`rounded-full transition-all ${
                idx === currentSlide ? "h-2 w-6 bg-accent" : "h-2 w-2 bg-white/30"
              }`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="w-full rounded-2xl bg-accent py-3.5 font-bold text-white shadow-xl shadow-accent/20"
        >
          {currentSlide === slides.length - 1 ? (isAr ? "ابدأ الآن" : "Start now") : (isAr ? "التالي" : "Next")}
        </button>
        <p className="mt-3 text-center text-xs text-white/55">
          {isAr ? "بالمتابعة أنت توافق على الشروط وسياسة الخصوصية" : "By continuing you agree to the terms and privacy policy"}
        </p>
      </footer>
    </div>
  );
}
