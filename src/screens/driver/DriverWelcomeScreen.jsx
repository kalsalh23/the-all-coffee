import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import StarIcon from "@mui/icons-material/Star";

export default function DriverWelcomeScreen() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { icon: DeliveryDiningIcon, title: "مرحبًا بك في دلّة", text: "وصّل القهوة، واكسب أرباحك" },
    { icon: AccountBalanceWalletIcon, title: "أرباحك في متناول يدك", text: "تتبع أرباحك اليومية والأسبوعية" },
    { icon: StarIcon, title: "كن الأفضل في مدينتك", text: "احصل على تقييمات وزيادة الطلبات" },
  ];
  const CurrentIcon = slides[currentSlide].icon;

  return (
    <div className="flex flex-col h-full bg-white">
      <button onClick={() => navigate("/driver/login")} className="absolute top-4 right-4 text-sm text-muted">تخطي</button>
      <main className="flex-1 flex flex-col items-center justify-center p-6 space-y-6">
        <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
          <CurrentIcon sx={{ fontSize: 64, color: "#3E2723" }} />
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-xl font-bold text-text">{slides[currentSlide].title}</h2>
          <p className="text-sm text-muted">{slides[currentSlide].text}</p>
        </div>
        <div className="flex gap-2">
          {slides.map((_, idx) => (
            <div key={idx} className={`w-2 h-2 rounded-full ${idx === currentSlide ? "bg-primary" : "bg-gray-300"}`}></div>
          ))}
        </div>
      </main>
      <footer className="p-4 space-y-3">
        <button onClick={() => { if (currentSlide < 2) setCurrentSlide(currentSlide + 1); else navigate("/driver/login"); }} className="w-full py-3 rounded-xl bg-primary text-white font-semibold">
          {currentSlide === 2 ? "ابدأ الآن" : "التالي"}
        </button>
      </footer>
    </div>
  );
}
