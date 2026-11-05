import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import DescriptionIcon from "@mui/icons-material/Description";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export default function DriverSettingsScreen() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full bg-white">
      <header className="bg-primary text-white p-4 flex items-center gap-2">
        <button onClick={() => navigate(-1)} className="p-1">
          <ArrowBackIcon />
        </button>
        <h1 className="text-lg font-bold flex-1 text-center">الإعدادات</h1>
      </header>
      <main className="flex-1 overflow-auto p-4 space-y-4">
        <div>
          <h3 className="text-text font-semibold mb-2">الحساب</h3>
          <div className="space-y-1">
            <button className="w-full p-3 bg-white border border-gray-100 rounded-xl flex items-center gap-3">
              <PersonIcon sx={{ color: "#3E2723" }} />
              <span className="flex-1 text-right text-text">تعديل الملف الشخصي</span>
              <ChevronLeftIcon sx={{ color: "#6B6B6B" }} />
            </button>
            <button className="w-full p-3 bg-white border border-gray-100 rounded-xl flex items-center gap-3">
              <PhoneIcon sx={{ color: "#3E2723" }} />
              <span className="flex-1 text-right text-text">رقم الهاتف</span>
              <ChevronLeftIcon sx={{ color: "#6B6B6B" }} />
            </button>
            <button className="w-full p-3 bg-white border border-gray-100 rounded-xl flex items-center gap-3">
              <EmailIcon sx={{ color: "#3E2723" }} />
              <span className="flex-1 text-right text-text">البريد الإلكتروني</span>
              <ChevronLeftIcon sx={{ color: "#6B6B6B" }} />
            </button>
          </div>
        </div>
        <div>
          <h3 className="text-text font-semibold mb-2">الإشعارات</h3>
          <div className="space-y-1">
            {["Push Notifications", "SMS", "البريد الإلكتروني", "صوت الطلبات"].map((item) => (
              <div key={item} className="w-full p-3 bg-white border border-gray-100 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <NotificationsIcon sx={{ color: "#3E2723" }} />
                  <span className="text-text">{item}</span>
                </div>
                <div className="w-10 h-6 bg-success rounded-full relative">
                  <div className="absolute left-5 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-text font-semibold mb-2">عام</h3>
          <div className="space-y-1">
            <button className="w-full p-3 bg-white border border-gray-100 rounded-xl flex items-center gap-3">
              <LanguageIcon sx={{ color: "#3E2723" }} />
              <span className="flex-1 text-right text-text">اللغة</span>
              <span className="text-sm text-muted">العربية</span>
              <ChevronLeftIcon sx={{ color: "#6B6B6B" }} />
            </button>
            <button className="w-full p-3 bg-white border border-gray-100 rounded-xl flex items-center gap-3">
              <LocationOnIcon sx={{ color: "#3E2723" }} />
              <span className="flex-1 text-right text-text">المنطقة المفضلة</span>
              <ChevronLeftIcon sx={{ color: "#6B6B6B" }} />
            </button>
          </div>
        </div>
        <div>
          <h3 className="text-text font-semibold mb-2">الخصوصية</h3>
          <div className="space-y-1">
            <button className="w-full p-3 bg-white border border-gray-100 rounded-xl flex items-center gap-3">
              <PrivacyTipIcon sx={{ color: "#3E2723" }} />
              <span className="flex-1 text-right text-text">سياسة الخصوصية</span>
              <ChevronLeftIcon sx={{ color: "#6B6B6B" }} />
            </button>
            <button className="w-full p-3 bg-white border border-gray-100 rounded-xl flex items-center gap-3">
              <DescriptionIcon sx={{ color: "#3E2723" }} />
              <span className="flex-1 text-right text-text">شروط الاستخدام</span>
              <ChevronLeftIcon sx={{ color: "#6B6B6B" }} />
            </button>
            <button className="w-full p-3 bg-white border border-gray-100 rounded-xl flex items-center gap-3">
              <DeleteIcon sx={{ color: "#C62828" }} />
              <span className="flex-1 text-right text-danger">حذف الحساب</span>
              <ChevronLeftIcon sx={{ color: "#6B6B6B" }} />
            </button>
          </div>
        </div>
        <div>
          <button className="w-full p-3 bg-white border border-gray-100 rounded-xl flex items-center gap-3">
            <InfoIcon sx={{ color: "#3E2723" }} />
            <span className="flex-1 text-right text-text">حول</span>
            <span className="text-sm text-muted">1.0.0</span>
            <ChevronLeftIcon sx={{ color: "#6B6B6B" }} />
          </button>
        </div>
      </main>
      <button onClick={() => navigate("/")} className="absolute top-4 left-4 text-white text-xs bg-black/30 px-2 py-1 rounded">← الرئيسية</button>
    </div>
  );
}
