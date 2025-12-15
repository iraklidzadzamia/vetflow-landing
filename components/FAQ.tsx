"use client";

import { useState } from "react";

const faqs = [
    {
        question: "Does it replace my staff?",
        answer: "No. VetFlow AI handles repetitive questions and booking requests so your staff can focus on in-person patient care. It's a support tool, not a replacement. Complex inquiries and all medical decisions stay with your team.",
    },
    {
        question: "Will it give medical advice?",
        answer: "Never. The AI is strictly configured to avoid diagnosing, prescribing, or recommending treatments. It answers general questions about your services and hours, and books appointments. For anything medical, it directs clients to call the clinic or book a consultation.",
    },
    {
        question: "What if it doesn't know the answer?",
        answer: "If the AI isn't sure about something, it tells the client honestly and suggests they call or email your clinic directly. You set escalation rules — certain topics can automatically trigger a handoff to your staff.",
    },
    {
        question: "How do bookings work?",
        answer: "The AI connects to your calendar (Google Calendar or compatible booking system) and books real appointments based on your availability. Clients can also reschedule or cancel through the same channels, reducing no-shows.",
    },
    {
        question: "Do you support my booking software?",
        answer: "We integrate with Google Calendar and common veterinary practice management systems. If you use something else, reach out in the demo form — we'll confirm compatibility and work on a solution if needed.",
    },
    {
        question: "Can I review the clinic info it uses?",
        answer: "Absolutely. Before going live, you review and approve all information the AI uses — services, pricing, hours, policies, and FAQs. You can update this content anytime.",
    },
    {
        question: "What languages do you support?",
        answer: "Currently English, Russian, and Spanish. The AI automatically detects the client's language and responds accordingly. If you need additional languages, let us know — we're expanding support.",
    },
    {
        question: "How fast can we launch?",
        answer: "Typical setup takes 2–5 days. This includes connecting channels, loading your clinic information, setting up calendar integration, and testing. Larger or more complex setups may take a bit longer.",
    },
    {
        question: "What happens if there's an emergency?",
        answer: "The AI recognizes emergency keywords and immediately tells the client to call your clinic or go to an emergency veterinary hospital. It never delays urgent care by trying to handle emergencies.",
    },
    {
        question: "How do I pause or stop the assistant?",
        answer: "You have full control. You can pause the AI anytime through your dashboard. Pausing means clients get your normal channel experience (no AI replies) until you turn it back on.",
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
