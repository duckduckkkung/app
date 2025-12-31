"use client";

import { useState } from "react";

import { Overlay } from "@/shared/components/overlay";
import { Screen } from "@/shared/components/screen";

import { useBar } from "@/stores/bar.zustand";
import { ChevronLeftIcon } from "lucide-react";

export default function Home() {
    const bar = useBar();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Overlay isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <Overlay.Parent>
                <Screen>
                    <div className="h-full p-[48px_16px] overflow-y-scroll flex flex-col gap-[64px]">
                        <p className="font-p-medium text-[24px] text-gray-900">
                            안녕하세요, <b className="font-p-semibold">ICe1</b>
                            님.
                        </p>

                        <div className="grid grid-cols-2 gap-[16px]">
                            {Array(42)
                                .fill(0)
                                .map((_, index) => (
                                    <div
                                        key={`item-${index}`}
                                        className="bg-gray-200 rounded-[8px] aspect-1/1"
                                        onClick={() => setIsOpen(true)}
                                    />
                                ))}
                        </div>
                    </div>
                </Screen>
            </Overlay.Parent>

            <Overlay.Children>
                <Screen>
                    <div className="h-full overflow-y-scroll">
                        <div className="sticky top-0 z-[100] bg-white px-[16px] w-full h-[60px] flex justify-between items-center">
                            <ChevronLeftIcon
                                size={24}
                                className="stroke-gray-900"
                                onClick={() => setIsOpen(false)}
                            />

                            <span className="font-p-semibold text-[18px] text-gray-900">
                                상세
                            </span>

                            <div className="size-[24px]" />
                        </div>

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
