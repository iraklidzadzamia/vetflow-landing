import { LeadForm } from "./LeadForm";
import { siteConfig } from "@/lib/config";

export function FinalCTA() {
    return (
        <section id="demo" className="py-16 md:py-24 bg-white scroll-mt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Urgency badge */}
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full">
                            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                            <span className="text-amber-700 text-sm font-medium">
                                January: 3 spots remaining
                            </span>
                        </div>
                    </div>

                    <div className="text-center mb-10">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                            Get Started in 24 Hours
                        </h2>
                        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                            We personally set up each clinic to ensure quality.
                            Fill out this form and we'll show you a demo with your clinic's info.
                        </p>
                    </div>

                    {/* What happens next */}
                    <div className="grid sm:grid-cols-3 gap-4 mb-10">
                        <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                            <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold text-sm flex-shrink-0">
                                1
                            </div>
                            <p className="text-sm text-slate-600">You fill this form (1 min)</p>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                            <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold text-sm flex-shrink-0">
                                2
                            </div>
                            <p className="text-sm text-slate-600">We demo with your info (15 min)</p>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                            <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold text-sm flex-shrink-0">
                                3
                            </div>
                            <p className="text-sm text-slate-600">Go live in 24 hours</p>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100">
                        <LeadForm />
                    </div>

                    {/* Trust elements */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>14-day risk-free trial</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>No contracts</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Cancel anytime</span>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-slate-500 text-sm">
                            Prefer email?{" "}
                            <a
                                href={`mailto:${siteConfig.email}?subject=VetFlow AI - Getting Started`}
                                className="text-teal-600 hover:underline font-medium"
                            >
                                {siteConfig.email}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
