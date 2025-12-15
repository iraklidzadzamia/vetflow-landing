export function BookingModes() {
    const modes = [
        {
            name: "Pending",
            description: "We capture details → your team confirms and books.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
            ),
        },
        {
            name: "Slots",
            description: "We book only into predefined time slots or a shared calendar.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            name: "Direct",
            description: "If supported, we write bookings into your scheduling system with limited permissions.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="booking-modes" className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                        3 booking modes — you choose the level of access
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Start with Pending mode and upgrade when you&apos;re ready.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {modes.map((mode, index) => (
                        <div
                            key={index}
                            className="relative p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-teal-200 transition-colors text-center"
                        >
                            <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mx-auto mb-5">
                                {mode.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {mode.name}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {mode.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Anchor sentence */}
                <div className="mt-10 text-center">
                    <p className="inline-flex items-center gap-2 text-slate-700 font-medium bg-teal-50 px-5 py-3 rounded-full">
                        <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        No double-booking: your rules + controlled availability.
                    </p>
                </div>
            </div>
        </section>
    );
}
