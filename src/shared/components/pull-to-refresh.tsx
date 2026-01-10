"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useRef, useState, useCallback } from "react";

interface PullToRefreshProps {
    motionKey: string;
    children: React.ReactNode;
    onRefresh?: () => Promise<void>;
}

export const PullToRefresh = ({
    motionKey,
    children,
    onRefresh,
}: PullToRefreshProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [pullDistance, setPullDistance] = useState(0);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isPulling, setIsPulling] = useState(false);

    const startY = useRef(0);
    const currentY = useRef(0);

    const PULL_THRESHOLD = 60;
    const MAX_PULL = 100;

    const containerVariants = useMemo(
        () => ({
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { duration: 0.1 } },
            exit: { opacity: 0, transition: { duration: 0.1 } },
        }),
        []
    );

    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        if (containerRef.current && containerRef.current.scrollTop === 0) {
            startY.current = e.touches[0].clientY;
            setIsPulling(true);
        }
    }, []);

    const handleTouchMove = useCallback(
        async (e: React.TouchEvent) => {
            if (!isPulling || !containerRef.current) return;

            currentY.current = e.touches[0].clientY;
            const distance = currentY.current - startY.current;

            if (containerRef.current.scrollTop === 0 && distance > 0) {
                const pull = Math.min(distance * 0.5, MAX_PULL);
                setPullDistance(pull);

                if (pull > 10) {
                    e.preventDefault();
                }

                if (pullDistance > PULL_THRESHOLD + 20) {
                    setIsPulling(false);

                    setIsRefreshing(true);

                    if (onRefresh) {
                        await onRefresh();
                    }

                    setTimeout(() => {
                        setIsRefreshing(false);
                        setPullDistance(0);
                    }, 500);
                }
            }
        },
        [isPulling, pullDistance, onRefresh]
    );

    const handleTouchEnd = useCallback(async () => {
        if (!isPulling) return;

        setIsPulling(false);

        if (pullDistance >= PULL_THRESHOLD + 20) {
            setIsRefreshing(true);

            if (onRefresh) {
                await onRefresh();
            }

            setTimeout(() => {
                setIsRefreshing(false);
                setPullDistance(0);
            }, 500);
        } else {
            setPullDistance(0);
        }
    }, [isPulling, pullDistance, PULL_THRESHOLD, onRefresh]);

    const pullProgress = Math.min(pullDistance / PULL_THRESHOLD, 1);
    const size = pullProgress * 20;

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full overflow-y-scroll"
        >
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={motionKey}
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="relative w-full h-full"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    style={{
                        transition: isPulling
                            ? "none"
                            : "transform 0.3s ease-out",
                    }}
                >
                    <div
                        className="absolute top-0 left-0 right-0 flex items-center justify-center"
                        style={{
                            height: `${Math.max(
                                pullDistance,
                                isRefreshing ? PULL_THRESHOLD : 0
                            )}px`,
                            transition: isPulling
                                ? "none"
                                : "height 0.3s ease-out, transform 0.3s ease-out",
                        }}
                    >
                        <span
                            className="font-p-medium text-gray-900"
                            style={{
                                fontSize: size,
                                opacity: pullProgress,
                                transform: `scale(${pullProgress})`,
                                transition: isPulling
                                    ? "none"
                                    : "font-size 0.3s ease-out, opacity 0.3s ease-out, transform 0.3s ease-out",
                            }}
                        >
                            덕덕쿵
                        </span>
                    </div>

                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
