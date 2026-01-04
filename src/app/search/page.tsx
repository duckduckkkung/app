"use client";

import {
    BookPlusIcon,
    ChevronLeftIcon,
    ImageUpIcon,
    PlusIcon,
    SearchIcon,
    XIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { BottomNavigator } from "@/shared/components/bottom-navigator";
import { OverlayHeader } from "@/shared/components/overlay-header";
import { Overlay } from "@/shared/components/overlay";
import { Footer } from "@/shared/components/footer";
import { Verify } from "@/shared/components/verify";
import { Button } from "@/shared/components/button";
import { Screen } from "@/shared/components/screen";
import { Loader } from "@/shared/components/loader";
import { Input } from "@/shared/components/input";
import { Empty } from "@/shared/components/empty";
import { Tag } from "@/shared/components/tag";

import { fans as MockFans } from "@/mocks/fans";

import { TypeFan } from "@/shared/types/types";

export default function Search() {
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
                <Screen bn>
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
                                    <div className="p-[48px_16px] flex flex-col gap-[24px]">
                                        <div className="flex justify-between items-center">
                                            <p className="font-p-medium text-[24px] text-gray-900">
                                                검색
                                            </p>

                                            <PlusIcon
                                                size={20}
                                                className="stroke-black"
                                                onClick={() => setIsOpen(true)}
                                            />
                                        </div>

                                        <div className="flex items-center gap-[12px]">
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
                                            >
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={fan.imageUrl[0]}
                                                    alt="fan"
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <Empty
                                    title="Not Found"
                                    text="결과를 찾지 못했습니다."
                                />
                            )}
                        </motion.div>
                    </AnimatePresence>

                    <BottomNavigator theme="white" focus="search" />
                </Screen>
            </Overlay.Parent>

            <Overlay.Children>
                <Screen>
                    <div className="h-full overflow-y-scroll">
                        <OverlayHeader
                            title="덕질 생성"
                            left={{
                                Component: ChevronLeftIcon,
                                onClick: () => setIsOpen(false),
                            }}
                        />

                        <div className="p-[24px_16px]">
                            <div className="flex flex-col gap-[32px]">
                                <div className="flex flex-col gap-[8px]">
                                    <div className="flex items-center gap-[4px]">
                                        <span className="font-p-medium text-[16px] text-c-primary">
                                            *
                                        </span>

                                        <span className="font-p-medium text-[16px] text-gray-600">
                                            관심사
                                        </span>
                                    </div>

                                    <Input
                                        type="md"
                                        variants="outline"
                                        value=""
                                        onChange={() => {}}
                                        placeholder="관심사를 입력해 주세요."
                                    />

                                    <div className="flex flex-wrap gap-[8px]">
                                        <Verify
                                            label="한영 대소문자 일본어"
                                            checked={false}
                                        />

                                        <Verify
                                            label="3-20자"
                                            checked={false}
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-[8px]">
                                    <div className="flex items-center gap-[4px]">
                                        <span className="font-p-medium text-[16px] text-gray-400">
                                            (선택)
                                        </span>

                                        <span className="font-p-medium text-[16px] text-gray-600">
                                            짧은 설명
                                        </span>
                                    </div>

                                    <Input
                                        type="md"
                                        variants="outline"
                                        value=""
                                        onChange={() => {}}
                                        placeholder="짧은 설명을 입력해 주세요."
                                    />

                                    <div className="flex flex-wrap gap-[8px]">
                                        <Verify
                                            label="0-60자"
                                            checked={false}
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-[8px]">
                                    <div className="flex items-center gap-[4px]">
                                        <span className="font-p-medium text-[16px] text-gray-400">
                                            (최대 5개)
                                        </span>

                                        <span className="font-p-medium text-[16px] text-gray-600">
                                            특징
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-[6px]">
                                        <Tag
                                            text="특징원"
                                            icon={{
                                                Component: XIcon,
                                            }}
                                        />
                                        <Tag
                                            text="특징투"
                                            icon={{
                                                Component: XIcon,
                                            }}
                                        />
                                    </div>

                                    <div className="flex items-center gap-[12px]">
                                        <Input
                                            type="md"
                                            variants="outline"
                                            value=""
                                            onChange={() => {}}
                                            placeholder="특징을 입력해 주세요."
                                        />

                                        <div className="w-fit">
                                            <Button
                                                type="md_icon"
                                                variants="black"
                                            >
                                                <PlusIcon
                                                    size={16}
                                                    className="stroke-white"
                                                />
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-[8px]">
                                        <Verify
                                            label="2-12자"
                                            checked={false}
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-[8px]">
                                    <div className="flex items-center gap-[4px]">
                                        <span className="font-p-medium text-[16px] text-gray-400">
                                            (최대 4장)
                                        </span>

                                        <span className="font-p-medium text-[16px] text-gray-600">
                                            사진
                                        </span>
                                    </div>

                                    <div className="size-[100px] bg-gray-100 rounded-[12px] flex justify-center items-center">
                                        <ImageUpIcon
                                            size={48}
                                            className="stroke-gray-400"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer bp>
                        <Button type="md" variants="primary">
                            <BookPlusIcon size={20} className="stroke-white" />
                            덕질 생성하기
                        </Button>
                    </Footer>
                </Screen>
            </Overlay.Children>
        </Overlay>
    );
}
