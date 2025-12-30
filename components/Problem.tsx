const problems = [
    {
        icon: (
            <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
        ),
        title: "40% of inquiries come after hours",
        description: "Pet owners message at 10pm, weekends, holidays — when your admin is asleep. By the time you reply, they've already booked elsewhere.",
        stat: "40%",
        statLabel: "after-hours inquiries",
    },
    {
        icon: (
            <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "90% of messages are routine",
        description: "The same questions, over and over. Your admin answers them manually — again and again — instead of helping patients.",
        stat: "90%",
        statLabel: "routine messages",
    },
    {
        icon: (
            <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
        title: "85% won't wait for slow replies",
        description: "They'll message your competitor instead. Speed is the difference between a booking and a lost client.",
        stat: "85%",
        statLabel: "leave after slow response",
    },
];

export function Problem() {
    return (
        <section className="py-16 md:py-24 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        The Hidden Cost of "We'll Reply Later"
                    </h2>
                    <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                        Every hour you don't reply, your competitors are booking your clients.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            className="relative p-8 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-red-500/50 transition-colors"
                        >
                            <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-5">
                                {problem.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                {problem.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed mb-4">
                                {problem.description}
                            </p>
                            <div className="pt-4 border-t border-slate-700">
                                <span className="text-2xl font-bold text-red-400">{problem.stat}</span>
                                <span className="text-sm text-slate-500 ml-2">{problem.statLabel}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Speed comparison */}
                <div className="mt-12 max-w-3xl mx-auto">
                    <div className="bg-gradient-to-r from-red-500/10 to-teal-500/10 border border-slate-700 rounded-2xl p-8">
                        <h3 className="text-xl font-bold text-center mb-6">
                            ⚡ Speed Wins Bookings
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <p className="text-slate-300">
                                    <span className="text-red-400 font-semibold">Your competitors</span> take hours to reply. Some never reply at all.
                                </p>
                                <p className="text-slate-300">
                                    <span className="text-teal-400 font-semibold">VetFlow</span> replies in ~20 seconds — while they're asleep.
                                </p>
                                <p className="text-sm text-slate-500">
                                    Data shows: 5-min response vs 30-min = 21x better conversion.
                                </p>
                            </div>
                            <div className="flex flex-col justify-center items-center bg-slate-800/50 rounded-xl p-6">
                                <p className="text-slate-400 text-sm mb-2">VetFlow response time:</p>
                                <p className="text-4xl font-bold text-teal-400">~20 sec</p>
                                <p className="text-slate-500 text-sm mt-2">24/7, including nights & weekends</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
