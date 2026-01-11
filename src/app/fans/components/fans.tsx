"use client";

import {
    ArrowUpRightIcon,
    BotMessageSquareIcon,
    ChevronLeftIcon,
    HardDriveDownloadIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";

import { OverlayHeader } from "@/shared/components/overlay-header";
import { Screen } from "@/shared/components/screen";

import { useBar } from "@/shared/stores/bar.zustand";

import { fans as MockFans } from "@/mocks/fans";
import { Tag } from "@/shared/components/tag";
import { Tab } from "@/shared/components/tab";
import { Button } from "@/shared/components/button";
import { Footer } from "@/shared/components/footer";
import { Empty } from "@/shared/components/empty";

type TypeTab = "정보" | "굿즈" | "모먼트";

const tabs: TypeTab[] = ["정보", "굿즈", "모먼트"];

export const FansComponent = () => {
    const router = useRouter();
    const bar = useBar();

    const fan = MockFans[0];

    const [tab, setTab] = useState<TypeTab>(tabs[0]);

    const containerVariants = useMemo(
        () => ({
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { duration: 0.15 } },
            exit: { opacity: 0, transition: { duration: 0.15 } },
        }),
        []
    );

    return (
        <Screen className="!pt-0" bf={171}>
            <div className="w-full h-full overflow-y-scroll">
                <div
                    className="relative w-full h-[375px] bg-gray-700 overflow-hidden rounded-b-[8px]"
                    style={{
                        paddingTop: `${bar.top}px`,
                    }}
                >
                    <div className="absolute z-100 top-0 left-0 w-full h-[160px] bg-gradient-to-b from-black to-transparent" />

                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={fan.imageUrl[0]}
                        alt={fan.name}
                        className="absolute top-0 left-0 w-full h-full object-cover object-top"
                    />

                    <div className="absolute bottom-0 left-0 w-full h-[60px] flex justify-center items-center">
                        <div className="flex items-center gap-[6px]">
                            <div className="shrink-0 size-[8px] bg-white/60 rounded-full" />
                            <div className="shrink-0 size-[8px] bg-white/60 rounded-full" />
                            <div className="shrink-0 w-[24px] h-[8px] bg-white rounded-full" />
                            <div className="shrink-0 size-[8px] bg-white/60 rounded-full" />
                        </div>
                    </div>

                    <OverlayHeader
                        theme="dark"
                        title="송하영"
                        left={{
                            Component: ChevronLeftIcon,
                            onClick: () => router.push("/search"),
                        }}
                        right={{
                            Component: HardDriveDownloadIcon,
                        }}
                        className="!absolute"
                        top={bar.top}
                    />
                </div>

                <div className="p-[16px] flex flex-wrap gap-[8px]">
                    <Tag hash text="특징원" />
                    <Tag hash text="특징투" />
                    <Tag hash text="특징쓰리스타" />
                </div>

                <Tab
                    options={tabs}
                    tab={tab}
                    onChange={(e) => setTab(e as TypeTab)}
                />

                <div className="w-full overflow-x-hidden">
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={tab}
                            variants={containerVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="relative w-full h-full"
                        >
                            {tab === "정보" && (
                                <div className="p-[16px]">
                                    <div className="flex flex-col gap-[16px]">
                                        <div className="flex flex-col gap-[4px]">
                                            <p className="font-p-regular text-[16px] text-gray-400">
                                                소속
                                            </p>

                                            <div className="flex items-center gap-[4px]">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src="https://i.namu.wiki/i/7U8i9WMw7K-JeeFksApvOdV69UbUiP0bepfgFrRg_x4kQINbSIdA6psHGy-Zk7-82ypGJcBl0kbICTdRaLyDxA.svg"
                                                    alt="logo"
                                                    className="size-[16px]"
                                                />

                                                <span className="font-p-medium text-[18px] text-gray-900">
                                                    프로미스나인
                                                </span>

                                                <span className="font-p-gmsm text-[14px] text-gray-400 leading-none translate-y-[2px]">
                                                    fromis_9
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-[4px]">
                                            <p className="font-p-regular text-[16px] text-gray-400">
                                                이름
                                            </p>

                                            <span className="font-p-medium text-[18px] text-gray-900">
                                                송하영
                                            </span>
                                        </div>

                                        <div className="flex flex-col gap-[4px]">
                                            <p className="font-p-regular text-[16px] text-gray-400">
                                                생년월일
                                            </p>

                                            <span className="font-p-gmsm text-[18px] text-gray-900">
                                                2025년 9월 29일
                                            </span>
                                        </div>

                                        <div className="flex flex-col gap-[4px]">
                                            <p className="font-p-regular text-[16px] text-gray-400">
                                                대표 색상
                                            </p>

                                            <div className="w-fit p-[4px_12px] bg-[#ce651f] rounded-[8px]">
                                                <span className="font-[Consolas] text-[14px] text-white">
                                                    #ce651f
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {tab === "굿즈" && (
                                <div className="p-[16px]">
                                    <Empty />
                                </div>
                            )}

                            {tab === "모먼트" && (
                                <div className="p-[16px]">
                                    <Empty />
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <Footer bp>
                <span className="text-center font-p-medium text-[14px] text-gray-400">
                    마지막 요청: 2025년 8월 11일 18시 3분 47초
                </span>

                <Button type="md" variants="outline">
                    <BotMessageSquareIcon
                        size={20}
                        className="stroke-gray-900"
                    />
                    정보 업데이트 요청하기
                </Button>

                <Button type="md" variants="black">
                    <ArrowUpRightIcon size={20} className="stroke-white" />
                    커뮤니티 바로가기
                </Button>
            </Footer>
        </Screen>
    );
};

export default FansComponent;
