import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 bg-slate-900 text-slate-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo and contact */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <Image
                            src="/logo.svg"
                            alt="VetFlow AI"
                            width={130}
                            height={30}
                            className="h-7 w-auto brightness-0 invert"
                        />
                        <p className="text-sm">
                            Contact:{" "}
                            <a
                                href={`mailto:${siteConfig.email}`}
                                className="text-teal-400 hover:text-teal-300 transition-colors"
                            >
                                {siteConfig.email}
                            </a>
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                        <Link href="#features" className="hover:text-white transition-colors">
                            Features
                        </Link>
                        <Link href="#how-it-works" className="hover:text-white transition-colors">
                            How it works
                        </Link>
                        <Link href="#pricing" className="hover:text-white transition-colors">
                            Pricing
                        </Link>
                        <Link href="#faq" className="hover:text-white transition-colors">
                            FAQ
                        </Link>
                        <Link href="#privacy" className="hover:text-white transition-colors">
                            Privacy
                        </Link>
                    </div>
                </div>

                <div className="mt-10 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-slate-500">
                        © {currentYear} {siteConfig.name}. All rights reserved.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-slate-500">
                        <span>
                            We don&apos;t sell your data.{" "}
                            <Link href="#privacy" className="text-teal-400 hover:underline">
                                Learn more
                            </Link>
                        </span>
                        <span className="hidden sm:inline text-slate-700">•</span>
                        <span>
                            Also available in Russian / Spanish — ask in the form.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
