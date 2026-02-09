"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";

import { Screen } from "@/shared/components/screen";

import { WriteComponent } from "./write";
import { DetailComponent } from "./detail";

import { useSettingsProps } from "../../stores/props.zustand";
import { BottomSheet } from "@/shared/components/bottom-sheet";

export const SubComponent = () => {
    const { subAction, isManageOpen, setIsManageOpen } = useSettingsProps();

    const containerVariants = useMemo(
        () => ({
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { duration: 0.15 } },
            exit: { opacity: 0, transition: { duration: 0.15 } },
        }),
        [],
    );

    return (
        <>
            <Screen bf={80} className="!overflow-y-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={subAction}
                        variants={containerVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="w-full h-full"
                    >
                        {subAction === "write" && <WriteComponent />}

                        {subAction === "detail" && <DetailComponent />}
                    </motion.div>
                </AnimatePresence>
            </Screen>

            <BottomSheet
                isOpen={isManageOpen}
                onClose={() => setIsManageOpen(false)}
            >
                <div className="flex flex-col gap-[24px]">
                    <span className="font-p-semibold text-[20px] text-gray-900">
                        메뉴
                    </span>

                    <div className="flex flex-col">
                        <div className="py-[10px] transition-all duration-100 active:scale-95">
                            <div className="flex items-center gap-[12px]">
                                <div className="size-[28px] bg-blue-100 rounded-[6px] flex justify-center items-center">
                                    <span className="font-p-tossface text-[16px]">
                                        📤
                                    </span>
                                </div>

                                <span className="font-p-medium text-[16px] text-gray-900">
                                    공유
                                </span>
                            </div>
                        </div>

                        <div className="py-[10px] transition-all duration-100 active:scale-95">
                            <div className="flex items-center gap-[12px]">
                                <div className="size-[28px] bg-gray-100 rounded-[6px] flex justify-center items-center">
                                    <span className="font-p-tossface text-[16px]">
                                        📝
                                    </span>
                                </div>

                                <span className="font-p-medium text-[16px] text-gray-900">
                                    수정
                                </span>
                            </div>
                        </div>

                        <div className="py-[10px] transition-all duration-100 active:scale-95">
                            <div className="flex items-center gap-[12px]">
                                <div className="size-[28px] bg-gray-100 rounded-[6px] flex justify-center items-center">
                                    <span className="font-p-tossface text-[16px]">
                                        🗑
                                    </span>
                                </div>

                                <span className="font-p-medium text-[16px] text-gray-900">
                                    삭제
                                </span>
                            </div>
                        </div>

                        <div className="py-[10px]">
                            <div className="w-full h-[1px] bg-gray-200" />
                        </div>

                        <div className="py-[10px] transition-all duration-100 active:scale-95">
                            <div className="flex items-center gap-[12px]">
                                <div className="size-[28px] bg-red-100 rounded-[6px] flex justify-center items-center">
                                    <span className="font-p-tossface text-[16px]">
                                        🚨
                                    </span>
                                </div>

                                <span className="font-p-medium text-[16px] text-gray-900">
                                    신고
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </BottomSheet>
        </>
    );
};

export default SubComponent;
