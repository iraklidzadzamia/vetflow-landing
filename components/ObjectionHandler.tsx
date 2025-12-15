export function ObjectionHandler() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                        "Will this replace my staff?"
                    </h2>
                    <p className="mt-4 text-xl text-teal-600 font-semibold">
                        No — it gives them superpowers.
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                        {/* Left - What AI handles */}
                        <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Virtual assistant handles:
                            </h3>
                            <ul className="space-y-2 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <span className="text-slate-400 mt-1">•</span>
                                    <span>"What time do you close?"</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-slate-400 mt-1">•</span>
                                    <span>"How much does a checkup cost?"</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-slate-400 mt-1">•</span>
                                    <span>Booking routine appointments</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-slate-400 mt-1">•</span>
                                    <span>Sending appointment reminders</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-slate-400 mt-1">•</span>
                                    <span>Answering after-hours messages</span>
                                </li>
                            </ul>
                        </div>

                        {/* Right - What humans handle */}
                        <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                Your team still handles:
                            </h3>
                            <ul className="space-y-2 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <span className="text-slate-400 mt-1">•</span>
                                    <span>Complex or emotional conversations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-slate-400 mt-1">•</span>
                                    <span>Medical consultations and advice</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-slate-400 mt-1">•</span>
                                    <span>Greeting clients in the lobby</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-slate-400 mt-1">•</span>
                                    <span>Coordinating urgent or complicated cases</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-slate-400 mt-1">•</span>
                                    <span>Building relationships with pet families</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6">
                        <p className="text-slate-800 leading-relaxed">
                            <strong className="text-teal-900">Think of it as an exoskeleton:</strong> Your administrators are the heart and face of your clinic. They comfort worried pet parents, coordinate complex appointments, and build trust. The virtual assistant takes care of repetitive questions — "What are your hours?", "Where's your parking?" — so your team can focus on the humans (and animals) who need empathy.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
