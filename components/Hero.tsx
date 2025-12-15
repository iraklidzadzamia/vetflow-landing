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
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight text-balance">
                        Stop missing messages.{" "}
                        <span className="text-teal-600">Book more appointments.</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto text-balance">
                        VetFlow AI replies instantly to pet owners, answers common questions, and
                        books/reschedules appointments — directly inside Instagram, Facebook Messenger,
                        WhatsApp, and your website.
                    </p>

                    {/* Bullet points */}
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                        <div className="flex items-center gap-2 text-slate-700">
                            <svg className="w-5 h-5 text-teal-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm sm:text-base">24/7 replies in English / Russian / Spanish</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-700">
                            <svg className="w-5 h-5 text-teal-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm sm:text-base">Appointment booking with calendar sync</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-700">
                            <svg className="w-5 h-5 text-teal-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm sm:text-base">Escalates for anything it shouldn&apos;t answer</span>
                        </div>
                    </div>

                    {/* CTAs */}
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="#demo"
                            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/25 hover:shadow-xl hover:shadow-teal-600/30"
                        >
                            Get a demo
                            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all"
                        >
                            See how it works
                            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </Link>
                    </div>

                    {/* Trust strip */}
                    <div className="mt-12 pt-8 border-t border-slate-200/60">
                        <p className="text-sm text-slate-500">
                            <svg className="inline-block w-4 h-4 mr-1 text-teal-600 -mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Proven in a real clinic workflow. Used to handle 2,000+ messages.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
