import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import DriverLayout from "../../layouts/DriverLayout";
import { useLang } from "../../i18n";

export default function DriverEarningsScreen() {
  const navigate = useNavigate();
  const { isAr, numLocale } = useLang();
  const days = isAr
    ? [
        { day: "أحد", amount: 45000 },
        { day: "اثنين", amount: 38000 },
        { day: "ثلاثاء", amount: 52000 },
        { day: "أربعاء", amount: 41000 },
        { day: "خميس", amount: 48000 },
        { day: "جمعة", amount: 35000 },
        { day: "سبت", amount: 45000 },
      ]
    : [
        { day: "Sun", amount: 45000 },
        { day: "Mon", amount: 38000 },
        { day: "Tue", amount: 52000 },
        { day: "Wed", amount: 41000 },
        { day: "Thu", amount: 48000 },
        { day: "Fri", amount: 35000 },
        { day: "Sat", amount: 45000 },
      ];
  const maxAmount = Math.max(...days.map((d) => d.amount));
  const totalWeek = days.reduce((sum, d) => sum + d.amount, 0);
  const commissionRate = 20;
  const appCommission = Math.round(totalWeek * (commissionRate / 100));
  const netEarnings = totalWeek - appCommission;
  const netPercent = totalWeek ? Math.round((netEarnings / totalWeek) * 100) : 0;
  const n = (v) => v.toLocaleString(numLocale);

  return (
    <DriverLayout active="earnings">
      <header className="bg-gradient-to-br from-primary via-[#4E342E] to-[#5D4037] px-4 pt-4 pb-6">
        <div className="flex items-center gap-2 mb-2">
          <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-white/10 backdrop-blur-sm">
            <ArrowBackIcon sx={{ color: "white" }} />
          </button>
          <div className="flex-1 text-center">
            <h1 className="text-lg font-bold text-white">{isAr ? "الأرباح" : "Earnings"}</h1>
          </div>
          <div className="w-9" />
        </div>
        <p className="text-center text-white/70 text-sm">{isAr ? "ملخص أرباحك وعمولات التطبيق" : "Your earnings and app commission summary"}</p>
      </header>
      <main className="flex-1 overflow-auto -mt-2">
        <div className="bg-[#f7f7f7] rounded-t-3xl pt-4 px-4 pb-4 space-y-4">
          <div className="bg-gradient-to-br from-[#FFFCF6] to-secondary rounded-3xl p-4 shadow-sm border border-accent/20">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 mb-2">
                  <span className="text-[11px] font-medium text-primary">{isAr ? "صافي بعد العمولة" : "Net after commission"}</span>
                </div>
                <p className="text-sm text-muted mb-1">{isAr ? "صافي الأرباح" : "Net earnings"}</p>
                <div className="flex items-baseline gap-1.5">
                  <p className="text-3xl font-bold text-primary">{n(netEarnings)}</p>
                  <span className="text-xs text-muted">{isAr ? "ريال" : "SAR"}</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center border border-accent/25">
                <AccountBalanceWalletIcon sx={{ fontSize: 24, color: "#C89B3C" }} />
              </div>
            </div>

            <div className="mt-4 border-t border-dashed border-primary/15 pt-3">
              <div className="flex items-center justify-between text-[11px] text-muted mb-2">
                <span>{isAr ? "توزيع الأسبوع" : "Week breakdown"}</span>
                <span className="text-accent font-semibold">{netPercent}% {isAr ? "صافي" : "net"}</span>
              </div>
              <div className="h-3 w-full rounded-full bg-primary/10 overflow-hidden flex">
                <div className="h-full bg-accent" style={{ width: `${netPercent}%` }} />
                <div className="h-full bg-danger/70" style={{ width: `${100 - netPercent}%` }} />
              </div>
              <div className="mt-2 grid grid-cols-3 gap-2 text-[11px]">
                <div className="flex items-center gap-1.5 text-muted">
                  <span className="w-2 h-2 rounded-full bg-primary/40" />
                  <span>{isAr ? "إجمالي" : "Total"} {n(totalWeek)}</span>
                </div>
                <div className="flex items-center gap-1.5 text-muted">
                  <span className="w-2 h-2 rounded-full bg-danger/70" />
                  <span>{isAr ? "عمولة" : "Commission"} {n(appCommission)}</span>
                </div>
                <div className="flex items-center gap-1.5 text-accent font-medium">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span>{isAr ? "صافي" : "Net"} {n(netEarnings)}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
              <p className="text-xs text-muted mb-1">{isAr ? "إجمالي الأسبوع" : "Week total"}</p>
              <p className="text-lg font-bold text-text">{n(totalWeek)}</p>
            </div>
            <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
              <p className="text-xs text-muted mb-1">{isAr ? `عمولة التطبيق ${commissionRate}%` : `App commission ${commissionRate}%`}</p>
              <p className="text-lg font-bold text-danger">-{n(appCommission)}</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <h3 className="text-text font-semibold mb-3">{isAr ? "تفصيل الأسبوع" : "Weekly breakdown"}</h3>
            <div className="grid grid-cols-4 gap-2">
              {days.map((d) => {
                const isTop = d.amount === maxAmount;
                return (
                  <div key={d.day} className={`rounded-xl p-2 text-center border ${isTop ? "bg-accent/10 border-accent/30" : "bg-gray-50 border-gray-100"}`}>
                    <p className="text-[11px] text-muted mb-1">{d.day}</p>
                    <p className={`text-sm font-bold ${isTop ? "text-accent" : "text-text"}`}>{n(d.amount)}</p>
                    <p className="text-[10px] text-muted">{isAr ? "ريال" : "SAR"}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </DriverLayout>
  );
}
