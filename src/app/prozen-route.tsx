"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { useBar } from "@/shared/stores/bar.zustand";

import SignalIcon from "@/assets/icons/Mobile Signal.png";
import WifiIcon from "@/assets/icons/Wifi.png";
import BatteryFullIcon from "@/assets/icons/Battery.png";

import SignalWhiteIcon from "@/assets/icons/Mobile Signal White.png";
import WifiWhiteIcon from "@/assets/icons/Wifi White.png";
import BatteryFullWhiteIcon from "@/assets/icons/Battery White.png";

export const FrozenRoute = ({
    children,
}: {
    children: Readonly<React.ReactNode>;
}) => {
    const pathname = usePathname();
    const bar = useBar();

    const [flag, setFlag] = useState(false);
    useEffect(() => {
        const win = window as unknown as {
            setBarHeights: (top: number, bottom: number) => void;
            PaddingChannel: {
                postMessage: (f: string) => void;
            };
        };

        win.setBarHeights = (top: number, bottom: number) => {
            bar.set(top, bottom);
        };

        if (win.PaddingChannel && !flag) {
            setFlag(true);
            win.PaddingChannel.postMessage("getPadding");
        }
    }, [bar, flag]);

    const MODE = process.env.NEXT_PUBLIC_MODE;

    return (
        <>
            {MODE === "test" && (
                <>
                    <div
                        className="z-1000 absolute top-0 left-0 w-full flex items-center px-[60px]"
                        style={{
                            height: `${bar.top}px`,
                        }}
                    >
                        <span
                            className="font-[Pretendard] font-medium text-[18px]"
                            style={{
                                color:
                                    pathname === "/moment" ? "white" : "black",
                            }}
                        >
                            9:41
                        </span>
                    </div>

                    <div
                        className="z-1000 absolute top-0 left-0 w-full flex justify-end items-center px-[48px] gap-[8px]"
                        style={{
                            height: `${bar.top}px`,
                        }}
                    >
                        {pathname === "/moment" ? (
                            <>
                                <Image
                                    src={SignalWhiteIcon}
                                    alt="Signal Icon"
                                    width={18}
                                    height={13}
                                />
                                <Image
                                    src={WifiWhiteIcon}
                                    alt="Wifi Icon"
                                    width={18}
                                    height={13}
                                />
                                <Image
                                    src={BatteryFullWhiteIcon}
                                    alt="Battery Full Icon"
                                    width={28}
                                    height={14}
                                />
                            </>
                        ) : (
                            <>
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
                            </>
                        )}
                    </div>

                    <div
                        className="z-1000 absolute top-0 left-0 w-full flex justify-center items-center"
                        style={{
                            height: `${bar.top}px`,
                        }}
                    >
                        <div className="w-[120px] h-[36px] rounded-[100px] bg-black" />
                    </div>
                </>
            )}

            {children}

            {MODE === "test" && (
                <div
                    className="z-1000 absolute bottom-0 left-0 w-full flex justify-center items-center pt-[10px]"
                    style={{
                        height: `${bar.bottom}px`,
                    }}
                >
                    <div
                        className="w-[160px] h-[4px] rounded-[100px]"
                        style={{
                            background:
                                pathname === "/moment" ? "white" : "black",
                        }}
                    />
                </div>
            )}
        </>
    );
};
