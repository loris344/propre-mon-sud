export const trackMetaLead = (contentName: string) => {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", "Lead", { content_name: contentName });
};
