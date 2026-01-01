'use client';

import { useEffect } from 'react';
import { trackEvent } from './FacebookPixel';

// Sections to track with human-readable names
// Using existing section IDs from the codebase
const SECTIONS_TO_TRACK = [
    { id: 'hero', name: 'Hero - Main Headline' },
    { id: 'problem', name: 'Problem - Pain Points' },
    { id: 'value', name: 'Value Stack - What You Get' },
    { id: 'proof', name: 'Proof - Case Study' },
    { id: 'how-it-works', name: 'How It Works' },
    { id: 'pricing', name: 'Pricing Section' },
    { id: 'guarantee', name: 'Guarantee' },
    { id: 'objection-handler', name: 'Objection Handler' },
    { id: 'faq', name: 'FAQ Section' },
    { id: 'demo', name: 'Lead Form - Final CTA' },
];

export function SectionTracker() {
    useEffect(() => {
        // Track which sections have been viewed in this session
        const viewedSections = new Set<string>();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.id;
                        const section = SECTIONS_TO_TRACK.find((s) => s.id === sectionId);

                        // Only track once per session
                        if (section && !viewedSections.has(sectionId)) {
                            viewedSections.add(sectionId);

                            // Send ViewContent event with section name
                            trackEvent('ViewContent', {
                                content_name: section.name,
                                content_category: 'Section View',
                                content_ids: [sectionId],
                            });

                            console.log(`[Pixel] Section viewed: ${section.name}`);
                        }
                    }
                });
            },
            {
                // Trigger when 50% of section is visible
                threshold: 0.5,
            }
        );

        // Slight delay to ensure DOM is ready
        const timeoutId = setTimeout(() => {
            SECTIONS_TO_TRACK.forEach(({ id }) => {
                const element = document.getElementById(id);
                if (element) {
                    observer.observe(element);
                }
            });
        }, 500);

        return () => {
            clearTimeout(timeoutId);
            observer.disconnect();
        };
    }, []);

    return null;
}
