import CafeLayout from "../../layouts/CafeLayout";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";

export default function CafeProfileScreen() {
  return (
    <CafeLayout active="profile">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">الحساب</h2>
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center">
              <LocalCafeIcon sx={{ fontSize: 32, color: "#C89B3C" }} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">مقهى النخبة</h3>
              <p className="text-sm text-gray-400">الرياض، حي النخيل</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-[#0f0f0f] rounded-lg">
              <p className="text-xs text-gray-400 mb-1">رقم الهاتف</p>
              <p className="text-white">0501234567</p>
            </div>
            <div className="p-3 bg-[#0f0f0f] rounded-lg">
              <p className="text-xs text-gray-400 mb-1">ساعات العمل</p>
              <p className="text-white">08:00 ص - 11:00 م</p>
            </div>
          </div>
        </div>
      </div>
    </CafeLayout>
  );
}
