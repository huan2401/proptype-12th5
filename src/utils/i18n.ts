import { DEFAULT_LANG, REGIONS, STORAGE_LANG_KEY } from "@/constants/i18n";

export const getCurrentLanguage = () => {
  const language = localStorage.getItem(STORAGE_LANG_KEY) || REGIONS[DEFAULT_LANG].key;
  return language;
};

export const changeLanguage = (language: string) => {
  if (language === getCurrentLanguage()) return;
  localStorage.setItem(STORAGE_LANG_KEY, language);
  window.location.reload();
};