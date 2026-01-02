"use client";

import {
    ChevronLeftIcon,
    ClapperboardIcon,
    Layers2Icon,
    StickyNoteIcon,
    UserRoundIcon,
} from "lucide-react";
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

export default function Feed() {
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
                                    <p className="font-p-medium text-[24px] text-gray-900">
                                        피드
                                    </p>

                                    <div className="flex flex-col gap-[8px]">
                                        <p className="font-p-regular text-[16px] text-gray-400">
                                            덕질 최신 정보
                                        </p>

                                        <div className="flex flex-col gap-[16px]">
                                            <div
                                                className="flex flex-col gap-[4px] transition-all duration-250 active:scale-95"
                                                onClick={() => setIsOpen(true)}
                                            >
                                                <div className="flex justify-between items-center">
                                                    <p className="truncate flex-1 font-p-medium text-[20px] text-gray-900">
                                                        송하영
                                                    </p>

                                                    <div className="shrink-0 flex items-center gap-[24px] flex-wrap">
                                                        <div className="flex items-center gap-[8px]">
                                                            <UserRoundIcon
                                                                size={16}
                                                                className="stroke-gray-900"
                                                            />

                                                            <span className="font-p-gmsm text-[14px] text-gray-900">
                                                                + 1,192
                                                            </span>
                                                        </div>

                                                        <div className="flex items-center gap-[8px]">
                                                            <StickyNoteIcon
                                                                size={16}
                                                                className="stroke-gray-900"
                                                            />

                                                            <span className="font-p-gmsm text-[14px] text-gray-900">
                                                                + 34
                                                            </span>
                                                        </div>

                                                        <div className="flex items-center gap-[8px]">
                                                            <ClapperboardIcon
                                                                size={16}
                                                                className="stroke-gray-900"
                                                            />

                                                            <span className="font-p-gmsm text-[14px] text-gray-900">
                                                                + 812
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="w-full overflow-x-scroll">
                                                    <div className="flex gap-[8px]">
                                                        <div className="shrink-0 w-fit p-[2px_8px] bg-gray-100 rounded-[4px] flex items-center gap-[4px]">
                                                            <span className="font-p-medium text-[14px] text-gray-600">
                                                                새로운 굿즈
                                                            </span>
                                                        </div>

                                                        <div className="shrink-0 w-fit p-[2px_8px] bg-gray-100 rounded-[4px] flex items-center gap-[4px]">
                                                            <span className="font-p-medium text-[14px] text-gray-600">
                                                                인기 7% 상승
                                                            </span>
                                                        </div>

                                                        <div className="shrink-0 w-fit p-[2px_8px] bg-gray-100 rounded-[4px] flex items-center gap-[4px]">
                                                            <span className="font-p-medium text-[14px] text-gray-600">
                                                                업데이트된 정보
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="flex flex-col gap-[4px] transition-all duration-250 active:scale-95"
                                                onClick={() => setIsOpen(true)}
                                            >
                                                <div className="flex justify-between items-center">
                                                    <p className="truncate font-p-medium text-[20px] text-gray-900">
                                                        이세계아이돌
                                                    </p>

                                                    <div className="shrink-0 flex items-center gap-[24px] flex-wrap">
                                                        <div className="flex items-center gap-[8px]">
                                                            <UserRoundIcon
                                                                size={16}
                                                                className="stroke-gray-900"
                                                            />

                                                            <span className="font-p-gmsm text-[14px] text-gray-900">
                                                                + 310
                                                            </span>
                                                        </div>

                                                        <div className="flex items-center gap-[8px]">
                                                            <StickyNoteIcon
                                                                size={16}
                                                                className="stroke-gray-900"
                                                            />

                                                            <span className="font-p-gmsm text-[14px] text-gray-900">
                                                                + 4,312
                                                            </span>
                                                        </div>

                                                        <div className="flex items-center gap-[8px]">
                                                            <ClapperboardIcon
                                                                size={16}
                                                                className="stroke-gray-900"
                                                            />

                                                            <span className="font-p-gmsm text-[14px] text-gray-900">
                                                                + 106
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="w-full overflow-x-scroll">
                                                    <div className="flex gap-[8px]">
                                                        <div className="shrink-0 w-fit p-[2px_8px] bg-gray-100 rounded-[4px] flex items-center gap-[4px]">
                                                            <span className="font-p-medium text-[14px] text-gray-600">
                                                                새로운 공연 일정
                                                            </span>
                                                        </div>

                                                        <div className="shrink-0 w-fit p-[2px_8px] bg-gray-100 rounded-[4px] flex items-center gap-[4px]">
                                                            <span className="font-p-medium text-[14px] text-gray-600">
                                                                인기 4% 상승
                                                            </span>
                                                        </div>

                                                        <div className="shrink-0 w-fit p-[2px_8px] bg-gray-100 rounded-[4px] flex items-center gap-[4px]">
                                                            <span className="font-p-medium text-[14px] text-gray-600">
                                                                업데이트된 정보
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-[8px]">
                                        <p className="font-p-regular text-[16px] text-gray-400">
                                            ICe1님의 덕질 출석률
                                        </p>

                                        <div className="flex flex-col gap-[16px]">
                                            <div
                                                className="flex flex-col gap-[4px] transition-all duration-250 active:scale-95"
                                                onClick={() => setIsOpen(true)}
                                            >
                                                <div className="flex justify-between items-center">
                                                    <p className="truncate flex-1 font-p-medium text-[20px] text-gray-900">
                                                        송하영
                                                    </p>

                                                    <div className="shrink-0 flex items-center gap-[24px] flex-wrap">
                                                        <div className="flex items-center gap-[8px]">
                                                            <Layers2Icon
                                                                size={16}
                                                                className="stroke-gray-900"
                                                            />

                                                            <span className="font-p-gmsm text-[14px] text-gray-900">
                                                                + 30
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="shrink-0 w-fit p-[2px_8px] bg-gray-100 rounded-[4px] flex items-center gap-[4px]">
                                                    <span className="font-p-medium text-[14px] text-gray-600">
                                                        지난 달 보다 방문 횟수가
                                                        40% 증가했어요.
                                                    </span>
                                                </div>
                                            </div>

                                            <div
                                                className="flex flex-col gap-[4px] transition-all duration-250 active:scale-95"
                                                onClick={() => setIsOpen(true)}
                                            >
                                                <div className="flex justify-between items-center">
                                                    <p className="truncate flex-1 font-p-medium text-[20px] text-gray-900">
                                                        이세계아이돌
                                                    </p>

                                                    <div className="shrink-0 flex items-center gap-[24px] flex-wrap">
                                                        <div className="flex items-center gap-[8px]">
                                                            <Layers2Icon
                                                                size={16}
                                                                className="stroke-gray-900"
                                                            />

                                                            <span className="font-p-gmsm text-[14px] text-gray-900">
                                                                + 29
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="shrink-0 w-fit p-[2px_8px] bg-gray-100 rounded-[4px] flex items-center gap-[4px]">
                                                    <span className="font-p-medium text-[14px] text-gray-600">
                                                        지난 달 보다 방문 횟수가
                                                        3% 감소했어요.
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-[8px]">
                                        <p className="font-p-regular text-[16px] text-gray-400">
                                            명예의 전당
                                        </p>

                                        <div className="flex flex-col gap-[16px]">
                                            <div className="flex flex-col gap-[8px]">
                                                <p className="truncate flex-1 font-p-medium text-[20px] text-gray-900">
                                                    송하영
                                                </p>

                                                <div className="grid grid-cols-3 gap-[8px]">
                                                    {Array(16)
                                                        .fill(0)
                                                        .map((_, i) => (
                                                            <div
                                                                key={`img-${i}`}
                                                                className="bg-gray-200 aspect-1/1 rounded-[8px] transition-all duration-250 active:scale-95"
                                                                onClick={() =>
                                                                    setIsOpen(
                                                                        true
                                                                    )
                                                                }
                                                            />
                                                        ))}
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-[8px]">
                                                <p className="truncate flex-1 font-p-medium text-[20px] text-gray-900">
                                                    이세계아이돌
                                                </p>

                                                <div className="grid grid-cols-3 gap-[8px]">
                                                    {Array(15)
                                                        .fill(0)
                                                        .map((_, i) => (
                                                            <div
                                                                key={`img-${i}`}
                                                                className="bg-gray-200 aspect-1/1 rounded-[8px] transition-all duration-250 active:scale-95"
                                                                onClick={() =>
                                                                    setIsOpen(
                                                                        true
                                                                    )
                                                                }
                                                            />
                                                        ))}
                                                </div>
                                            </div>
                                        </div>
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

                    <BottomNavigator theme="white" focus="feed" />
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
