import Link from "next/link";

const steps = [
    {
        number: "1",
        title: "Send us your clinic info",
        description: "Prices, hours, services, location, FAQ. Takes 10 minutes to gather.",
        time: "10 min",
    },
    {
        number: "2",
        title: "We set up everything",
        description: "Connect channels, configure AI, sync Google Calendar. You approve before launch.",
        time: "24 hours",
    },
    {
        number: "3",
        title: "Go live & refine",
        description: "AI starts answering. We monitor and improve based on real conversations.",
        time: "Ongoing",
    },
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                        Live in 24 Hours
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        We do the heavy lifting. You just send your clinic info.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Connection line */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-teal-200 -translate-x-1/2 z-0" />

                        <div className="space-y-8 relative z-10">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Content */}
                                    <div className={`flex-1 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                            <div className={`flex items-center gap-3 mb-3 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                                <h3 className="text-lg font-semibold text-slate-900">
                                                    {step.title}
                                                </h3>
                                                <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full">
                                                    {step.time}
                                                </span>
                                            </div>
                                            <p className="text-slate-600">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step number */}
                                    <div className="hidden md:flex w-14 h-14 bg-teal-600 text-white rounded-full items-center justify-center text-xl font-bold shadow-lg shadow-teal-600/25 flex-shrink-0">
                                        {step.number}
                                    </div>

                                    {/* Empty space for layout */}
                                    <div className="hidden md:block flex-1" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <Link
                        href="#demo"
                        className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/25"
                    >
                        Start Setup Now
                        <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                    <p className="mt-4 text-sm text-slate-500">
                        No technical skills required — we handle everything
                    </p>
                </div>
            </div>
        </section>
    );
}
