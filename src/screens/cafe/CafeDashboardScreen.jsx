import CafeLayout from "../../layouts/CafeLayout";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function CafeDashboardScreen() {
  return (
    <CafeLayout active="dashboard">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">نظرة عامة</h2>
          <p className="text-sm text-gray-400">متابعة أداء المقهى اليوم</p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#2a2a2a]">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <ReceiptLongIcon sx={{ color: "#C89B3C" }} />
              </div>
              <TrendingUpIcon sx={{ color: "#2E7D32" }} />
            </div>
            <p className="text-2xl font-bold text-white">12</p>
            <p className="text-xs text-gray-400">طلبات اليوم</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#2a2a2a]">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                <AttachMoneyIcon sx={{ color: "#2E7D32" }} />
              </div>
            </div>
            <p className="text-2xl font-bold text-white">145,000</p>
            <p className="text-xs text-gray-400">الإيراد</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#2a2a2a]">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <AccessTimeIcon sx={{ color: "#2196F3" }} />
              </div>
            </div>
            <p className="text-2xl font-bold text-white">8 د</p>
            <p className="text-xs text-gray-400">متوسط التحضير</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#2a2a2a]">
            <p className="text-2xl font-bold text-white">2</p>
            <p className="text-xs text-gray-400 mt-1">طلبات نشطة</p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">الطلبات</h3>
          <div className="space-y-2">
            <div className="bg-[#1a1a1a] rounded-xl p-4 border border-orange-500/50 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                  <span className="text-orange-500 font-bold">جديد</span>
                </div>
                <div>
                  <p className="text-white font-semibold">طلب #1042</p>
                  <p className="text-sm text-gray-400">قهوة عربية × 1، آيس لاتيه × 2</p>
                </div>
              </div>
              <button className="px-6 py-2 rounded-lg bg-accent text-white font-semibold">استلام الطلب</button>
            </div>
            <div className="bg-[#1a1a1a] rounded-xl p-4 border border-green-500/50 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-500 font-bold">تم</span>
                </div>
                <div>
                  <p className="text-white font-semibold">تم تسليمه #1041</p>
                  <p className="text-sm text-gray-400">كابتشينو × 1</p>
                </div>
              </div>
              <button disabled className="px-6 py-2 rounded-lg bg-[#2a2a2a] text-gray-500">تم تسليمه للزبون</button>
            </div>
          </div>
        </div>
      </div>
    </CafeLayout>
  );
}
