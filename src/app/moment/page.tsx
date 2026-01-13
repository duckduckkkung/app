"use client";

import {
    EllipsisIcon,
    HeartIcon,
    MessageCircleMoreIcon,
    PlusIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

import { BottomNavigator } from "@/shared/components/bottom-navigator";
import { PullToRefresh } from "@/shared/components/pull-to-refresh";
import { OverlayHeader } from "@/shared/components/overlay-header";
import { BottomSheet } from "@/shared/components/bottom-sheet";
import { Comments } from "@/shared/components/comments";
import { Screen } from "@/shared/components/screen";
import { Loader } from "@/shared/components/loader";
import { Empty } from "@/shared/components/empty";

import { moments as MockMoments } from "@/mocks/moments";

import { TypeMoment } from "@/shared/types/data";

export default function Moment() {
    const [isCommentOpen, setIsCommentOpen] = useState<boolean>(false);
    const [isMoreOpen, setIsMoreOpen] = useState<boolean>(false);

    const [moments, setMoments] = useState<{
        isFetching: boolean;
        data: TypeMoment[];
    }>({
        isFetching: true,
        data: [],
    });
    useEffect(() => {
        setTimeout(
            () => setMoments({ isFetching: false, data: MockMoments }),
            500
        );
    }, []);

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
        <>
            <Screen className="bg-gray-900" bn>
                <PullToRefresh
                    motionKey={moments.isFetching ? "fetching" : "fetched"}
                    onRefresh={async () => {
                        setMoments({ isFetching: true, data: [] });
                        setTimeout(
                            () =>
                                setMoments({
                                    isFetching: false,
                                    data: MockMoments,
                                }),
                            500
                        );
                    }}
                >
                    {moments.isFetching ? (
                        <Loader />
                    ) : moments.data.length > 0 ? (
                        <>
                            <OverlayHeader theme="dark" title="모먼트" />

                            <div className="absolute z-100 bottom-0 p-[16px]">
                                <div className="flex flex-col gap-[24px]">
                                    <div className="flex items-center gap-[16px]">
                                        <div className="flex items-center gap-[10px]">
                                            <div className="size-[24px] bg-white rounded-[4px]" />

                                            <span className="font-p-medium text-[18px] text-white leading-none translate-y-[.5px]">
                                                테스터
                                            </span>
                                        </div>

                                        <div className="p-[6px_8px] border border-white rounded-[6px] flex items-center gap-[8px] transition-all duration-100 active:scale-95">
                                            <PlusIcon
                                                size={14}
                                                className="stroke-white"
                                            />

                                            <span className="font-p-medium text-[14px] text-white leading-none">
                                                팔로우
                                            </span>
                                        </div>
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
                                    <div className="flex flex-col gap-[24px]">
                                        <div className="flex flex-col items-center gap-[10px] transition-all duration-100 active:scale-95">
                                            <HeartIcon
                                                size={32}
                                                className="stroke-white"
                                            />

                                            <span className="font-p-gmsm text-[14px] text-white">
                                                12K
                                            </span>
                                        </div>

                                        <div
                                            className="flex flex-col items-center gap-[10px] transition-all duration-100 active:scale-95"
                                            onClick={() =>
                                                setIsCommentOpen(true)
                                            }
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

                                    <EllipsisIcon
                                        size={32}
                                        className="stroke-white transition-all duration-100 active:scale-95"
                                        onClick={() => setIsMoreOpen(true)}
                                    />
                                </div>
                            </div>
                        </>
                    ) : (
                        <Empty />
                    )}
                </PullToRefresh>

                <BottomNavigator theme="dark" focus="moment" />
            </Screen>

            <BottomSheet
                isOpen={isCommentOpen}
                onClose={() => setIsCommentOpen(false)}
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

            <BottomSheet
                isOpen={isMoreOpen}
                onClose={() => setIsMoreOpen(false)}
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
                                        ⛓
                                    </span>
                                </div>

                                <span className="font-p-medium text-[16px] text-gray-900">
                                    링크 복사
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
}
