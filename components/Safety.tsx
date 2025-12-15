const safetyPoints = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
            </svg>
        ),
        title: "No medical advice",
        description: "The AI never diagnoses, prescribes, or recommends treatments. It answers general questions and books appointments — medical decisions stay with your vets.",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
        title: "Escalation built in",
        description: "For complex or sensitive questions, the AI directs clients to call or email your clinic. You set the escalation rules — it follows them.",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        ),
        title: "Privacy & data handling",
        description: "We store conversation logs for QA & reporting (you can request deletion). We minimize data: only what's needed to answer + book. Your data is not used to train public models, and we don't sell or share it.",
    },
];

const escalationTriggers = [
    "Medical advice / urgent symptoms",
    "Billing or refund disputes",
    "Aggressive / abusive messages",
    "Anything outside your published policies",
    "Any uncertainty about booking details",
];

export function Safety() {
    return (
        <section id="safety" className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                        Safety first. Always.
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        VetFlow AI is designed to support your clinic — not replace medical judgment.
                    </p>
                </div>

                {/* Emergency banner */}
                <div className="mb-10 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3 max-w-3xl mx-auto">
                    <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>
                        <p className="font-semibold text-amber-800">No medical advice.</p>
                        <p className="text-sm text-amber-700 mt-1">
                            For symptoms, urgent cases, or anything unclear — we escalate to your team.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {safetyPoints.map((point, index) => (
                        <div
                            key={index}
                            className="p-6 bg-slate-50 rounded-2xl border border-slate-100"
                        >
                            <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-4">
                                {point.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">
                                {point.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Escalation triggers */}
                <div className="mt-12 max-w-3xl mx-auto">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4 text-center">
                        Escalation triggers (AI hands off to your team)
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                        {escalationTriggers.map((trigger, index) => (
                            <div key={index} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                                <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                <span className="text-slate-700 text-sm">{trigger}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
