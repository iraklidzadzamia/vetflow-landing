import { LeadForm } from "./LeadForm";
import { siteConfig } from "@/lib/config";

export function FinalCTA() {
    return (
        <section id="demo" className="py-16 md:py-24 bg-white scroll-mt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                            See it working with your clinic&apos;s info.
                        </h2>
                        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                            Request a personalized demo. We&apos;ll show you how VetFlow AI handles real
                            questions your clients ask — using your clinic&apos;s services and hours.
                        </p>
                    </div>

                    <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100">
                        <LeadForm />
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-slate-500 text-sm">
                            Prefer email?{" "}
                            <a
                                href={`mailto:${siteConfig.email}?subject=VetFlow AI Demo Request`}
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
