'use client';

import Link from "next/link";
import { trackEvent } from "@/components/FacebookPixel";

export function Hero() {
    return (
        <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 gradient-bg overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-100 rounded-full opacity-50 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-50 rounded-full opacity-50 blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Trust badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full text-sm text-teal-700 mb-6">
                        <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Trusted by BioNika Vet Clinic — 3,000+ messages handled</span>
                    </div>

                    {/* Headline - Dream Outcome */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight text-balance leading-tight">
                        Free Your Admin From{" "}
                        <span className="text-teal-600">90% of Messages</span>
                        <br className="hidden sm:block" />
                        <span className="text-slate-700"> — While Booking More Appointments</span>
                    </h1>

                    {/* Subheadline - Speed + Simplicity */}
                    <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
                        Your AI assistant answers questions, books appointments on Google Calendar, and never takes a day off.{" "}
                        <span className="font-semibold text-teal-600">Live in 24 hours.</span>
                    </p>

                    {/* Key stats bar */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-teal-600">90%</span>
                            <span className="text-slate-600 text-left">of messages<br className="sm:hidden" /> are routine</span>
                        </div>
                        <div className="hidden sm:block w-px h-8 bg-slate-200" />
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-teal-600">24/7</span>
                            <span className="text-slate-600">coverage</span>
                        </div>
                        <div className="hidden sm:block w-px h-8 bg-slate-200" />
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-teal-600">$600</span>
                            <span className="text-slate-600">/month</span>
                        </div>
                    </div>

                    {/* What it handles */}
                    <div className="mt-8 flex flex-col items-start max-w-xl mx-auto gap-3">
                        <div className="flex items-start gap-3 text-slate-700">
                            <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm sm:text-base text-left">
                                Replies faster than your best admin — <strong className="text-teal-600">at 3am on Sunday</strong>
                            </span>
                        </div>
                        <div className="flex items-start gap-3 text-slate-700">
                            <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm sm:text-base text-left">
                                Books appointments directly to Google Calendar — <strong className="text-teal-600">no double-bookings ever</strong>
                            </span>
                        </div>
                        <div className="flex items-start gap-3 text-slate-700">
                            <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm sm:text-base text-left">
                                Your admin clicks "Pause AI" anytime to take over — <strong className="text-teal-600">you stay in control</strong>
                            </span>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-10 flex flex-col items-center justify-center">
                        <Link
                            href="#demo"
                            onClick={() => trackEvent('InitiateCheckout', {
                                content_name: 'CTA: Hero - Get Started $600/mo',
                                value: 600,
                                currency: 'USD'
                            })}
                            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/25 hover:shadow-xl hover:shadow-teal-600/30"
                        >
                            Get Started — $600/mo
                            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <p className="mt-3 text-sm text-slate-500">
                            14-day trial • No contracts • Cancel anytime
                        </p>
                    </div>

                    {/* Safety note */}
                    <p className="mt-4 text-sm text-amber-600 font-medium">
                        ⚠️ No medical advice — complex questions escalate to your team.
                    </p>

                    {/* Channels */}
                    <div className="mt-8 pt-8 border-t border-slate-200/60">
                        <p className="text-sm text-slate-500 mb-4">Works with the channels your clients already use:</p>
                        <div className="flex items-center justify-center gap-6 text-slate-400">
                            {/* WhatsApp */}
                            <div className="flex flex-col items-center gap-1">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                <span className="text-xs">WhatsApp</span>
                            </div>
                            {/* Instagram */}
                            <div className="flex flex-col items-center gap-1">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                <span className="text-xs">Instagram</span>
                            </div>
                            {/* Facebook */}
                            <div className="flex flex-col items-center gap-1">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                <span className="text-xs">Messenger</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
