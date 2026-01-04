"use client";

import Link from "next/link";
import { trackEvent } from "@/components/FacebookPixel";

const valueItems = [
    {
        title: "AI Assistant answering 24/7/365",
        description: "No sick days, no vacations, no overtime pay",
        value: "$600",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
    },
    {
        title: "Multi-language support (EN/RU/ES)",
        description: "Serve international clients without hiring",
        value: "$100",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
        ),
    },
    {
        title: "Google Calendar integration",
        description: "Auto-booking with zero double-bookings",
        value: "$300",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: "Smart message batching",
        description: "Groups \"hello\" + \"where are\" + \"you\" → 1 smart reply",
        value: "$200",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        ),
    },
    {
        title: "\"Pause AI\" control button",
        description: "Take over any conversation with one click",
        value: "$100",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        title: "Conversation logs & insights",
        description: "See what clients really ask — improve your service",
        value: "$400",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
    },
    {
        title: "24-hour setup & configuration",
        description: "We configure everything — you just send clinic info",
        value: "$500",
        isOneTime: true,
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
];

export function ValueStack() {
    const monthlyTotal = valueItems
        .filter(item => !item.isOneTime)
        .reduce((sum, item) => sum + parseInt(item.value.replace(/[$,]/g, "")), 0);

    const setupValue = valueItems
        .filter(item => item.isOneTime)
        .reduce((sum, item) => sum + parseInt(item.value.replace(/[$,]/g, "")), 0);

    return (
        <section id="value" className="py-16 md:py-24 bg-gradient-to-br from-teal-50 to-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                        Everything You Get
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        One price. No hidden fees. All of this included.
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                    {/* Value items */}
                    <div className="divide-y divide-slate-100">
                        {valueItems.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-6 hover:bg-slate-50 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900">{item.title}</h3>
                                        <p className="text-sm text-slate-500">{item.description}</p>
                                    </div>
                                </div>
                                <div className="text-right flex-shrink-0 ml-4">
                                    <span className="text-lg font-bold text-slate-400 line-through">{item.value}</span>
                                    <span className="text-xs text-slate-400 block">{item.isOneTime ? "one-time" : "/mo"}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Total */}
                    <div className="bg-slate-900 p-8">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div className="text-center sm:text-left">
                                <p className="text-slate-400 text-sm">Total value:</p>
                                <p className="text-3xl font-bold text-white">
                                    <span className="line-through text-slate-500">${monthlyTotal.toLocaleString()}/mo</span>
                                    <span className="text-slate-400 text-lg ml-2">+ ${setupValue} setup</span>
                                </p>
                            </div>
                            <div className="text-center">
                                <p className="text-teal-400 text-sm font-medium mb-1">Your price:</p>
                                <p className="text-4xl sm:text-5xl font-bold text-white">$600<span className="text-xl text-slate-400">/mo</span></p>
                                <p className="text-slate-400 text-sm mt-1">or $800/mo for all channels</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-teal-600 p-6">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <p className="text-teal-100 text-center sm:text-left">
                                <strong className="text-white">That's less than $20/day</strong> for 24/7 virtual assistant
                            </p>
                            <Link
                                href="#demo"
                                onClick={() => trackEvent('InitiateCheckout', {
                                    content_name: 'CTA: ValueStack - Get Started',
                                    value: 600,
                                    currency: 'USD'
                                })}
                                className="inline-flex items-center px-6 py-3 bg-white text-teal-600 font-semibold rounded-full hover:bg-teal-50 transition-colors"
                            >
                                Get Started
                                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
