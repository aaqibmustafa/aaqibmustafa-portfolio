import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to top immediately on route change
        window.scrollTo(0, 0);

        // Double-check scroll position after a slight delay to handle 
        // potential layout shifts or race conditions
        const timer = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 50);

        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
