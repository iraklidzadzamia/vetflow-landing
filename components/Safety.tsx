const safetyPoints = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
        ),
        title: "Not for emergencies",
        description: "If a client describes an emergency, the AI immediately tells them to call the clinic or go to an emergency vet. It never delays urgent care.",
    },
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
        title: "Your data stays yours",
        description: "We only use your clinic-provided info to answer clients. Conversations are yours. We don't sell data or use it for other purposes.",
    },
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
                        <p className="font-semibold text-amber-800">Not a replacement for emergency care</p>
                        <p className="text-sm text-amber-700 mt-1">
                            If you suspect a pet emergency, call your clinic directly or visit an emergency veterinary hospital immediately.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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

                {/* Privacy section */}
                <div id="privacy" className="mt-16 max-w-3xl mx-auto text-center scroll-mt-24">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">
                        Privacy & Data Handling
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                        Your clinic information is used only to answer client questions and book appointments.
                        We do not share, sell, or use your data for training external models. Client conversations
                        remain confidential and are accessible only to you. We follow industry standard security
                        practices to protect all data in transit and at rest.
                    </p>
                </div>
            </div>
        </section>
    );
}
