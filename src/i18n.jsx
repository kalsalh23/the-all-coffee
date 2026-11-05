import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext({
  lang: "ar",
  dir: "rtl",
  isAr: true,
  setLang: () => {},
  toggleLang: () => {},
  t: (ar, en) => ar,
  numLocale: "en-US",
});

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      return localStorage.getItem("lang") === "en" ? "en" : "ar";
    } catch {
      return "ar";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch {}
  }, [lang]);

  const value = useMemo(() => {
    const isAr = lang === "ar";
    return {
      lang,
      dir: isAr ? "rtl" : "ltr",
      isAr,
      setLang: (next) => setLangState(next === "en" ? "en" : "ar"),
      toggleLang: () => setLangState((p) => (p === "ar" ? "en" : "ar")),
      t: (ar, en) => (isAr ? ar : en),
      numLocale: "en-US",
    };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return useContext(LanguageContext);
}

export const formatNumber = (value, locale = "en-US") => {
  if (typeof value === "number") return value.toLocaleString(locale);
  return value;
};
