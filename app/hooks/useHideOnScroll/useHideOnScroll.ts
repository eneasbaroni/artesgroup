"use client";

import { useEffect, useRef, useState } from "react";

export default function useHideOnScroll(threshold = 50) {
    const [hidden, setHidden] = useState(false);
    const lastY = useRef(0);
    const ticking = useRef(false);

    useEffect(() => {
        const onScroll = () => {
            const current = window.scrollY || 0;

            if (!ticking.current) {
                window.requestAnimationFrame(() => {
                    if (current > lastY.current && current > threshold) {
                        setHidden(true);
                    } else {
                        setHidden(false);
                    }
                    lastY.current = current;
                    ticking.current = false;
                });
                ticking.current = true;
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [threshold]);

    return hidden;
}
