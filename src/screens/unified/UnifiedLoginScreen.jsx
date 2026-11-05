import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useLang } from "../../i18n";

export default function UnifiedLoginScreen() {
  const navigate = useNavigate();
  const { isAr, lang, setLang } = useLang();
  const [step, setStep] = useState(1);
  const [activeTab, setActiveTab] = useState("customer");
  const [phone, setPhone] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleVerify = () => {
    localStorage.setItem("role", activeTab);
    if (activeTab === "customer") navigate("/customer/home");
    else navigate("/driver/home");
  };

  const LangToggle = ({ light = false }) => (
    <div className={`flex items-center rounded-full p-0.5 border text-[11px] ${light ? "bg-white/10 border-white/20" : "bg-gray-100 border-gray-200"}`}>
      <button onClick={() => setLang("ar")} className={`px-2 py-1 rounded-full transition ${lang === "ar" ? "bg-accent text-white font-bold" : light ? "text-white/80" : "text-muted"}`}>عربي</button>
      <button onClick={() => setLang("en")} className={`px-2 py-1 rounded-full transition ${lang === "en" ? "bg-accent text-white font-bold" : light ? "text-white/80" : "text-muted"}`}>EN</button>
    </div>
  );

  if (step === 1) {
    return (
      <div className="flex flex-col h-full bg-white">
        <header className="bg-gradient-to-br from-primary via-[#4E342E] to-[#5D4037] px-4 pt-4 pb-8">
          <div className="flex items-center justify-between mb-6">
            <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-white/10 backdrop-blur-sm">
              <ArrowBackIcon sx={{ color: "white" }} />
            </button>
            <LangToggle light />
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-3 border border-white/20">
              <LocalCafeIcon sx={{ color: "#C89B3C", fontSize: 32 }} />
            </div>
            <h1 className="text-2xl font-bold text-white mb-1">{isAr ? "مرحباً بك في دلّة" : "Welcome to Dallah"}</h1>
            <p className="text-white/70 text-sm">{isAr ? "اختر نوع الحساب للمتابعة" : "Choose account type to continue"}</p>
          </div>
        </header>
        <main className="flex-1 overflow-auto -mt-4">
          <div className="bg-white rounded-t-3xl pt-6 px-4 pb-4 space-y-3">
            <button
              onClick={() => setActiveTab("customer")}
              className={`w-full p-4 rounded-2xl flex items-center gap-4 transition-all ${
                activeTab === "customer"
                  ? "bg-gradient-to-r from-accent/10 to-accent/5 border-2 border-accent shadow-lg"
                  : "bg-white border border-gray-100 shadow-sm hover:shadow-md"
              }`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${activeTab === "customer" ? "bg-accent" : "bg-accent/10"}`}>
                <ShoppingCartIcon sx={{ fontSize: 32, color: activeTab === "customer" ? "white" : "#C89B3C" }} />
              </div>
              <div className={`flex-1 ${isAr ? "text-right" : "text-left"}`}>
                <h3 className="text-lg font-bold text-text">{isAr ? "عميل" : "Customer"}</h3>
                <p className="text-sm text-muted mt-0.5">{isAr ? "اطلب القهوة من أقرب مقهى" : "Order coffee from nearby cafes"}</p>
              </div>
              {activeTab === "customer" && <CheckCircleIcon sx={{ color: "#C89B3C" }} />}
            </button>
            <button
              onClick={() => setActiveTab("driver")}
              className={`w-full p-4 rounded-2xl flex items-center gap-4 transition-all ${
                activeTab === "driver"
                  ? "bg-gradient-to-r from-success/10 to-success/5 border-2 border-success shadow-lg"
                  : "bg-white border border-gray-100 shadow-sm hover:shadow-md"
              }`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${activeTab === "driver" ? "bg-success" : "bg-success/10"}`}>
                <DeliveryDiningIcon sx={{ fontSize: 32, color: activeTab === "driver" ? "white" : "#2E7D32" }} />
              </div>
              <div className={`flex-1 ${isAr ? "text-right" : "text-left"}`}>
                <h3 className="text-lg font-bold text-text">{isAr ? "مندوب توصيل" : "Delivery Driver"}</h3>
                <p className="text-sm text-muted mt-0.5">{isAr ? "وصّل واكسب أرباحك" : "Deliver and earn"}</p>
              </div>
              {activeTab === "driver" && <CheckCircleIcon sx={{ color: "#2E7D32" }} />}
            </button>
          </div>
        </main>
        <footer className="p-4 bg-white">
          <button onClick={() => setStep(2)} className={`w-full py-3.5 rounded-xl font-bold text-white shadow-lg ${activeTab === "customer" ? "bg-accent" : "bg-success"}`}>
            {isAr ? `متابعة كـ ${activeTab === "customer" ? "عميل" : "مندوب"}` : `Continue as ${activeTab === "customer" ? "Customer" : "Driver"}`}
          </button>
        </footer>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-white">
      <header className="bg-gradient-to-br from-primary via-[#4E342E] to-[#5D4037] px-4 pt-4 pb-6">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => setStep(1)} className="p-2 rounded-full bg-white/10 backdrop-blur-sm">
            <ArrowBackIcon sx={{ color: "white" }} />
          </button>
          <h1 className="text-lg font-bold text-white">{isAr ? "تسجيل الدخول" : "Sign in"}</h1>
          <LangToggle light />
        </div>
      </header>
      <main className="flex-1 overflow-auto -mt-2">
        <div className="bg-white rounded-t-3xl pt-6 px-6 pb-4">
          <div className="text-center mb-6">
            <div className={`w-20 h-20 rounded-2xl mx-auto mb-3 flex items-center justify-center ${activeTab === "customer" ? "bg-accent/10" : "bg-success/10"}`}>
              {activeTab === "customer" ? <ShoppingCartIcon sx={{ fontSize: 40, color: "#C89B3C" }} /> : <DeliveryDiningIcon sx={{ fontSize: 40, color: "#2E7D32" }} />}
            </div>
            <h2 className="text-xl font-bold text-text">{isAr ? `تسجيل دخول ${activeTab === "customer" ? "كعميل" : "كمندوب"}` : `Sign in as ${activeTab === "customer" ? "Customer" : "Driver"}`}</h2>
            <p className="text-sm text-muted mt-1">{isAr ? "أدخل رقم هاتفك لإتمام التسجيل" : "Enter your phone number to continue"}</p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-text font-medium mb-2 block">{isAr ? "رقم الهاتف" : "Phone number"}</label>
              <div className="flex items-center gap-2 p-3 border border-gray-200 rounded-xl focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/10" dir="ltr">
                <PhoneIphoneIcon sx={{ color: "#6B6B6B" }} />
                <span className="text-text">+966</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="501234567"
                  className="flex-1 outline-none bg-transparent text-text"
                />
              </div>
            </div>
            <button
              onClick={() => setShowOtp(true)}
              disabled={!phone}
              className={`w-full py-3.5 rounded-xl font-bold text-white shadow-lg disabled:opacity-50 disabled:shadow-none ${activeTab === "customer" ? "bg-accent" : "bg-success"}`}
            >
              {isAr ? "إرسال رمز التحقق" : "Send verification code"}
            </button>
            <p className="text-xs text-muted text-center">{isAr ? "بالضغط على متابعة، أنت توافق على الشروط والأحكام" : "By continuing, you agree to the terms and conditions"}</p>
          </div>
        </div>
      </main>
      {showOtp && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-6 w-full max-w-[340px] space-y-5 shadow-2xl" dir={isAr ? "rtl" : "ltr"}>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <PhoneIphoneIcon sx={{ color: "#C89B3C", fontSize: 32 }} />
              </div>
              <h3 className="text-lg font-bold text-text">{isAr ? "أدخل رمز التحقق" : "Enter verification code"}</h3>
              <p className="text-sm text-muted mt-1">{isAr ? "تم إرسال رمز مكون من 4 أرقام إلى" : "A 4-digit code was sent to"}</p>
              <p className="text-sm text-text font-medium mt-1" dir="ltr">+966 {phone}</p>
            </div>
            <div className="flex gap-2 justify-center" dir="ltr">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Backspace" && !digit && index > 0) {
                      document.getElementById(`otp-${index - 1}`)?.focus();
                    }
                  }}
                  className="w-14 h-14 text-center text-xl font-bold border-2 border-gray-200 rounded-xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/10"
                />
              ))}
            </div>
            <div className="space-y-2">
              <button onClick={handleVerify} className="w-full py-3 rounded-xl bg-primary text-white font-bold">{isAr ? "تحقق وتسجيل الدخول" : "Verify and sign in"}</button>
              <button onClick={() => setShowOtp(false)} className="w-full text-sm text-muted">{isAr ? "إلغاء" : "Cancel"}</button>
              <button className="w-full text-sm text-accent">{isAr ? "إعادة إرسال الرمز" : "Resend code"}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
