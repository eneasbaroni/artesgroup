/**
 * Slider configuration and animation constants
 */

export const SLIDER_CONFIG = {
    // Wheel accumulation threshold to trigger slide change (pixels)
    WHEEL_THRESHOLD: 100,

    // Animation durations (milliseconds)
    SNAP_TRANSITION_DURATION: 500,
    NORMAL_TRANSITION_DURATION: 300,

    // Time to lock slider during animation
    BUSY_TIMEOUT: 700,

    // Easing functions
    SNAP_EASING: "cubic-bezier(.2,.8,.2,1)",
    NORMAL_EASING: "ease-out",
} as const;

export const TITLE_STYLES = {
    position: "absolute",
    top: "80px",
    left: "60px",
    zIndex: 50,
    pointerEvents: "none",
} as const;
