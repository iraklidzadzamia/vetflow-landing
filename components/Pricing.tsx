import Link from "next/link";

const plans = [
    {
        name: "Starter",
        description: "For a single clinic location",
        features: [
            "1 clinic location",
            "Instagram + Facebook Messenger",
            "Answer-only mode",
            "English language support",
            "Email support",
        ],
        cta: "Request pilot",
        highlighted: false,
    },
    {
        name: "Pro",
        description: "For multi-location or high-volume clinics",
        features: [
            "Multiple locations",
            "All channels: Instagram, FB, WhatsApp, Telegram",
            "Direct booking (Google Calendar)",
            "English + Russian + Spanish",
            "Priority support",
            "Weekly insights report",
        ],
        cta: "Request pilot",
        highlighted: true,
    },
    {
        name: "Custom",
        description: "For enterprise or special requirements",
        features: [
            "Unlimited locations",
            "Custom integrations",
            "Direct booking + custom rules",
            "Dedicated onboarding",
            "SLA guarantees",
            "Custom improvement and refinement",
        ],
        cta: "Contact us",
        highlighted: false,
    },
];

const pricingFactors = [
    "Message volume",
    "Mode (Answer-only / Direct)",
    "Number of channels",
    "Languages required",
];

export function Pricing() {
    return (
        <section id="pricing" className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                        Simple pricing, based on volume &amp; channels
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        14-day pilot available. We&apos;ll confirm a quote before you commit.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-2xl border ${plan.highlighted
                                ? "bg-teal-600 border-teal-600 text-white"
                                : "bg-white border-slate-200"
                                }`}
                        >
                            {plan.highlighted && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-teal-500 text-white text-xs font-medium rounded-full">
                                    Most Popular
                                </div>
                            )}

                            <h3 className={`text-xl font-bold ${plan.highlighted ? "text-white" : "text-slate-900"}`}>
                                {plan.name}
                            </h3>
                            <p className={`mt-2 text-sm ${plan.highlighted ? "text-teal-100" : "text-slate-600"}`}>
                                {plan.description}
                            </p>

                            <div className="mt-6">
                                <span className={`text-2xl font-bold ${plan.highlighted ? "text-white" : "text-slate-900"}`}>
                                    14-day pilot
                                </span>
                            </div>

                            <ul className="mt-6 space-y-3">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start gap-2">
                                        <svg
                                            className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? "text-teal-200" : "text-teal-600"}`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className={`text-sm ${plan.highlighted ? "text-teal-50" : "text-slate-600"}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="#demo"
                                className={`mt-8 block w-full py-3 px-4 text-center font-semibold rounded-full transition-colors ${plan.highlighted
                                    ? "bg-white text-teal-600 hover:bg-teal-50"
                                    : "bg-teal-600 text-white hover:bg-teal-700"
                                    }`}
                            >
                                {plan.cta}
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Pricing factors */}
                <div className="mt-12 max-w-2xl mx-auto">
                    <p className="text-center text-sm text-slate-500 mb-4">
                        Pricing depends on:
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {pricingFactors.map((factor, index) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 bg-slate-100 text-slate-600 text-sm rounded-full"
                            >
                                {factor}
                            </span>
                        ))}
                    </div>
                    <p className="text-center text-sm text-slate-500 mt-6">
                        After you submit the form, we&apos;ll confirm fit and send a quote within 24 hours.
                    </p>
                </div>
            </div>
        </section>
    );
}
