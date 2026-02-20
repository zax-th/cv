import { writable, derived } from "svelte/store";
import { translations } from "../data/translations.js";

// Default language is English
export const locale = writable("en");

// Helper to toggle language
export const toggleLocale = () => {
  locale.update((l) => (l === "en" ? "th" : "en"));
};

// Derived store to get the translation function
export const t = derived(locale, ($locale) => (key) => {
  const keys = key.split(".");
  let value = translations[$locale];

  for (const k of keys) {
    if (value && value[k] !== undefined) {
      value = value[k];
    } else {
      // Fallback to English if translation is missing
      let fallback = translations["en"];
      for (const fallbackKey of keys) {
        if (fallback && fallback[fallbackKey] !== undefined) {
          fallback = fallback[fallbackKey];
        } else {
          return key; // Return the key itself if not found even in fallback
        }
      }
      return fallback;
    }
  }
  return value;
});
