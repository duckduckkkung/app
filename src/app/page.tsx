"use client";

import { ChevronLeftIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { BottomNavigator } from "@/shared/components/bottom-navigator";
import { OverlayHeader } from "@/shared/components/overlay-header";
import { Overlay } from "@/shared/components/overlay";
import { Screen } from "@/shared/components/screen";
import { Loader } from "@/shared/components/loader";
import { Empty } from "@/shared/components/empty";

import { fans as MockFans } from "@/mocks/fans";

import { TypeFan } from "@/shared/types/types";

export default function Home() {
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
        <Overlay isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <Overlay.Parent>
                <Screen>
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
                                <div className="p-[48px_16px] flex flex-col gap-[48px]">
                                    <div className="flex flex-col gap-[8px]">
                                        <div className="w-fit p-[2px_8px] bg-red-50 border border-red-300 rounded-[8px]">
                                            <span className="font-p-medium text-[14px] text-red-700">
                                                🔥 6일 연속 덕질 중
                                            </span>
                                        </div>

                                        <p className="font-p-medium text-[24px] text-gray-900">
                                            좋은 저녁 입니다,{" "}
                                            <b className="font-p-semibold">
                                                ICe1
                                            </b>
                                            님.
                                        </p>
                                    </div>

                                    <div onClick={() => setIsOpen(true)}>
                                        이거 눌러보셈
                                    </div>
                                </div>
                            ) : (
                                <Empty
                                    title="Not Found"
                                    text="결과를 찾지 못했습니다."
                                />
                            )}
                        </motion.div>
                    </AnimatePresence>

                    <BottomNavigator theme="white" focus="home" />
                </Screen>
            </Overlay.Parent>

            <Overlay.Children>
                <Screen>
                    <div className="h-full overflow-y-scroll">
                        <OverlayHeader
                            title="상세"
                            left={{
                                Component: ChevronLeftIcon,
                                onClick: () => setIsOpen(false),
                            }}
                        />

                        <div className="p-[16px] pb-[16px] flex flex-col gap-[24px]">
                            <div className="flex flex-col gap-[8px]">
                                <p className="font-p-semibold text-[24px] text-gray-900">
                                    내 아내임.
                                </p>

                                <p className="font-p-mj text-[18px] text-gray-900">
                                    이것은 설명 입니다 데스요.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-[8px]">
                                <div className="p-[2px_8px] bg-gray-100 rounded-[4px]">
                                    <span className="font-p-medium text-[14px] text-gray-600">
                                        태그하나만
                                    </span>
                                </div>

                                <div className="p-[2px_8px] bg-gray-100 rounded-[4px]">
                                    <span className="font-p-medium text-[14px] text-gray-600">
                                        태그두개
                                    </span>
                                </div>

                                <div className="p-[2px_8px] bg-gray-100 rounded-[4px]">
                                    <span className="font-p-medium text-[14px] text-gray-600">
                                        tag셋
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-[8px] bg-gray-100" />

                        <div className="p-[16px] pb-[16px] overflow-y-scroll flex flex-col gap-[36px]">
                            <p className="font-p-semibold text-[18px] text-gray-900">
                                댓글
                            </p>

                            <div className="flex flex-col gap-[36px]">
                                {Array(42)
                                    .fill(0)
                                    .map((_, index) => (
                                        <div
                                            key={`item-${index}`}
                                            className="flex flex-col gap-[8px]"
                                        >
                                            <p className="font-p-medium text-[16px] text-gray-900">
                                                테스터
                                            </p>

                                            <p className="font-p-mj text-[16px] text-gray-900">
                                                여러분 저 됐어요! 됐다구요!!
                                                <br />
                                                🌈 좆됐어요 💅🏻
                                            </p>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </Screen>
            </Overlay.Children>
        </Overlay>
    );
}
