import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";

const cafeData = {
  1: { name: "مقهى دلة الأصلي", slogan: "أصالة القهوة العربية", cover: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=1200&q=80" },
  2: { name: "كافيه الكرامة", slogan: "كرامة الضيافة", cover: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&q=80" },
  3: { name: "مقهى البركة", slogan: "بركة الطعم", cover: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&q=80" },
};

export default function CafeSplashScreen() {
  const navigate = useNavigate();
  const { cafeId } = useParams();
  const cafe = cafeData[cafeId] || cafeData[1];

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/menu/${cafeId}`);
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate, cafeId]);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full relative overflow-hidden">
      <img src={cafe.cover} alt={cafe.name} className="absolute inset-0 w-full h-full object-cover scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/60" />
      <div className="relative z-10 flex flex-col items-center gap-4 text-white px-6">
        <div className="relative">
          <div className="w-28 h-28 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border-4 border-accent animate-pulse">
            <LocalCafeIcon sx={{ fontSize: 56, color: "#C89B3C" }} />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-accent rounded-full"></div>
        </div>
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-wide">{cafe.name}</h1>
          <div className="w-20 h-0.5 bg-accent mx-auto"></div>
          <p className="text-white/90 text-lg">{cafe.slogan}</p>
        </div>
        <div className="mt-8 flex gap-1">
          <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        </div>
      </div>
    </div>
  );
}
