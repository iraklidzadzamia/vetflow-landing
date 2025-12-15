"use client";

import { useState } from "react";

const faqs = [
    {
        question: "Is this AI, humans, or hybrid?",
        answer: "VetFlow AI is powered by AI that's trained on your clinic's specific information. For complex or sensitive situations, it escalates to your human team. You always have final say — it's a hybrid approach where AI handles routine questions while humans handle exceptions.",
    },
    {
        question: "What if a client asks for medical advice?",
        answer: "The AI never diagnoses, prescribes, or recommends treatments. It answers general questions about your services and hours. For anything medical, it tells the client to call the clinic or book a consultation. This is a hard rule — no exceptions.",
    },
    {
        question: "Can we do after-hours only?",
        answer: "Yes. Many clinics start with after-hours coverage only. The AI replies when your team is off — evenings, weekends, holidays. During business hours, your staff handles messages as usual.",
    },
    {
        question: "How do you prevent double-booking?",
        answer: "We offer three booking modes: Pending (we capture details, you confirm), Slots (book only into predefined availability), and Direct (write into your calendar with controlled access). All modes respect your availability rules to prevent conflicts.",
    },
    {
        question: "What systems do you integrate with?",
        answer: "We integrate with Google Calendar today. For channels: Instagram, Facebook Messenger, WhatsApp (if your policy allows), and website chat. If you use Cornerstone, AVImark, or another practice management system — tell us what you have, we'll confirm compatibility before any pilot.",
    },
    {
        question: "Does it replace my staff?",
        answer: "No. VetFlow AI handles repetitive questions and booking requests so your staff can focus on in-person patient care. Complex inquiries and all medical decisions stay with your team.",
    },
    {
        question: "What if it doesn't know the answer?",
        answer: "If the AI isn't sure about something, it tells the client honestly and suggests they call or email your clinic directly. You set escalation rules — certain topics automatically trigger a handoff to your staff.",
    },
    {
        question: "What languages do you support?",
        answer: "English, Russian, and Spanish. The AI automatically detects the client's language and responds accordingly. If you need additional languages, let us know.",
    },
    {
        question: "How fast can we launch?",
        answer: "Typical setup takes 2–5 days. This includes connecting channels, loading your clinic information, setting up calendar integration, and testing.",
    },
    {
        question: "How do I pause or stop the assistant?",
        answer: "You can request pausing anytime — we disable replies immediately. Pausing means clients get your normal channel experience (no AI replies) until you turn it back on.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                        Frequently asked questions
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Everything you need to know about VetFlow AI.
                    </p>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl border border-slate-200 overflow-hidden"
                        >
                            <button
                                type="button"
                                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                aria-expanded={openIndex === index}
                            >
                                <span className="font-semibold text-slate-900">{faq.question}</span>
                                <svg
                                    className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`transition-all duration-200 overflow-hidden ${openIndex === index ? "max-h-96" : "max-h-0"
                                    }`}
                            >
                                <p className="px-6 pb-5 text-slate-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
