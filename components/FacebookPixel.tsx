'use client';

import { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';

export function FacebookPixel() {
    useEffect(() => {
        ReactPixel.init('2809106915953241');
        ReactPixel.pageView();
    }, []);

    return null;
}
