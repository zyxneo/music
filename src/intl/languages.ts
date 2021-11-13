// Ensure that land string can be matched with RtlLangs
export const getLangCode = (lang: string) =>
    lang.replace(/([\-\_].+)/, "").toLowerCase();

export const languageName = {
    en: "English",
    hu: "Magyar", // Hungarian
} as const;
