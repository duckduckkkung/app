"use client";

import {
    CheckIcon,
    PlusIcon,
    RotateCcwIcon,
    SearchIcon,
    SlidersHorizontalIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { BottomNavigator } from "@/shared/components/bottom-navigator";
import { PullToRefresh } from "@/shared/components/pull-to-refresh";
import { BottomSheet } from "@/shared/components/bottom-sheet";
import { Overlay } from "@/shared/components/overlay";
import { Button } from "@/shared/components/button";
import { Screen } from "@/shared/components/screen";
import { Loader } from "@/shared/components/loader";
import { Input } from "@/shared/components/input";
import { Empty } from "@/shared/components/empty";

import { FansComponent } from "../fans/components/fans";
import { CreateComponent } from "./components/create";

import { fans as MockFans } from "@/mocks/fans";

import { TypeFan } from "@/shared/types/data";

export default function Search() {
    const [isCreateOpen, setIsCreateOpen] = useState<boolean>(false);
    const [isFanOpen, setIsFanOpen] = useState<boolean>(false);
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

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
            animate: { opacity: 1, transition: { duration: 0.15 } },
            exit: { opacity: 0, transition: { duration: 0.15 } },
        }),
        []
    );

    const [action, setAction] = useState<"select" | "tag" | "goods">("select");

    return (
        <>
            <Overlay isOpen={isFanOpen} onClose={() => setIsFanOpen(false)}>
                <Overlay.Parent>
                    <Overlay
                        isOpen={isCreateOpen}
                        onClose={() => setIsCreateOpen(false)}
                    >
                        <Overlay.Parent>
                            <Screen bn>
                                <PullToRefresh
                                    motionKey={
                                        fans.isFetching ? "fetching" : "fetched"
                                    }
                                    onRefresh={async () => {
                                        setFans({ isFetching: true, data: [] });
                                        setTimeout(
                                            () =>
                                                setFans({
                                                    isFetching: false,
                                                    data: MockFans,
                                                }),
                                            500
                                        );
                                    }}
                                >
                                    {fans.isFetching ? (
                                        <Loader />
                                    ) : fans.data.length > 0 ? (
                                        <>
                                            <div className="p-[48px_16px] flex flex-col gap-[24px]">
                                                <div className="flex justify-between items-center">
                                                    <p className="font-p-medium text-[24px] text-gray-900">
                                                        검색
                                                    </p>

                                                    <PlusIcon
                                                        size={20}
                                                        className="stroke-gray-900"
                                                        onClick={() =>
                                                            setIsCreateOpen(
                                                                true
                                                            )
                                                        }
                                                    />
                                                </div>

                                                <div className="flex items-center gap-[12px]">
                                                    <div className="w-fit">
                                                        <Button
                                                            type="md_icon"
                                                            variants="outline"
                                                            onClick={() =>
                                                                setIsFilterOpen(
                                                                    true
                                                                )
                                                            }
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
                                                        placeholder="검색어 입력..."
                                                    />

                                                    <div className="w-fit">
                                                        <Button
                                                            type="md_icon"
                                                            variants="black"
                                                        >
                                                            <SearchIcon
                                                                size={16}
                                                                className="stroke-white"
                                                            />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-[16px] grid grid-cols-2 gap-[16px]">
                                                {fans.data.map((fan, i) => (
                                                    <div
                                                        key={`img-${i}`}
                                                        className="bg-gray-200 aspect-square rounded-[16px] transition-all duration-100 active:scale-95 overflow-hidden"
                                                        onClick={() =>
                                                            setIsFanOpen(true)
                                                        }
                                                    >
                                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                                        <img
                                                            src={
                                                                fan.imageUrl[0]
                                                            }
                                                            alt="fan"
                                                            className="size-full object-cover"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <Empty />
                                    )}
                                </PullToRefresh>

                                <BottomNavigator theme="light" focus="search" />
                            </Screen>
                        </Overlay.Parent>

                        <Overlay.Children>
                            <CreateComponent
                                onClose={() => setIsCreateOpen(false)}
                            />
                        </Overlay.Children>
                    </Overlay>
                </Overlay.Parent>

                <Overlay.Children>
                    <FansComponent />
                </Overlay.Children>
            </Overlay>

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
                                        onClick={() => setAction("tag")}
                                    >
                                        <div className="flex items-center gap-[12px]">
                                            <div className="size-[28px] bg-blue-100 rounded-[6px] flex justify-center items-center">
                                                <span className="font-p-tossface text-[16px]">
                                                    🔖
                                                </span>
                                            </div>

                                            <span className="font-p-medium text-[16px] text-gray-900">
                                                태그
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        className="py-[10px] transition-all duration-100 active:scale-95"
                                        onClick={() => setAction("goods")}
                                    >
                                        <div className="flex items-center gap-[12px]">
                                            <div className="size-[28px] bg-amber-100 rounded-[6px] flex justify-center items-center">
                                                <span className="font-p-tossface text-[16px]">
                                                    📦
                                                </span>
                                            </div>

                                            <span className="font-p-medium text-[16px] text-gray-900">
                                                굿즈 여부
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

                        {action === "tag" && (
                            <div className="flex flex-col gap-[24px]">
                                <span className="font-p-semibold text-[20px] text-gray-900">
                                    태그
                                </span>

                                <div className="max-h-[30dvh] overflow-y-scroll flex flex-col">
                                    {[
                                        {
                                            value: "tag1",
                                            label: "태그1",
                                        },
                                        {
                                            value: "tag2",
                                            label: "태그2",
                                        },
                                        {
                                            value: "tag3",
                                            label: "태그3",
                                        },
                                        {
                                            value: "tag4",
                                            label: "태그4",
                                        },
                                        {
                                            value: "tag5",
                                            label: "태그5",
                                        },
                                    ].map((option, i) => (
                                        <div
                                            key={option.value}
                                            className="w-full py-[10px] flex gap-[8px] items-center"
                                        >
                                            {i % 2 === 0 && (
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

                        {action === "goods" && (
                            <div className="flex flex-col gap-[24px]">
                                <span className="font-p-semibold text-[20px] text-gray-900">
                                    굿즈 여부
                                </span>

                                <div className="max-h-[30dvh] overflow-y-scroll flex flex-col">
                                    {[
                                        {
                                            value: "all",
                                            label: "모두",
                                        },
                                        {
                                            value: "exists",
                                            label: "있음",
                                        },
                                        {
                                            value: "none",
                                            label: "없음",
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
}
