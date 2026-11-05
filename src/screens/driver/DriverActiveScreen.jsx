import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import StoreIcon from "@mui/icons-material/Store";
import PersonIcon from "@mui/icons-material/Person";

export default function DriverActiveScreen() {
  const navigate = useNavigate();
  const [stage, setStage] = useState(1);

  const stages = ["التوجه للمقهى", "في المقهى", "التوصيل للعميل", "تم"];

  return (
    <div className="flex flex-col h-full bg-white">
      <header className="bg-primary text-white p-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold">الطلب #1042</h1>
        </div>
        <div className="flex items-center gap-2">
          <PhoneIcon />
          <SupportAgentIcon />
        </div>
      </header>
      <main className="flex-1 overflow-auto">
        <div className="h-40 bg-gray-200 flex items-center justify-center relative">
          <img src="https://maps.googleapis.com/maps/api/staticmap?center=Riyadh&zoom=13&size=400x200&key=demo" alt="map" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gray-300/50 flex items-center justify-center">
            <span className="text-muted text-sm">خريطة</span>
          </div>
        </div>
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            {stages.map((s, idx) => (
              <div key={idx} className="flex flex-col items-center flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${idx + 1 <= stage ? "bg-success text-white" : "bg-gray-200 text-muted"}`}>
                  {idx + 1}
                </div>
                <p className="text-xs text-muted mt-1 text-center">{s}</p>
              </div>
            ))}
          </div>
          <div className="p-4 bg-secondary rounded-xl space-y-3">
            {stage === 1 && (
              <>
                <div className="flex items-center gap-2">
                  <StoreIcon sx={{ color: "#3E2723" }} />
                  <div>
                    <p className="text-text font-semibold">مقهى دلة الأصلي</p>
                    <p className="text-sm text-muted">حي النخيل، شارع 5</p>
                  </div>
                </div>
                <button onClick={() => setStage(2)} className="w-full py-3 rounded-xl bg-primary text-white font-semibold">
                  وصلت للمقهى
                </button>
              </>
            )}
            {stage === 2 && (
              <>
                <div>
                  <p className="text-text font-semibold mb-2">تفاصيل الطلب</p>
                  <p className="text-sm text-text">قهوة عربية × 1</p>
                  <p className="text-sm text-text">آيس لاتيه × 2</p>
                </div>
                <button onClick={() => setStage(3)} className="w-full py-3 rounded-xl bg-primary text-white font-semibold">
                  استلمت الطلب
                </button>
              </>
            )}
            {stage === 3 && (
              <>
                <div className="flex items-center gap-2">
                  <PersonIcon sx={{ color: "#3E2723" }} />
                  <div>
                    <p className="text-text font-semibold">محمد أحمد</p>
                    <p className="text-sm text-muted">حي النخيل، شارع 5</p>
                    <p className="text-sm text-muted">0501234567</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 rounded-xl bg-accent text-white">اتصل بالعميل</button>
                  <button onClick={() => setStage(4)} className="flex-1 py-2 rounded-xl bg-primary text-white">وصلت للعميل</button>
                </div>
              </>
            )}
            {stage === 4 && (
              <>
                <div className="text-center">
                  <p className="text-text font-semibold">المبلغ المطلوب</p>
                  <p className="text-xl font-bold text-primary">25,000</p>
                </div>
                <button onClick={() => navigate("/driver/completed")} className="w-full py-3 rounded-xl bg-success text-white font-semibold">
                  تم التوصيل
                </button>
              </>
            )}
          </div>
        </div>
      </main>
      <button onClick={() => navigate("/")} className="absolute top-4 left-4 text-white text-xs bg-black/30 px-2 py-1 rounded">← الرئيسية</button>
    </div>
  );
}
