import Link from "next/link";

export function Hero() {
    return (
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 gradient-bg overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-100 rounded-full opacity-50 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-50 rounded-full opacity-50 blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Headline */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight text-balance leading-tight">
                        24/7 replies + appointment booking for{" "}
                        <span className="text-teal-600">USA vet clinics</span>
                        {" "}— without double bookings
                    </h1>

                    {/* Subheadline */}
                    <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
                        Choose: <strong>Answer-only</strong> (no bookings) or <strong>Direct booking</strong> into your Google Calendar.
                    </p>
                    <p className="mt-2 text-base text-slate-500 max-w-3xl mx-auto">
                        If a message is unclear or needs staff attention — it escalates to your team.
                    </p>
                    <p className="mt-2 text-base text-amber-600 font-medium">
                        No medical advice.
                    </p>

                    {/* Bullet points - 2 modes */}
                    <div className="mt-8 flex flex-col items-start max-w-xl mx-auto gap-3">
                        <div className="flex items-start gap-3 text-slate-700">
                            <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm sm:text-base text-left">
                                <strong>Answer-only mode:</strong> instant replies from your clinic info (zero calendar access)
                            </span>
                        </div>
                        <div className="flex items-start gap-3 text-slate-700">
                            <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm sm:text-base text-left">
                                <strong>Direct booking mode:</strong> checks availability → creates appointments in Google Calendar
                            </span>
                        </div>
                        <div className="flex items-start gap-3 text-slate-700">
                            <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm sm:text-base text-left">
                                <strong>Conversation logs + insights:</strong> search and export what clients asked (for reporting &amp; improvement)
                            </span>
                        </div>
                    </div>

                    {/* CTAs */}
                    <div className="mt-10 flex flex-col items-center justify-center">
                        <Link
                            href="#demo"
                            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/25 hover:shadow-xl hover:shadow-teal-600/30"
                        >
                            Get a demo
                            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <p className="mt-3 text-sm text-slate-500">
                            14-day pilot available after the demo.
                        </p>
                    </div>

                    {/* Micro-trust line */}
                    <p className="mt-4 text-sm text-slate-500">
                        Start with Answer-only (no calendar access) → upgrade to Direct booking when ready.
                    </p>

                    {/* Trust strip */}
                    <div className="mt-10 pt-8 border-t border-slate-200/60">
                        <p className="text-sm text-slate-500">
                            <svg className="inline-block w-4 h-4 mr-1 text-teal-600 -mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Live in a real clinic: 2,000+ messages handled in the last 60 days. Results vary by clinic.
                        </p>
                        <p className="text-xs text-slate-400 mt-2">
                            KPIs we track: response time, booking requests, confirmed appointments, escalation rate.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
