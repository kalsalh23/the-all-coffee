import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";

export default function CustomerLoginScreen() {
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
      <main className="flex-1 p-6 space-y-6 flex flex-col justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <LocalCafeIcon sx={{ fontSize: 32, color: "#3E2723" }} />
          </div>
          <h1 className="text-2xl font-bold text-primary">دلّة</h1>
          <p className="text-muted">أهلاً بك</p>
        </div>
        {step === 1 && (
          <div className="space-y-4">
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="رقم الهاتف" className="w-full p-3 border border-gray-200 rounded-xl outline-none" />
            <button onClick={() => setStep(2)} className="w-full py-3 rounded-xl bg-accent text-white font-semibold">متابعة</button>
          </div>
        )}
        {step === 2 && (
          <div className="space-y-4">
            <div className="flex gap-2 justify-center">
              {otp.map((digit, index) => (
                <input key={index} type="text" maxLength={1} value={digit} onChange={(e) => handleOtpChange(index, e.target.value)} className="w-12 h-12 text-center text-xl border border-gray-200 rounded-xl" />
              ))}
            </div>
            <button onClick={() => navigate("/customer/home")} className="w-full py-3 rounded-xl bg-accent text-white font-semibold">تحقق</button>
          </div>
        )}
      </main>
      <footer className="p-4">
        <button onClick={() => navigate("/customer/home")} className="w-full text-sm text-muted">الدخول كضيف</button>
      </footer>
    </div>
  );
}
