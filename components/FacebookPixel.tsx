'use client';

import { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';

export function FacebookPixel() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            ReactPixel.init('2809106915953241');
            ReactPixel.pageView();
        }
    }, []);

    return null;
}
