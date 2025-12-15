// Site configuration constants
export const siteConfig = {
  name: "VetFlow AI",
  tagline: "AI receptionist for veterinary clinics — 24/7 replies + appointment booking",
  description: "VetFlow AI replies instantly to pet owners, answers common questions, and books/reschedules appointments — directly inside Instagram, Facebook Messenger, WhatsApp, and your website.",
  url: "https://vetflow.ai",
  email: "hello@vetflow.ai",
  
  socialLinks: {
    instagram: "",
    facebook: "",
  },
  
  supportedChannels: [
    "Instagram",
    "Facebook Messenger", 
    "WhatsApp",
    "Website chat"
  ],
  
  supportedLanguages: ["English", "Russian", "Spanish"],
  
  bookingSystems: [
    { value: "none", label: "No booking system yet" },
    { value: "google_calendar", label: "Google Calendar" },
    { value: "acuity", label: "Acuity Scheduling" },
    { value: "calendly", label: "Calendly" },
    { value: "vetspire", label: "VetSpire" },
    { value: "evetpractice", label: "eVetPractice" },
    { value: "cornerstone", label: "Cornerstone" },
    { value: "avimark", label: "AVImark" },
    { value: "other", label: "Other (please specify)" },
  ],
} as const;

export type BookingSystem = typeof siteConfig.bookingSystems[number]["value"];
