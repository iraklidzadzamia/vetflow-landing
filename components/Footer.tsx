import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 bg-slate-900 text-slate-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* 4-column layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                    {/* Column 1: Company */}
                    <div>
                        <Image
                            src="/logo.svg"
                            alt="VetFlow AI"
                            width={130}
                            height={30}
                            className="h-7 w-auto brightness-0 invert mb-4"
                        />
                        <p className="text-sm text-slate-400 mb-3">
                            Intelligent assistant for vet clinics
                        </p>
                        <p className="text-sm">
                            <a
                                href={`mailto:${siteConfig.email}`}
                                className="text-teal-400 hover:text-teal-300 transition-colors"
                            >
                                {siteConfig.email}
                            </a>
                        </p>
                    </div>

                    {/* Column 2: Product */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Product</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#features" className="hover:text-white transition-colors">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="#integrations" className="hover:text-white transition-colors">
                                    Integrations
                                </Link>
                            </li>
                            <li>
                                <Link href="#safety" className="hover:text-white transition-colors">
                                    Security & Safety
                                </Link>
                            </li>
                            <li>
                                <Link href="#pricing" className="hover:text-white transition-colors">
                                    Pricing
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: For Who */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">For Who</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    Private Practice
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    Mobile Vets
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    Multi-location Hospitals
                                </Link>
                            </li>
                            <li>
                                <Link href="#how-it-works" className="hover:text-white transition-colors">
                                    How It Works
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Legal */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#privacy" className="hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#terms" className="hover:text-white transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="#faq" className="hover:text-white transition-colors">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <span className="text-slate-500 text-xs">GDPR Compliant</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-slate-800">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-slate-500">
                            © {currentYear} {siteConfig.name}. All rights reserved.
                        </p>
                        <p className="text-sm text-slate-400">
                            Made with love for animals 🐾
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
