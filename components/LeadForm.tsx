"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/config";
import { leadFormSchema, type LeadFormData } from "@/lib/validation";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface LeadFormProps {
    className?: string;
}

export function LeadForm({ className = "" }: LeadFormProps) {
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");
        setErrors({});
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);
        const data = {
            clinic_name: formData.get("clinic_name") as string,
            contact_name: formData.get("contact_name") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            website: formData.get("website") as string,
            current_booking_system: formData.get("current_booking_system") as string,
            message: formData.get("message") as string,
            company_website_hidden: formData.get("company_website_hidden") as string,
        };

        // Client-side validation
        const result = leadFormSchema.safeParse(data);
        if (!result.success) {
            const fieldErrors: Partial<Record<keyof LeadFormData, string>> = {};
            result.error.issues.forEach((err) => {
                const field = err.path[0] as keyof LeadFormData;
                fieldErrors[field] = err.message;
            });
            setErrors(fieldErrors);
            setStatus("idle");
            return;
        }

        try {
            const response = await fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const responseData = await response.json();

            if (response.ok && responseData.ok) {
                setStatus("success");
            } else {
                setErrorMessage(responseData.error || "Something went wrong. Please try again.");
                setStatus("error");
            }
        } catch {
            setErrorMessage("Network error. Please try again or email us directly.");
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className={`p-8 bg-teal-50 rounded-2xl text-center ${className}`}>
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Thanks — we&apos;ll reach out within 24 hours.</h3>
                <p className="text-slate-600">Check your email for confirmation. Looking forward to helping your clinic.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={`space-y-5 ${className}`}>
            {status === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-red-700 text-sm">{errorMessage}</p>
                    <p className="text-red-600 text-sm mt-2">
                        Or email us directly at{" "}
                        <a href={`mailto:${siteConfig.email}`} className="underline font-medium">
                            {siteConfig.email}
                        </a>
                    </p>
                </div>
            )}

            {/* Honeypot field - hidden from users */}
            <div className="hidden" aria-hidden="true">
                <label htmlFor="company_website_hidden">Website</label>
                <input
                    type="text"
                    id="company_website_hidden"
                    name="company_website_hidden"
                    tabIndex={-1}
                    autoComplete="off"
                />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="clinic_name" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Clinic name *
                    </label>
                    <input
                        type="text"
                        id="clinic_name"
                        name="clinic_name"
                        required
                        className={`w-full px-4 py-3 rounded-xl border ${errors.clinic_name ? "border-red-300 bg-red-50" : "border-slate-200"
                            } focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-colors`}
                        placeholder="Happy Paws Vet Clinic"
                    />
                    {errors.clinic_name && (
                        <p className="mt-1 text-sm text-red-600">{errors.clinic_name}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="contact_name" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Your name *
                    </label>
                    <input
                        type="text"
                        id="contact_name"
                        name="contact_name"
                        required
                        className={`w-full px-4 py-3 rounded-xl border ${errors.contact_name ? "border-red-300 bg-red-50" : "border-slate-200"
                            } focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-colors`}
                        placeholder="Dr. Sarah Johnson"
                    />
                    {errors.contact_name && (
                        <p className="mt-1 text-sm text-red-600">{errors.contact_name}</p>
                    )}
                </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className={`w-full px-4 py-3 rounded-xl border ${errors.email ? "border-red-300 bg-red-50" : "border-slate-200"
                            } focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-colors`}
                        placeholder="sarah@happypawsvet.com"
                    />
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Phone *
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? "border-red-300 bg-red-50" : "border-slate-200"
                            } focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-colors`}
                        placeholder="(555) 123-4567"
                    />
                    {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="website" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Clinic website <span className="text-slate-400">(optional)</span>
                    </label>
                    <input
                        type="url"
                        id="website"
                        name="website"
                        className={`w-full px-4 py-3 rounded-xl border ${errors.website ? "border-red-300 bg-red-50" : "border-slate-200"
                            } focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-colors`}
                        placeholder="https://happypawsvet.com"
                    />
                    {errors.website && (
                        <p className="mt-1 text-sm text-red-600">{errors.website}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="current_booking_system" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Current booking system *
                    </label>
                    <select
                        id="current_booking_system"
                        name="current_booking_system"
                        required
                        className={`w-full px-4 py-3 rounded-xl border ${errors.current_booking_system ? "border-red-300 bg-red-50" : "border-slate-200"
                            } focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-colors bg-white`}
                    >
                        <option value="">Select your system</option>
                        {siteConfig.bookingSystems.map((system) => (
                            <option key={system.value} value={system.value}>
                                {system.label}
                            </option>
                        ))}
                    </select>
                    {errors.current_booking_system && (
                        <p className="mt-1 text-sm text-red-600">{errors.current_booking_system}</p>
                    )}
                </div>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Message <span className="text-slate-400">(optional)</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.message ? "border-red-300 bg-red-50" : "border-slate-200"
                        } focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-colors resize-none`}
                    placeholder="Tell us about your clinic's messaging challenges..."
                />
                {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
            </div>

            <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 px-6 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {status === "submitting" ? (
                    <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                    </>
                ) : (
                    "Request a demo"
                )}
            </button>

            <p className="text-center text-sm text-slate-500">
                Or email us at{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-teal-600 hover:underline">
                    {siteConfig.email}
                </a>
            </p>
        </form>
    );
}
