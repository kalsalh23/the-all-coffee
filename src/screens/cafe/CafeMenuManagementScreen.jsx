import CafeLayout from "../../layouts/CafeLayout";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CafeMenuManagementScreen() {
  const products = [
    { id: 1, name: "قهوة عربية", price: "12,000", category: "ساخن", available: true },
    { id: 2, name: "كابتشينو", price: "18,000", category: "ساخن", available: true },
    { id: 3, name: "آيس لاتيه", price: "22,000", category: "بارد", available: false },
  ];

  return (
    <CafeLayout active="menu">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">إدارة القائمة</h2>
          <button className="px-4 py-2 rounded-lg bg-accent text-white flex items-center gap-2">
            <AddIcon sx={{ fontSize: 18 }} />
            <span>إضافة منتج جديد</span>
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-[#1a1a1a] rounded-xl p-4 border border-[#2a2a2a]">
              <div className="w-full h-32 bg-[#0f0f0f] rounded-lg mb-3"></div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-white font-semibold">{product.name}</h3>
                  <p className="text-accent font-bold">{product.price}</p>
                </div>
                <span className="px-2 py-0.5 bg-[#2a2a2a] text-gray-400 text-xs rounded-full">{product.category}</span>
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={product.available} className="w-4 h-4" />
                  <span className="text-sm text-gray-400">{product.available ? "متوفر" : "غير متوفر"}</span>
                </label>
                <div className="flex items-center gap-1">
                  <button className="p-1.5 hover:bg-[#2a2a2a] rounded"><EditIcon sx={{ fontSize: 18, color: "#666" }} /></button>
                  <button className="p-1.5 hover:bg-[#2a2a2a] rounded"><DeleteIcon sx={{ fontSize: 18, color: "#666" }} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CafeLayout>
  );
}
