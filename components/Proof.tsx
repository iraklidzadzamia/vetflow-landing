export function Proof() {
    return (
        <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                        Built from real clinic experience
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        VetFlow AI isn&apos;t theoretical — it&apos;s based on real clinic workflows and anonymized conversation patterns.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Before */}
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 relative">
                            <div className="absolute -top-3 left-6 px-3 py-1 bg-slate-200 text-slate-600 text-sm font-medium rounded-full">
                                Before
                            </div>
                            <ul className="space-y-4 mt-4">
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    <span className="text-slate-600">Messages pile up overnight and on weekends</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    <span className="text-slate-600">Staff spend hours on repetitive questions</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    <span className="text-slate-600">Potential clients book elsewhere while waiting</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    <span className="text-slate-600">No visibility into what clients actually ask</span>
                                </li>
                            </ul>
                        </div>

                        {/* After */}
                        <div className="bg-teal-600 p-8 rounded-2xl relative">
                            <div className="absolute -top-3 left-6 px-3 py-1 bg-teal-500 text-white text-sm font-medium rounded-full">
                                After
                            </div>
                            <ul className="space-y-4 mt-4">
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-teal-200 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-white">Instant replies 24/7 in multiple languages</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-teal-200 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-white">Staff focus on in-clinic patients</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-teal-200 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-white">More consultations booked automatically</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-teal-200 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-white">Weekly insights show real client needs</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Stat */}
                    <div className="mt-10 text-center">
                        <div className="inline-flex flex-col items-center gap-2 px-6 py-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                            <div className="flex items-center gap-3">
                                <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                <span className="font-semibold text-slate-900">2,000+ messages handled</span>
                                <span className="text-slate-500">in a real clinic (last 60 days)</span>
                            </div>
                            <p className="text-sm text-slate-500 mt-2">
                                We&apos;ll track these KPIs in your 14-day pilot: response time, booking requests, appointments booked, escalation rate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
