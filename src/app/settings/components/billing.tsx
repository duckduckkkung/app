import { ChevronLeftIcon, ListCheckIcon, Trash2Icon } from "lucide-react";
import { useState } from "react";

import { OverlayHeader } from "@/shared/components/overlay-header";
import { Card, TypeCard } from "@/shared/components/card";
import { Button } from "@/shared/components/button";
import { Footer } from "@/shared/components/footer";
import { Tag } from "@/shared/components/tag";

import { useSettingsProps } from "../stores/props.zustand";

export const BillingComponent = () => {
    const { setAction, setIsOpen } = useSettingsProps();

    const cards: TypeCard[] = [
        {
            id: "1",
            bank: "kakaobank",
            name: "고서온 (mini) 5327",
            cardNumber: "5327XXXXXXXX568X",
            default: true,
        },
        {
            id: "2",
            bank: "nhbank",
            name: "자립예탁금",
            cardNumber: "3011XXXXXXXX409X",
            default: false,
        },
        {
            id: "3",
            bank: "shbank",
            name: "비상금",
            cardNumber: "9399XXXXXXXX193X",
            default: false,
        },
        {
            id: "4",
            bank: "tossbank",
            name: "토스뱅크 통장",
            cardNumber: "1245XXXXXXXX491X",
            default: false,
        },
        {
            id: "5",
            bank: "wooribank",
            name: "학교카드 (WON)",
            cardNumber: "3000XXXXXXXX468X",
            default: false,
        },
    ];

    const [selectedCard, setSelectedCard] = useState<TypeCard | null>(cards[0]);

    const handleCardScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const container = e.currentTarget;
        const scrollLeft = container.scrollLeft;
        const cardWidth =
            container.querySelector('div[class*="snap-center"]')?.clientWidth ||
            0;
        const gap = 16;
        const padding = 24;

        const index = Math.round(
            (scrollLeft - padding + cardWidth / 2) / (cardWidth + gap)
        );
        const clampedIndex = Math.max(0, Math.min(index, cards.length - 1));
        const card = cards[clampedIndex];

        if (card.id !== selectedCard?.id) {
            setSelectedCard(card);
        }
    };

    return (
        <>
            <div className="h-full overflow-y-scroll">
                <OverlayHeader
                    title="청구"
                    left={{
                        Component: ChevronLeftIcon,
                        onClick: () => setIsOpen(false),
                    }}
                />

                <div
                    className="py-[24px] w-full overflow-x-scroll snap-x snap-mandatory hidden-scrollbar"
                    onScroll={handleCardScroll}
                >
                    <div className="w-fit flex gap-[16px] px-[24px]">
                        {cards.map((card, index) => (
                            <div key={index} className="snap-center">
                                <Card
                                    bank={card.bank}
                                    cardNumber={card.cardNumber}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-[16px]">
                    <div className="flex flex-col gap-[16px]">
                        <div className="flex flex-col">
                            <span className="font-p-medium text-[18px] text-gray-400">
                                {selectedCard?.bank}
                            </span>

                            <span className="font-p-semibold text-[24px] text-gray-900">
                                {selectedCard?.name}
                            </span>
                        </div>

                        {selectedCard?.default && <Tag text="기본 결제수단" />}
                    </div>
                </div>

                <div className="w-full h-[8px] bg-gray-100" />

                <div className="p-[16px]">
                    <div className="flex flex-col gap-[24px]">
                        <div className="flex flex-col gap-[4px]">
                            <p className="font-p-regular text-[16px] text-gray-400">
                                다음 결제일
                            </p>

                            <div className="flex justify-between items-center">
                                <span className="font-p-gmsm text-[18px] text-gray-900">
                                    2025년 5월 3일
                                </span>

                                <span className="font-p-gmsm text-[18px] text-gray-900">
                                    1,200원
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-[4px]">
                            <p className="font-p-regular text-[16px] text-gray-400">
                                최근 결제일
                            </p>

                            <div className="flex justify-between items-center">
                                <span className="font-p-gmsm text-[18px] text-gray-900">
                                    2025년 4월 4일
                                </span>

                                <span className="font-p-gmsm text-[18px] text-gray-900">
                                    1,200원
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer bp>
                <Button
                    type="md"
                    variants="black"
                    onClick={() => setAction("billing_history")}
                >
                    <ListCheckIcon size={20} className="stroke-white" />
                    결제 내역 보기
                </Button>

                <Button type="md" variants="outline">
                    <Trash2Icon size={20} className="stroke-gray-900" />
                    결제수단 삭제하기
                </Button>
            </Footer>
        </>
    );
};

export default BillingComponent;
