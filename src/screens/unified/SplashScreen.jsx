import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/app/welcome");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-full bg-primary">
      <div className="flex flex-col items-center gap-4">
        <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center">
          <LocalCafeIcon sx={{ fontSize: 48, color: "#C89B3C" }} />
        </div>
        <h1 className="text-4xl font-bold text-white">دلّة</h1>
        <p className="text-white/80">قهوتك، بضغطة زر</p>
      </div>
      <div className="absolute bottom-20 flex gap-2">
        <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
        <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
      </div>
    </div>
  );
}
