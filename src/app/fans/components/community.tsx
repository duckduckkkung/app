"use client";

import {
    CheckIcon,
    ChevronLeftIcon,
    PlusIcon,
    RotateCcwIcon,
    SearchIcon,
    SlidersHorizontalIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useMemo } from "react";

import { OverlayHeader } from "@/shared/components/overlay-header";
import { BottomSheet } from "@/shared/components/bottom-sheet";
import { Screen } from "@/shared/components/screen";
import { Button } from "@/shared/components/button";
import { Footer } from "@/shared/components/footer";
import { Input } from "@/shared/components/input";

import { useSettingsProps } from "../stores/props.zustand";

import { fans as MockFans } from "@/mocks/fans";

export const CommunityComponent = () => {
    const { setIsCommunityOpen } = useSettingsProps();

    const fan = MockFans[0];

    const containerVariants = useMemo(
        () => ({
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { duration: 0.15 } },
            exit: { opacity: 0, transition: { duration: 0.15 } },
        }),
        [],
    );

    const [action, setAction] = useState<
        "select" | "sort" | "type" | "category"
    >("select");
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

    return (
        <>
            <Screen bf={80}>
                <div className="w-full h-full overflow-y-scroll">
                    <OverlayHeader
                        title="커뮤니티"
                        left={{
                            Component: ChevronLeftIcon,
                            onClick: () => setIsCommunityOpen(false),
                        }}
                    />

                    <div className="p-[24px_16px]">
                        <div className="flex flex-col gap-[24px]">
                            <div className="flex items-center gap-[8px]">
                                <span className="font-p-semibold text-[24px] text-gray-900">
                                    {fan.name}
                                </span>

                                <span className="font-p-medium text-[24px] text-gray-900">
                                    커뮤니티
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-[32px]">
                                <div className="flex flex-col gap-[4px]">
                                    <p className="font-p-regular text-[16px] text-gray-400">
                                        관리자
                                    </p>

                                    <span className="font-p-medium text-[18px] text-gray-900">
                                        엄준식
                                    </span>
                                </div>

                                <div className="flex flex-col gap-[4px]">
                                    <p className="font-p-regular text-[16px] text-gray-400">
                                        멤버
                                    </p>

                                    <span className="font-p-medium text-[18px] text-gray-900">
                                        1,004명
                                    </span>
                                </div>

                                <div className="flex flex-col gap-[4px]">
                                    <p className="font-p-regular text-[16px] text-gray-400">
                                        게시글
                                    </p>

                                    <span className="font-p-medium text-[18px] text-gray-900">
                                        3,987개
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full overflow-x-hidden">
                        <div className="p-[16px]">
                            <div className="flex items-center gap-[12px]">
                                <div className="w-fit">
                                    <Button
                                        type="md_icon"
                                        variants="outline"
                                        onClick={() => setIsFilterOpen(true)}
                                    >
                                        <SlidersHorizontalIcon
                                            size={16}
                                            className="stroke-gray-900"
                                        />
                                    </Button>
                                </div>

                                <Input
                                    type="md"
                                    variants="outline"
                                    value=""
                                    onChange={() => {}}
                                    placeholder="제목 또는 작성자 입력..."
                                />

                                <div className="w-fit">
                                    <Button type="md_icon" variants="black">
                                        <SearchIcon
                                            size={16}
                                            className="stroke-white"
                                        />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="p-[16px]">
                            <div className="flex flex-col gap-[32px]">
                                <div className="flex flex-col gap-[8px] transition-all duration-150 active:scale-95">
                                    <div className="flex flex-col gap-[4px]">
                                        <span
                                            className="text-[16px] text-gray-600"
                                            style={{
                                                fontFamily:
                                                    "var(--font-p-regular), var(--font-p-tossface)",
                                            }}
                                        >
                                            🖼️ 사진관
                                        </span>

                                        <span className="font-p-medium text-[18px] text-gray-900">
                                            2026.4 단독 콘서트 / 사진 몇장
                                        </span>
                                    </div>

                                    <div className="flex flex-col gap-[8px]">
                                        <hr className="border-gray-300" />

                                        <div className="flex justify-between items-center">
                                            <span className="font-p-regular text-[14px] text-gray-400">
                                                극악무도한하영사랑꾼
                                            </span>

                                            <span className="font-p-regular text-[14px] text-gray-400">
                                                2분 전
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-[8px] transition-all duration-150 active:scale-95">
                                    <div className="flex flex-col gap-[4px]">
                                        <span
                                            className="text-[16px] text-gray-600"
                                            style={{
                                                fontFamily:
                                                    "var(--font-p-regular), var(--font-p-tossface)",
                                            }}
                                        >
                                            🤖 AI 코딩 대회
                                        </span>

                                        <span className="font-p-medium text-[18px] text-gray-900">
                                            이건좀...
                                        </span>
                                    </div>

                                    <div className="flex flex-col gap-[8px]">
                                        <hr className="border-gray-300" />

                                        <div className="flex justify-between items-center">
                                            <span className="font-p-regular text-[14px] text-gray-400">
                                                엄준식이
                                            </span>

                                            <span className="font-p-regular text-[14px] text-gray-400">
                                                1시간 전
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-[8px] transition-all duration-150 active:scale-95">
                                    <div className="flex flex-col gap-[4px]">
                                        <span
                                            className="text-[16px] text-gray-600"
                                            style={{
                                                fontFamily:
                                                    "var(--font-p-regular), var(--font-p-tossface)",
                                            }}
                                        >
                                            🌍 월드에는
                                        </span>

                                        <span className="font-p-medium text-[18px] text-gray-900">
                                            어쩌구뉴스 - 한강 고양이 입양 확정
                                        </span>
                                    </div>

                                    <div className="flex flex-col gap-[8px]">
                                        <hr className="border-gray-300" />

                                        <div className="flex justify-between items-center">
                                            <span className="font-p-regular text-[14px] text-gray-400">
                                                그닉네임은이미있단다
                                            </span>

                                            <span className="font-p-regular text-[14px] text-gray-400">
                                                2일 전
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-[8px] transition-all duration-150 active:scale-95">
                                    <div className="flex flex-col gap-[4px]">
                                        <span
                                            className="text-[16px] text-gray-600"
                                            style={{
                                                fontFamily:
                                                    "var(--font-p-regular), var(--font-p-tossface)",
                                            }}
                                        >
                                            💼 회사원들
                                        </span>

                                        <span className="font-p-medium text-[18px] text-gray-900">
                                            뺑이쳐라
                                        </span>
                                    </div>

                                    <div className="flex flex-col gap-[8px]">
                                        <hr className="border-gray-300" />

                                        <div className="flex justify-between items-center">
                                            <span className="font-p-regular text-[14px] text-gray-400">
                                                들었으면출발
                                            </span>

                                            <span className="font-p-regular text-[14px] text-gray-400">
                                                2026.1
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer bp>
                    <Button type="md" variants="black">
                        <PlusIcon size={20} className="stroke-white" />
                        게시글 쓰기
                    </Button>
                </Footer>
            </Screen>

            <BottomSheet
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={action}
                        variants={containerVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="w-full h-full"
                        layout
                    >
                        {action === "select" && (
                            <div className="flex flex-col gap-[24px]">
                                <span className="font-p-semibold text-[20px] text-gray-900">
                                    필터
                                </span>

                                <div className="flex flex-col">
                                    <div
                                        className="py-[10px] transition-all duration-100 active:scale-95"
                                        onClick={() => setAction("sort")}
                                    >
                                        <div className="flex items-center gap-[12px]">
                                            <div className="size-[28px] bg-amber-100 rounded-[6px] flex justify-center items-center">
                                                <span className="font-p-tossface text-[16px]">
                                                    🗃
                                                </span>
                                            </div>

                                            <span className="font-p-medium text-[16px] text-gray-900">
                                                정렬
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        className="py-[10px] transition-all duration-100 active:scale-95"
                                        onClick={() => setAction("type")}
                                    >
                                        <div className="flex items-center gap-[12px]">
                                            <div className="size-[28px] bg-blue-100 rounded-[6px] flex justify-center items-center">
                                                <span className="font-p-tossface text-[16px]">
                                                    🧩
                                                </span>
                                            </div>

                                            <span className="font-p-medium text-[16px] text-gray-900">
                                                유형
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        className="py-[10px] transition-all duration-100 active:scale-95"
                                        onClick={() => setAction("category")}
                                    >
                                        <div className="flex items-center gap-[12px]">
                                            <div className="size-[28px] bg-gray-100 rounded-[6px] flex justify-center items-center">
                                                <span className="font-p-tossface text-[16px]">
                                                    📚
                                                </span>
                                            </div>

                                            <span className="font-p-medium text-[16px] text-gray-900">
                                                말머리
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-[6px]">
                                    <Button type="md" variants="black">
                                        <RotateCcwIcon
                                            size={20}
                                            className="stroke-white"
                                        />
                                        초기화
                                    </Button>

                                    <div
                                        className="py-[8px] w-full flex justify-center items-center transition-all duration-100 active:scale-95"
                                        onClick={() => setIsFilterOpen(false)}
                                    >
                                        <span className="font-p-medium text-[14px] text-gray-600">
                                            취소하기
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {action === "sort" && (
                            <div className="flex flex-col gap-[24px]">
                                <span className="font-p-semibold text-[20px] text-gray-900">
                                    정렬
                                </span>

                                <div className="max-h-[30dvh] overflow-y-scroll flex flex-col">
                                    {[
                                        {
                                            value: "none",
                                            label: "없음",
                                        },
                                        {
                                            value: "date",
                                            label: "날짜순",
                                        },
                                        {
                                            value: "view",
                                            label: "인기순",
                                        },
                                    ].map((option, i) => (
                                        <div
                                            key={option.value}
                                            className="w-full py-[10px] flex gap-[8px] items-center"
                                        >
                                            {i === 0 && (
                                                <CheckIcon
                                                    size={16}
                                                    className="stroke-gray-900"
                                                />
                                            )}

                                            <span className="font-p-medium text-[16px] text-gray-900">
                                                {option.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col gap-[6px]">
                                    <Button
                                        type="md"
                                        variants="black"
                                        onClick={() => setAction("select")}
                                    >
                                        <CheckIcon
                                            size={20}
                                            className="stroke-white"
                                        />
                                        적용하기
                                    </Button>

                                    <div
                                        className="py-[8px] w-full flex justify-center items-center transition-all duration-100 active:scale-95"
                                        onClick={() => setAction("select")}
                                    >
                                        <span className="font-p-medium text-[14px] text-gray-600">
                                            이전으로
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {action === "type" && (
                            <div className="flex flex-col gap-[24px]">
                                <span className="font-p-semibold text-[20px] text-gray-900">
                                    유형
                                </span>

                                <div className="max-h-[30dvh] overflow-y-scroll flex flex-col">
                                    {[
                                        {
                                            value: "basic",
                                            label: "일반",
                                        },
                                        {
                                            value: "announcement",
                                            label: "공지사항",
                                        },
                                    ].map((option, i) => (
                                        <div
                                            key={option.value}
                                            className="w-full py-[10px] flex gap-[8px] items-center"
                                        >
                                            {i === 0 && (
                                                <CheckIcon
                                                    size={16}
                                                    className="stroke-gray-900"
                                                />
                                            )}

                                            <span className="font-p-medium text-[16px] text-gray-900">
                                                {option.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col gap-[6px]">
                                    <Button
                                        type="md"
                                        variants="black"
                                        onClick={() => setAction("select")}
                                    >
                                        <CheckIcon
                                            size={20}
                                            className="stroke-white"
                                        />
                                        적용하기
                                    </Button>

                                    <div
                                        className="py-[8px] w-full flex justify-center items-center transition-all duration-100 active:scale-95"
                                        onClick={() => setAction("select")}
                                    >
                                        <span className="font-p-medium text-[14px] text-gray-600">
                                            이전으로
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {action === "category" && (
                            <div className="flex flex-col gap-[24px]">
                                <span className="font-p-semibold text-[20px] text-gray-900">
                                    말머리
                                </span>

                                <div className="max-h-[30dvh] overflow-y-scroll flex flex-col">
                                    {[
                                        {
                                            value: "all",
                                            label: "모두",
                                        },
                                        {
                                            value: "cat1",
                                            label: "🖼️ 사진관",
                                        },
                                        {
                                            value: "cat2",
                                            label: "🤖 AI 코딩 대회",
                                        },
                                        {
                                            value: "cat3",
                                            label: "🌍 월드에는",
                                        },
                                        {
                                            value: "cat4",
                                            label: "💼 회사원들",
                                        },
                                    ].map((option, i) => (
                                        <div
                                            key={option.value}
                                            className="w-full py-[10px] flex gap-[8px] items-center"
                                        >
                                            {i === 0 && (
                                                <CheckIcon
                                                    size={16}
                                                    className="stroke-gray-900"
                                                />
                                            )}

                                            <span className="font-p-medium text-[16px] text-gray-900">
                                                {option.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col gap-[6px]">
                                    <Button
                                        type="md"
                                        variants="black"
                                        onClick={() => setAction("select")}
                                    >
                                        <CheckIcon
                                            size={20}
                                            className="stroke-white"
                                        />
                                        적용하기
                                    </Button>

                                    <div
                                        className="py-[8px] w-full flex justify-center items-center transition-all duration-100 active:scale-95"
                                        onClick={() => setAction("select")}
                                    >
                                        <span className="font-p-medium text-[14px] text-gray-600">
                                            이전으로
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </BottomSheet>
        </>
    );
};

export default CommunityComponent;
