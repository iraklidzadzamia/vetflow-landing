import Image from "next/image";

export function Proof() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full text-sm text-teal-700 mb-4">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Real Case Study</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                        How BioNika Vet Clinic Freed Their Admin
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Tbilisi, Georgia — Running for several months
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* Case study card */}
                    <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        {/* Header */}
                        <div className="bg-slate-900 text-white p-6 sm:p-8">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold tracking-tight">🏥 BioNika Vet Clinic</h3>
                                    <p className="text-slate-400 mt-1">Tbilisi, Georgia</p>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-teal-500/20 rounded-full">
                                    <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                                    <span className="text-teal-400 text-sm font-medium">Live for several months</span>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
                            <div className="p-6 sm:p-8 text-center">
                                <p className="text-4xl font-bold text-teal-600 tracking-tight">3,000+</p>
                                <p className="text-slate-600 mt-1">Messages handled</p>
                            </div>
                            <div className="p-6 sm:p-8 text-center">
                                <p className="text-4xl font-bold text-teal-600 tracking-tight">90%</p>
                                <p className="text-slate-600 mt-1">Routine messages</p>
                            </div>
                            <div className="p-6 sm:p-8 text-center">
                                <p className="text-4xl font-bold text-teal-600 tracking-tight">24/7</p>
                                <p className="text-slate-600 mt-1">Coverage</p>
                            </div>
                        </div>

                        {/* Story */}
                        <div className="p-6 sm:p-8 border-t border-slate-200">
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* The Challenge */}
                                <div>
                                    <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2 tracking-tight">
                                        <span className="text-red-500">❌</span> The Challenge
                                    </h4>
                                    <ul className="space-y-3 text-slate-600">
                                        <li className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            <span>Admin overwhelmed answering same questions</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            <span>Routine questions — 50+ times per week</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            <span>Messages pile up after hours</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            <span>No time for in-clinic patients</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* The Result */}
                                <div>
                                    <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2 tracking-tight">
                                        <span className="text-teal-500">✅</span> The Result
                                    </h4>
                                    <ul className="space-y-3 text-slate-600">
                                        <li className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>AI handles 90% of messages automatically</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Handles clinic + grooming — <strong>separate calendars</strong> (zero conflicts)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Admin only steps in for complex cases</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>24/7 coverage — nights, weekends, holidays</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Quote */}
                        <div className="bg-teal-50 p-6 sm:p-8 border-t border-teal-100">
                            <blockquote className="text-lg text-slate-700 italic text-center max-w-2xl mx-auto">
                                "The bot answers more beautifully than we ever did — and it never gets tired of explaining our prices. Our admin now focuses on the pets and people in front of her."
                            </blockquote>
                            <p className="text-center text-slate-500 mt-4">— BioNika Clinic Team</p>
                        </div>
                    </div>

                    {/* Demo GIF Section */}
                    <div className="mt-12">
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-semibold text-slate-900 tracking-tight">
                                📱 See It In Action
                            </h3>
                            <p className="text-slate-600 mt-2">
                                Client books appointment → Instantly appears in Google Calendar
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 hover:shadow-3xl transition-shadow duration-300">
                                <Image
                                    src="/bot-demo.gif"
                                    alt="VetFlow AI booking an appointment and syncing to Google Calendar"
                                    width={400}
                                    height={867}
                                    className="w-auto max-w-full h-auto max-h-[600px]"
                                    unoptimized
                                />
                            </div>
                        </div>
                    </div>

                    {/* Key insight */}
                    <div className="mt-12 p-6 sm:p-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-100">
                        <div className="flex items-start gap-4 max-w-2xl mx-auto">
                            <div className="text-2xl">💡</div>
                            <div>
                                <p className="font-semibold text-slate-900 mb-1 tracking-tight">The Key Insight</p>
                                <p className="text-slate-600">
                                    90% of messages are routine questions about prices, location, and availability.
                                    Your admin doesn't need to answer these — AI can.
                                    <strong> Free your humans for human problems.</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
