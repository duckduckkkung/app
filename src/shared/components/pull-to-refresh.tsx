"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePullToRefresh } from "use-pull-to-refresh";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import Image from "next/image";

import Logo from "@/assets/icons/logo.png";

interface PullToRefreshProps {
    motionKey: string;
    children: React.ReactNode;
    onRefresh?: () => Promise<void>;
}

const MAX_PULL_LENGTH = 80;
const REFRESH_THRESHOLD = 40;

export const PullToRefresh = ({
    motionKey,
    children,
    onRefresh,
}: PullToRefreshProps) => {
    const router = useRouter();

    const { isRefreshing, pullPosition } = usePullToRefresh({
        onRefresh: onRefresh || router.refresh,
        maximumPullLength: MAX_PULL_LENGTH,
        refreshThreshold: REFRESH_THRESHOLD,
        isDisabled: false,
    });

    const containerVariants = useMemo(
        () => ({
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { duration: 0.1 } },
            exit: { opacity: 0, transition: { duration: 0.1 } },
        }),
        []
    );

    return (
        <AnimatePresence mode="popLayout">
            <motion.div
                key={motionKey}
                variants={containerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="relative w-full h-full overflow-y-scroll"
            >
                <div
                    className="absolute h-[60px] top-0 left-0 w-full flex justify-center items-center overflow-hidden"
                    style={{
                        opacity: isRefreshing
                            ? 1
                            : Math.min(pullPosition, REFRESH_THRESHOLD) /
                              REFRESH_THRESHOLD,
                        transition:
                            isRefreshing && pullPosition < REFRESH_THRESHOLD
                                ? "all 0.1s ease-in-out"
                                : "none",
                    }}
                >
                    <Image
                        src={Logo}
                        alt="덕덕쿵"
                        height={32}
                        style={
                            pullPosition > REFRESH_THRESHOLD
                                ? undefined
                                : {
                                      transform: `rotate(${
                                          (Math.min(
                                              pullPosition,
                                              REFRESH_THRESHOLD
                                          ) /
                                              REFRESH_THRESHOLD) *
                                          360
                                      }deg)`,
                                  }
                        }
                        className={
                            isRefreshing || pullPosition > REFRESH_THRESHOLD
                                ? "animate-spin"
                                : ""
                        }
                    />
                </div>

                {children}
            </motion.div>
        </AnimatePresence>
    );
};
