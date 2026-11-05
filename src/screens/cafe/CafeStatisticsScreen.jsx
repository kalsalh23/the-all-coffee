import CafeLayout from "../../layouts/CafeLayout";

export default function CafeStatisticsScreen() {
  return (
    <CafeLayout active="stats">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">الإحصائيات</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#2a2a2a]">
            <p className="text-sm text-gray-400">طلبات الأسبوع</p>
            <p className="text-2xl font-bold text-white mt-1">84</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#2a2a2a]">
            <p className="text-sm text-gray-400">الإيراد</p>
            <p className="text-2xl font-bold text-white mt-1">985,000</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#2a2a2a]">
            <p className="text-sm text-gray-400">متوسط التحضير</p>
            <p className="text-2xl font-bold text-white mt-1">7 د</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#2a2a2a]">
            <p className="text-sm text-gray-400">الأكثر طلبًا</p>
            <p className="text-xl font-bold text-white mt-1">آيس لاتيه</p>
          </div>
        </div>
      </div>
    </CafeLayout>
  );
}
