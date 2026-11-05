import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default function AboutScreen() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full bg-white">
      <header className="bg-primary text-white p-4 flex items-center gap-2">
        <button onClick={() => navigate(-1)} className="p-1">
          <ArrowBackIcon />
        </button>
        <div className="flex-1 flex items-center justify-center gap-2">
          <img src="https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=200&q=80" alt="logo" className="w-7 h-7 rounded-full object-cover" />
          <h1 className="text-lg font-bold">دلّة</h1>
        </div>
        <div className="w-8" />
      </header>
      <main className="flex-1 overflow-auto p-4 space-y-4">
        <div className="relative h-40 w-full rounded-xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80" alt="about" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-3">
            <div className="flex items-center gap-2 text-white">
              <LocalCafeIcon />
              <h2 className="text-base font-bold">عن تطبيق دلّة</h2>
            </div>
          </div>
        </div>
        <div className="p-4 bg-secondary rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-text font-semibold">
            <InfoOutlinedIcon />
            <span>نبذة عن التطبيق</span>
          </div>
          <p className="text-sm text-text leading-relaxed">
            تطبيق دلّة هو أكبر تطبيق لتوصيل القهوة في المنطقة، يربط العملاء بأفضل المقاهي الفرعية لتوصيل المشروبات الساخنة والباردة بسرعة وأمان.
          </p>
        </div>
        <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm space-y-2">
          <div className="flex items-center gap-2 text-text font-semibold">
            <CardGiftcardIcon sx={{ color: "#C89B3C" }} />
            <span>نقاط المكافأة</span>
          </div>
          <p className="text-sm text-muted">اجمع النقاط مع كل طلب واستبدلها بمكافآت حصرية</p>
        </div>
        <div className="text-center text-muted text-xs mt-6">دلّة © 2026</div>
      </main>
    </div>
  );
}
