"use client";

import {
    HeartIcon,
    MessageCircleMoreIcon,
    MessageCircleWarningIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { BottomNavigator } from "@/shared/components/bottom-navigator";
import { OverlayHeader } from "@/shared/components/overlay-header";
import { BottomSheet } from "@/shared/components/bottom-sheet";
import { Comments } from "@/shared/components/comments";
import { Screen } from "@/shared/components/screen";
import { Loader } from "@/shared/components/loader";
import { Empty } from "@/shared/components/empty";

import { fans as MockFans } from "@/mocks/fans";

import { TypeFan } from "@/shared/types/data";

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

    const comments = [
        {
            id: "asdf",
            writer: {
                name: "엄준식",
                profileImage: "",
            },
            heartCount: 71,
            content: "너무 이ㅃ",
            subComment: [
                {
                    id: "asdfgh",
                    writer: {
                        name: "극악무도한하영사랑꾼",
                        profileImage: "",
                    },
                    heartCount: 28,
                    content: "이분 끝내 돌아가셨습니다.",
                    subComment: [],
                },
                {
                    id: "asdfghj",
                    writer: {
                        name: "이야이",
                        profileImage: "",
                    },
                    heartCount: 2,
                    content: "ㅋㅋㅋㅋㅋㅋㅋㅋ",
                    subComment: [],
                },
            ],
        },
        {
            id: "asdfghjk",
            writer: {
                name: "극악무도한하영사랑꾼",
                profileImage: "",
            },
            heartCount: 6,
            content: "와 진짜 귀엽다",
            subComment: [],
        },
        {
            id: "asdfghjkl",
            writer: {
                name: "피융",
                profileImage: "",
            },
            heartCount: 0,
            content: "이분머임???",
            subComment: [],
        },
        {
            id: "asdfghjkl;",
            writer: {
                name: "오이거는첨봄",
                profileImage: "",
            },
            heartCount: 0,
            content: "밍끼야아아아악",
            subComment: [],
        },
    ];

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
                                    <div className="flex items-center gap-[8px]">
                                        <span className="font-p-semibold text-[20px] text-gray-900">
                                            댓글
                                        </span>

                                        <span className="font-p-gmsm text-[18px] text-gray-400 translate-y-[2px] leading-none">
                                            {comments.length}
                                        </span>
                                    </div>

                                    <Comments comments={comments} />
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
