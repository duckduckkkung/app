"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { BottomNavigator } from "@/shared/components/bottom-navigator";
import { Screen } from "@/shared/components/screen";
import { Loader } from "@/shared/components/loader";
import { Empty } from "@/shared/components/empty";

import { fans as MockFans } from "@/mocks/fans";

import { TypeFan } from "@/shared/types/types";
import { OverlayHeader } from "@/shared/components/overlay-header";
import { BottomSheet } from "@/shared/components/bottom-sheet";
import {
    HeartIcon,
    MessageCircleMoreIcon,
    MessageCircleWarningIcon,
} from "lucide-react";

export default function Moment() {
    const [isOpen, setIsOpen] = useState(false);

    const [fans, setFans] = useState<{ isFetching: boolean; data: TypeFan[] }>({
        isFetching: true,
        data: [],
    });
    useEffect(() => {
        setTimeout(() => setFans({ isFetching: false, data: MockFans }), 500);
    }, []);

    const containerVariants = useMemo(
        () => ({
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { duration: 0.1 } },
            exit: { opacity: 0, transition: { duration: 0.1 } },
        }),
        []
    );

    return (
        <Screen className="bg-gray-900">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={fans.isFetching ? "fetching" : "fetched"}
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="relative w-full h-full overflow-y-scroll"
                >
                    {fans.isFetching ? (
                        <Loader />
                    ) : fans.data.length > 0 ? (
                        <>
                            <OverlayHeader theme="dark" title="모먼트" />

                            <div className="absolute z-100 bottom-[75px] p-[16px]">
                                <div className="flex flex-col gap-[24px]">
                                    <div className="flex items-center gap-[10px]">
                                        <div className="size-[24px] bg-white rounded-[4px]" />

                                        <span className="font-p-medium text-[16px] text-white">
                                            테스터
                                        </span>
                                    </div>

                                    <div className="flex flex-col gap-[8px]">
                                        <span className="font-p-semibold text-[24px] text-white">
                                            제목
                                        </span>

                                        <span className="font-p-regular text-[18px] text-white">
                                            설명입니다.
                                            <br />
                                            이것은 디스크립션입니다.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute z-100 top-[50%] right-[24px] -translate-y-[50%]">
                                <div className="flex flex-col gap-[48px]">
                                    <div className="flex flex-col gap-[16px]">
                                        <div className="flex flex-col items-center gap-[8px] transition-all duration-100 active:scale-95">
                                            <HeartIcon
                                                size={32}
                                                className="stroke-white"
                                            />

                                            <span className="font-p-gmsm text-[14px] text-white">
                                                12K
                                            </span>
                                        </div>

                                        <div
                                            className="flex flex-col items-center gap-[8px] transition-all duration-100 active:scale-95"
                                            onClick={() => setIsOpen(true)}
                                        >
                                            <MessageCircleMoreIcon
                                                size={32}
                                                className="stroke-white"
                                            />

                                            <span className="font-p-gmsm text-[14px] text-white">
                                                4M
                                            </span>
                                        </div>
                                    </div>

                                    <MessageCircleWarningIcon
                                        size={32}
                                        className="stroke-white transition-all duration-100 active:scale-95"
                                    />
                                </div>
                            </div>

                            <BottomSheet
                                isOpen={isOpen}
                                onClose={() => setIsOpen(false)}
                            >
                                <div className="flex flex-col gap-[24px]">
                                    <p className="font-p-semibold text-[20px] text-gray-900">
                                        댓글
                                    </p>

                                    <p className="font-p-mj text-[16px] text-gray-900">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed cursus, nisl vitae
                                        sagittis mollis, magna urna posuere
                                        ipsum, non aliquet massa nisl nec dui.
                                        Curabitur vitae nunc molestie, vehicula
                                        odio sed, gravida lacus. Donec ac urna
                                        libero. Suspendisse sit amet sapien et
                                        mi commodo elementum. Phasellus vitae
                                        mauris vitae ex faucibus hendrerit in
                                        vitae ipsum. Ut malesuada lectus ut erat
                                        iaculis, et pellentesque nibh molestie.
                                        Vestibulum porttitor eros tellus. Nam
                                        volutpat magna erat, quis iaculis massa
                                        sagittis sit amet. Pellentesque habitant
                                        morbi tristique senectus et netus et
                                        malesuada fames ac turpis egestas.
                                        Pellentesque vestibulum diam lacinia
                                        ultrices egestas. Orci varius natoque
                                        penatibus et magnis dis parturient
                                        montes, nascetur ridiculus mus. Ut
                                        maximus ipsum vel mauris congue
                                        scelerisque a quis dolor. Duis molestie,
                                        metus sit amet convallis sodales, ante
                                        tellus suscipit nulla, vitae aliquet
                                        purus metus non risus. Vivamus viverra
                                        urna libero, sed maximus nunc tristique
                                        vitae.
                                    </p>
                                </div>
                            </BottomSheet>
                        </>
                    ) : (
                        <Empty
                            title="Not Found"
                            text="결과를 찾지 못했습니다."
                        />
                    )}
                </motion.div>
            </AnimatePresence>

            <BottomNavigator theme="dark" focus="moment" />
        </Screen>
    );
}
