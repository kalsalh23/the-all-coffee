import { useNavigate } from "react-router-dom";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";

export default function CafeLoginScreen() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center p-4">
      <div className="w-[400px] bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <LocalCafeIcon sx={{ fontSize: 28, color: "#3E2723" }} />
            </div>
            <h1 className="text-2xl font-bold text-primary">دلّة</h1>
          </div>
          <h2 className="text-lg font-semibold text-text">لوحة تحكم المقهى</h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-text mb-1 block">رقم الهاتف</label>
            <input type="tel" placeholder="05xxxxxxxx" className="w-full p-3 border border-gray-200 rounded-xl outline-none" />
          </div>
          <div>
            <label className="text-sm text-text mb-1 block">كلمة المرور</label>
            <input type="password" placeholder="••••••••" className="w-full p-3 border border-gray-200 rounded-xl outline-none" />
          </div>
          <button onClick={() => navigate("/cafe/dashboard")} className="w-full py-3 rounded-xl bg-primary text-white font-semibold">تسجيل الدخول</button>
          <button className="w-full text-sm text-accent">نسيت كلمة المرور</button>
        </div>
      </div>
    </div>
  );
}
