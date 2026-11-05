import CafeLayout from "../../layouts/CafeLayout";
import SearchIcon from "@mui/icons-material/Search";

export default function CafeOrdersHistoryScreen() {
  const orders = [
    { id: "1042", customer: "محمد أحمد", items: "قهوة عربية ×1، آيس لاتيه ×2", total: "45,000", time: "12:30", status: "مكتمل", driver: "أحمد" },
    { id: "1041", customer: "سارة علي", items: "كابتشينو ×1", total: "18,000", time: "12:15", status: "مكتمل", driver: "خالد" },
    { id: "1040", customer: "عمر حسن", items: "اسبريسو ×2", total: "20,000", time: "11:50", status: "مكتمل", driver: "أحمد" },
  ];

  return (
    <CafeLayout active="orders">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">سجل الطلبات</h2>
          <button className="px-4 py-2 rounded-lg bg-accent text-white">تصدير CSV</button>
        </div>
        <div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#2a2a2a] flex items-center gap-4">
          <div className="flex-1 relative">
            <SearchIcon sx={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", color: "#666" }} />
            <input placeholder="بحث بالعميل..." className="w-full pr-10 p-2 bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg text-white outline-none" />
          </div>
          <select className="p-2 bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg text-white">
            <option>جميع الحالات</option>
            <option>مكتمل</option>
          </select>
          <input type="date" className="p-2 bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg text-white" />
        </div>
        <div className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#0f0f0f]">
              <tr>
                <th className="text-right p-3 text-gray-400 text-sm">رقم الطلب</th>
                <th className="text-right p-3 text-gray-400 text-sm">العميل</th>
                <th className="text-right p-3 text-gray-400 text-sm">الأصناف</th>
                <th className="text-right p-3 text-gray-400 text-sm">الإجمالي</th>
                <th className="text-right p-3 text-gray-400 text-sm">الوقت</th>
                <th className="text-right p-3 text-gray-400 text-sm">الحالة</th>
                <th className="text-right p-3 text-gray-400 text-sm">المندوب</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-t border-[#2a2a2a] hover:bg-[#222]">
                  <td className="p-3 text-white">#{order.id}</td>
                  <td className="p-3 text-white">{order.customer}</td>
                  <td className="p-3 text-gray-400 text-sm">{order.items}</td>
                  <td className="p-3 text-white">{order.total}</td>
                  <td className="p-3 text-gray-400">{order.time}</td>
                  <td className="p-3"><span className="px-2 py-1 bg-green-500/20 text-green-500 text-xs rounded-full">{order.status}</span></td>
                  <td className="p-3 text-gray-400">{order.driver}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </CafeLayout>
  );
}
