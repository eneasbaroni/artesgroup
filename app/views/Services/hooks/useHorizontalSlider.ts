import { useEffect, useRef } from "react";
import { SLIDER_CONFIG } from "../constants";

interface UseHorizontalSliderProps {
    slidesCount: number;
}

/**
 * Hook that manages horizontal slider navigation with wheel-based discrete snapping
 * Maps vertical scroll to horizontal slide transitions with smooth animations
 */
export const useHorizontalSlider = ({
    slidesCount,
}: UseHorizontalSliderProps) => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const innerRef = useRef<HTMLDivElement | null>(null);
    const indexRef = useRef<number>(0);
    const wheelAccum = useRef<number>(0);
    const busyRef = useRef<boolean>(false);

    useEffect(() => {
        const section = sectionRef.current;
        const inner = innerRef.current;
        if (!section || !inner) return;

        /**
         * Set current slide index and apply transform animation
         */
        const setSlide = (idx: number) => {
            const clamped = Math.max(0, Math.min(idx, slidesCount - 1));
            indexRef.current = clamped;
            inner.style.transition = `transform ${SLIDER_CONFIG.SNAP_TRANSITION_DURATION}ms ${SLIDER_CONFIG.SNAP_EASING}`;
            inner.style.transform = `translateX(-${clamped * window.innerWidth}px)`;
        };

        /**
         * Handle scroll events: keep transform aligned with scroll position
         */
        const onScroll = () => {
            // Skip during snapping to avoid conflicting transforms
            if (busyRef.current) return;

            if (!section) return;
            const rect = section.getBoundingClientRect();
            const sectionTop = window.scrollY + rect.top;
            const local = window.scrollY - sectionTop;
            const idx = Math.round(local / window.innerHeight);

            if (idx !== indexRef.current) {
                indexRef.current = Math.max(0, Math.min(idx, slidesCount - 1));
                inner.style.transition = `transform ${SLIDER_CONFIG.NORMAL_TRANSITION_DURATION}ms ${SLIDER_CONFIG.NORMAL_EASING}`;
                inner.style.transform = `translateX(-${indexRef.current * window.innerWidth}px)`;
            }
        };

        /**
         * Handle wheel events: accumulate delta and snap to next/prev slide
         * Prevents "peeking" at adjacent slides by waiting for threshold
         */
        const wheelHandler = (e: WheelEvent) => {
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const sectionTop = window.scrollY + rect.top;
            const sectionBottom =
                sectionTop +
                (slidesCount - 1) * window.innerHeight +
                window.innerHeight;

            // Only intercept wheel while the sticky section is active
            if (window.scrollY < sectionTop || window.scrollY >= sectionBottom)
                return;

            e.preventDefault();
            wheelAccum.current += e.deltaY;

            if (busyRef.current) return;

            if (wheelAccum.current > SLIDER_CONFIG.WHEEL_THRESHOLD) {
                // Move to next slide
                busyRef.current = true;
                wheelAccum.current = 0;
                const next = Math.min(indexRef.current + 1, slidesCount - 1);
                setSlide(next);
                const target = sectionTop + next * window.innerHeight;
                window.scrollTo({ top: target, behavior: "smooth" });
                setTimeout(
                    () => (busyRef.current = false),
                    SLIDER_CONFIG.BUSY_TIMEOUT,
                );
            } else if (wheelAccum.current < -SLIDER_CONFIG.WHEEL_THRESHOLD) {
                // Move to previous slide
                busyRef.current = true;
                wheelAccum.current = 0;
                const prev = Math.max(indexRef.current - 1, 0);
                setSlide(prev);
                const target = sectionTop + prev * window.innerHeight;
                window.scrollTo({ top: target, behavior: "smooth" });
                setTimeout(
                    () => (busyRef.current = false),
                    SLIDER_CONFIG.BUSY_TIMEOUT,
                );
            }
        };

        /**
         * Handle window resize: recalculate transform position
         */
        const onResize = () => {
            inner.style.transition = "none";
            inner.style.transform = `translateX(-${indexRef.current * window.innerWidth}px)`;
            setTimeout(
                () =>
                    (inner.style.transition = `transform ${SLIDER_CONFIG.NORMAL_TRANSITION_DURATION}ms ${SLIDER_CONFIG.NORMAL_EASING}`),
                50,
            );
        };

        // Attach event listeners
        window.addEventListener("scroll", onScroll, { passive: true });
        section.addEventListener("wheel", wheelHandler, { passive: false });
        window.addEventListener("resize", onResize);

        // Initialize to first slide
        setSlide(0);

        // Cleanup
        return () => {
            window.removeEventListener("scroll", onScroll);
            section.removeEventListener("wheel", wheelHandler as EventListener);
            window.removeEventListener("resize", onResize);
        };
    }, [slidesCount]);

    return { sectionRef, innerRef };
};
