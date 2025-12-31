"use client";

import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import React, { useContext, useEffect, useMemo, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { useBar } from "@/stores/bar.zustand";

import SignalIcon from "@/assets/icons/Mobile Signal.png";
import WifiIcon from "@/assets/icons/Wifi.png";
import BatteryFullIcon from "@/assets/icons/Battery.png";

export const FrozenRoute = ({
    children,
}: {
    children: Readonly<React.ReactNode>;
}) => {
    const context = useContext(LayoutRouterContext);
    const frozen = useRef(context).current;

    const bar = useBar();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const localTop = window.localStorage.getItem("top");
            const top = localTop ? parseInt(localTop) : 0;

            const localBottom = window.localStorage.getItem("bottom");
            const bottom = localBottom ? parseInt(localBottom) : 0;

            bar.set(top, bottom);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const win = window as unknown as {
                setBarHeights: (top: number, bottom: number) => void;
            };

            win.setBarHeights = (top, bottom) => {
                window.localStorage.setItem("top", String(top));
                window.localStorage.setItem("bottom", String(bottom));
            };
        }
    }, []);

    const containerVariants = useMemo(
        () => ({
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { duration: 0.3 } },
            exit: { opacity: 0, transition: { duration: 0.3 } },
        }),
        []
    );

    const MODE = process.env.NEXT_PUBLIC_MODE;

    return (
        <>
            {MODE === "test" && (
                <>
                    <div
                        className="z-[100] absolute top-0 left-0 w-full flex items-center px-[60px]"
                        style={{
                            height: `${bar.top}px`,
                        }}
                    >
                        <span className="font-[Pretendard] font-medium text-[18px] text-black">
                            9:41
                        </span>
                    </div>

                    <div
                        className="z-[100] absolute top-0 left-0 w-full flex justify-end items-center px-[48px] gap-[8px]"
                        style={{
                            height: `${bar.top}px`,
                        }}
                    >
                        <Image
                            src={SignalIcon}
                            alt="Signal Icon"
                            width={18}
                            height={13}
                        />
                        <Image
                            src={WifiIcon}
                            alt="Wifi Icon"
                            width={18}
                            height={13}
                        />
                        <Image
                            src={BatteryFullIcon}
                            alt="Battery Full Icon"
                            width={28}
                            height={14}
                        />
                    </div>

                    <div
                        className="z-[100] absolute top-0 left-0 w-full flex justify-center items-center"
                        style={{
                            height: `${bar.top}px`,
                        }}
                    >
                        <div className="bg-black w-[120px] h-[36px] rounded-[100px]" />
                    </div>
                </>
            )}

            <LayoutRouterContext.Provider value={frozen}>
                <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                        variants={containerVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="relative w-full h-full"
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </LayoutRouterContext.Provider>

            {MODE === "test" && (
                <div
                    className="z-[100] absolute bottom-0 left-0 w-full flex justify-center items-center pt-[10px]"
                    style={{
                        height: `${bar.bottom}px`,
                    }}
                >
                    <div className="bg-black w-[160px] h-[6px] rounded-[100px]" />
                </div>
            )}
        </>
    );
};
