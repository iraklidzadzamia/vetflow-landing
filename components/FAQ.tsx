"use client";

import { useState } from "react";

const faqs = [
    {
        question: "How fast can we go live?",
        answer: "24 hours after you send us your clinic info (prices, hours, services, location). We handle all the technical setup.",
    },
    {
        question: "What if the AI gives a wrong answer?",
        answer: "That's what the 14-day trial is for. We monitor conversations and refine the AI until it's hitting 85%+ accuracy on routine questions. If we can't get there, you don't pay.",
    },
    {
        question: "Will it give medical advice?",
        answer: "Never. The AI answers questions about prices, hours, location, and booking. For anything medical, it tells clients to call or book a consultation. This is a hard rule — no exceptions.",
    },
    {
        question: "Can I take over a conversation?",
        answer: "Yes. Your admin clicks 'Pause AI' anytime and the conversation goes to them. Perfect for complex cases or VIP clients. Resume AI when done.",
    },
    {
        question: "What channels does it work with?",
        answer: "WhatsApp, Instagram DMs, and Facebook Messenger. $600/mo for WhatsApp only, $800/mo for all three. We don't do phone calls or SMS.",
    },
    {
        question: "What about double-bookings?",
        answer: "Impossible. We check Google Calendar in real-time before booking any appointment. If a slot is taken, AI offers the next available time.",
    },
    {
        question: "What languages?",
        answer: "English, Russian, and Spanish. The AI detects the client's language automatically.",
    },
    {
        question: "Can I cancel anytime?",
        answer: "Yes. No contracts, no lock-in. Cancel with 30 days notice, we'll help migrate if needed.",
    },
    {
        question: "What's the catch?",
        answer: "No catch. We make money when you stay subscribed. If the AI doesn't help you, you'll cancel, so we're motivated to make it work. That's why we offer the 85% accuracy guarantee.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-16 md:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                        Questions? Answers.
                    </h2>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden"
                        >
                            <button
                                type="button"
                                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-100 transition-colors"
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
