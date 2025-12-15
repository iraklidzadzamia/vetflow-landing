const steps = [
    {
        number: "1",
        title: "We connect your channels",
        description: "Link your Instagram, Facebook Messenger, WhatsApp, or website chat. We handle the technical setup — you just approve the connections.",
    },
    {
        number: "2",
        title: "We load your clinic info",
        description: "Share your services, prices, hours, and policies. You review and approve everything before it goes live. Nothing gets published without your sign-off.",
    },
    {
        number: "3",
        title: "We connect your calendar",
        description: "Sync with Google Calendar or your existing booking system. The AI books real appointments into your schedule, with availability you control.",
    },
    {
        number: "4",
        title: "You go live — and we refine",
        description: "Launch to clients. We monitor real conversations and refine the AI based on actual questions. Your assistant gets smarter every week.",
    },
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                        How it works
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        From first message to live in days, not months.
                    </p>
                </div>

                <div className="relative">
                    {/* Connection line for desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-teal-100 -translate-y-1/2 z-0" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="bg-white lg:bg-transparent">
                                    {/* Step number */}
                                    <div className="w-14 h-14 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg shadow-teal-600/25">
                                        {step.number}
                                    </div>

                                    <h3 className="text-lg font-semibold text-slate-900 text-center mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm text-center leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Timeline note */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-50 text-teal-700 rounded-full text-sm font-medium">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Typical setup: 2–5 days
                    </div>
                </div>
            </div>
        </section>
    );
}
