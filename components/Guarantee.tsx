"use client";

import Link from "next/link";
import { trackEvent } from "@/components/FacebookPixel";

export function Guarantee() {
    return (
        <section id="guarantee" className="py-16 md:py-24 bg-gradient-to-br from-teal-600 to-teal-700">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    {/* Shield icon */}
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-8">
                        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Our "It Works Or You Don't Pay" Guarantee
                    </h2>

                    <div className="max-w-2xl mx-auto">
                        <p className="text-xl text-teal-100 mb-8">
                            Try VetFlow AI for 14 days. If the AI doesn't answer at least{" "}
                            <strong className="text-white">85% of routine messages correctly</strong> —
                            you pay nothing. We'll refund every cent.
                        </p>

                        <div className="grid sm:grid-cols-3 gap-4 mb-8">
                            <div className="bg-white/10 rounded-xl p-4">
                                <div className="text-2xl mb-2">📝</div>
                                <p className="text-white font-medium">No contracts</p>
                                <p className="text-teal-200 text-sm">Cancel anytime</p>
                            </div>
                            <div className="bg-white/10 rounded-xl p-4">
                                <div className="text-2xl mb-2">💳</div>
                                <p className="text-white font-medium">No setup fees</p>
                                <p className="text-teal-200 text-sm">We absorb the cost</p>
                            </div>
                            <div className="bg-white/10 rounded-xl p-4">
                                <div className="text-2xl mb-2">🤝</div>
                                <p className="text-white font-medium">We only win if you win</p>
                                <p className="text-teal-200 text-sm">Aligned incentives</p>
                            </div>
                        </div>

                        <p className="text-teal-200 text-sm mb-8">
                            Why do we offer this? Because we've seen it work at BioNika Vet Clinic for months.
                            We know the AI handles 90% of messages. If it doesn't work for you, we don't deserve your money.
                        </p>

                        <Link
                            href="#demo"
                            onClick={() => trackEvent('InitiateCheckout', {
                                content_name: 'CTA: Guarantee - Start Risk-Free Trial',
                                value: 600,
                                currency: 'USD'
                            })}
                            className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-full hover:bg-teal-50 transition-colors shadow-lg"
                        >
                            Start Your Risk-Free Trial
                            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
