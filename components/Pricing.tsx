import Link from "next/link";

const plans = [
    {
        name: "WhatsApp Only",
        price: "$600",
        period: "/month",
        description: "Perfect for clinics where clients mainly use WhatsApp",
        features: [
            "24/7 AI responses on WhatsApp",
            "Google Calendar integration",
            "Multi-language (EN/RU/ES)",
            "Pause AI feature",
            "Conversation logs",
            "24-hour setup",
        ],
        cta: "Get Started",
        highlighted: false,
    },
    {
        name: "Multi-Channel",
        price: "$800",
        period: "/month",
        description: "For clinics with clients on multiple platforms",
        badge: "Most Popular",
        features: [
            "Everything in WhatsApp plan",
            "+ Instagram DMs",
            "+ Facebook Messenger",
            "Unified conversation history",
            "Priority support",
            "Weekly insights report",
        ],
        cta: "Get Started",
        highlighted: true,
    },
];

export function Pricing() {
    return (
        <section id="pricing" className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        One appointment covers the monthly cost. Everything after that is profit.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-3xl border-2 ${plan.highlighted
                                ? "bg-white border-teal-500 shadow-xl shadow-teal-500/10"
                                : "bg-white border-slate-200"
                                }`}
                        >
                            {plan.badge && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-teal-500 text-white text-sm font-medium rounded-full">
                                    {plan.badge}
                                </div>
                            )}

                            <div className="text-center mb-6">
                                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                                <p className="text-slate-500 text-sm mt-1">{plan.description}</p>
                            </div>

                            <div className="text-center mb-8">
                                <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                                <span className="text-slate-500">{plan.period}</span>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start gap-3">
                                        <svg
                                            className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-slate-600">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="#demo"
                                className={`block w-full py-4 px-4 text-center font-semibold rounded-full transition-colors ${plan.highlighted
                                    ? "bg-teal-600 text-white hover:bg-teal-700"
                                    : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                                    }`}
                            >
                                {plan.cta}
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Value props */}
                <div className="mt-12 max-w-3xl mx-auto">
                    <div className="grid sm:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="text-2xl mb-2">💰</div>
                            <p className="font-semibold text-slate-900">Less than $20/day</p>
                            <p className="text-sm text-slate-500">For 24/7 coverage</p>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl mb-2">⚡</div>
                            <p className="font-semibold text-slate-900">~20 sec response</p>
                            <p className="text-sm text-slate-500">While competitors sleep</p>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl mb-2">🌙</div>
                            <p className="font-semibold text-slate-900">40% after-hours</p>
                            <p className="text-sm text-slate-500">Inquiries you'd otherwise miss</p>
                        </div>
                    </div>
                </div>

                {/* Simple ROI logic */}
                <div className="mt-12 max-w-2xl mx-auto">
                    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
                        <h3 className="text-lg font-semibold text-slate-900 mb-4 text-center">
                            📊 Simple Math
                        </h3>
                        <div className="text-center space-y-4">
                            <p className="text-slate-600">
                                40% of inquiries come when you're closed.
                            </p>
                            <p className="text-slate-600">
                                VetFlow replies in ~20 seconds — while your competitors are asleep.
                            </p>
                            <p className="text-slate-600">
                                If a few of those become bookings each month...
                            </p>
                            <p className="text-lg font-semibold text-teal-600">
                                VetFlow pays for itself.
                            </p>
                        </div>
                    </div>
                </div>

                {/* No hidden fees */}
                <p className="mt-8 text-center text-slate-500 text-sm">
                    No setup fees • No contracts • Cancel anytime • 14-day trial included
                </p>
            </div>
        </section>
    );
}
