export function BookingModes() {
    return (
        <section id="booking-modes" className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                        Two modes — you choose the level of automation
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Start with Answer-only. Upgrade to Direct booking when you&apos;re ready.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Answer-only */}
                    <div className="relative p-8 bg-slate-50 rounded-2xl border border-slate-200">
                        <div className="absolute -top-3 left-6 px-3 py-1 bg-slate-600 text-white text-sm font-medium rounded-full">
                            Start here
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 mt-2">
                            Answer-only
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-slate-600">
                                    We answer FAQs: hours, pricing ranges (if provided), services, location, policies
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-slate-600">
                                    No appointments created
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-slate-600">
                                    Perfect for after-hours overflow
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Direct booking */}
                    <div className="relative p-8 bg-teal-600 rounded-2xl text-white">
                        <div className="absolute -top-3 left-6 px-3 py-1 bg-teal-500 text-white text-sm font-medium rounded-full">
                            Full automation
                        </div>
                        <h3 className="text-xl font-bold mb-4 mt-2">
                            Direct booking (Google Calendar)
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-teal-200 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-teal-50">
                                    We check availability before creating any appointment
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-teal-200 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-teal-50">
                                    Creates / reschedules / cancels appointments in Google Calendar
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-teal-200 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-teal-50">
                                    Prevents double booking by design
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Pause anytime block */}
                <div className="mt-12 max-w-2xl mx-auto text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-4 bg-amber-50 border border-amber-200 rounded-xl">
                        <svg className="w-6 h-6 text-amber-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="text-left">
                            <p className="font-semibold text-amber-800">Pause anytime</p>
                            <p className="text-sm text-amber-700">
                                Need full human control during busy hours or emergencies? Pause the assistant instantly. Messages route to your staff while paused — then resume when ready.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
