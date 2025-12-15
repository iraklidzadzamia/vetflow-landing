const problems = [
    {
        icon: (
            <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
        ),
        title: "After-hours messages pile up",
        description: "Pet owners DM at 10pm, on weekends, during holidays. By the time you reply, they've already booked elsewhere — or worse, didn't get the care they needed.",
    },
    {
        icon: (
            <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
        title: "Same questions, over and over",
        description: "Your staff spends hours answering the same DMs: hours, pricing, directions. Meanwhile, appointment requests stack up unanswered.",
    },
    {
        icon: (
            <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
        title: "No-shows create schedule chaos",
        description: "Clients forget appointments or can't reschedule easily. Empty slots mean lost revenue. Overbooking means stressed staff and unhappy pets.",
    },
];

export function Problem() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                        Sound familiar?
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        These problems cost veterinary clinics time, money, and the ability to help more animals.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            className="relative p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-teal-200 transition-colors"
                        >
                            <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-5">
                                {problem.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                {problem.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {problem.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Closing line */}
                <p className="mt-10 text-center text-slate-600 font-medium">
                    Every missed after-hours DM is a lost appointment — and often a negative review.
                </p>
            </div>
        </section>
    );
}
