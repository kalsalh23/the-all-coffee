import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";

export default function DriverLoginScreen() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <header className="bg-primary text-white p-4 text-center">
        <h1 className="text-lg font-bold">دخول المندوب</h1>
      </header>
      <main className="flex-1 p-6 space-y-6">
        <div className="flex flex-col items-center gap-2 mt-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <LocalCafeIcon sx={{ fontSize: 32, color: "#3E2723" }} />
          </div>
          <h2 className="text-xl font-bold text-primary">دلة</h2>
        </div>
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="text-sm text-text mb-2 block">رقم الهاتف</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="05xxxxxxxx"
                className="w-full p-3 border border-gray-200 rounded-xl outline-none text-text"
              />
            </div>
            <button onClick={() => setStep(2)} className="w-full py-3 rounded-xl bg-primary text-white font-semibold">
              إرسال رمز
            </button>
          </div>
        )}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="text-sm text-text mb-2 block">رمز التحقق</label>
              <div className="flex gap-2 justify-center">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    className="w-14 h-14 text-center text-xl border border-gray-200 rounded-xl outline-none"
                  />
                ))}
              </div>
            </div>
            <button onClick={() => navigate("/driver/waiting")} className="w-full py-3 rounded-xl bg-primary text-white font-semibold">
              تحقق
            </button>
          </div>
        )}
      </main>
      <footer className="p-4">
        <button onClick={() => navigate("/driver/waiting")} className="w-full text-sm text-muted">دخول كضيف للتجربة</button>
      </footer>
      <button onClick={() => navigate("/")} className="absolute top-4 right-4 text-white text-xs bg-black/30 px-2 py-1 rounded">← الرئيسية</button>
    </div>
  );
}
