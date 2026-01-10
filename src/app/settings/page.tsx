"use client";

import {
    ChevronLeftIcon,
    ImageUpIcon,
    ListCheckIcon,
    LogOutIcon,
    PencilLineIcon,
    RefreshCwIcon,
    Trash2Icon,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

import { BottomNavigator } from "@/shared/components/bottom-navigator";
import { PullToRefresh } from "@/shared/components/pull-to-refresh";
import { OverlayHeader } from "@/shared/components/overlay-header";
import { Card, TypeCard } from "@/shared/components/card";
import { Overlay } from "@/shared/components/overlay";
import { Verify } from "@/shared/components/verify";
import { Screen } from "@/shared/components/screen";
import { Loader } from "@/shared/components/loader";
import { Footer } from "@/shared/components/footer";
import { Button } from "@/shared/components/button";
import { Input } from "@/shared/components/input";
import { Empty } from "@/shared/components/empty";
import { Tag } from "@/shared/components/tag";

import GoogleIcon from "@/assets/icons/google.png";
import KakaoIcon from "@/assets/icons/kakao.png";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
enum SettingsActions {
    profile,
    security,
    billing,
    billing_history,
    etc,
}

export default function Settings() {
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

    const [action, setAction] =
        useState<keyof typeof SettingsActions>("profile");
    const [isOpen, setIsOpen] = useState(false);
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

    const [user, setUser] = useState<{ isFetching: boolean; data: object }>({
        isFetching: true,
        data: {},
    });
    useEffect(() => {
        setTimeout(() => setUser({ isFetching: false, data: {} }), 500);
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
                    <PullToRefresh
                        motionKey={user.isFetching ? "fetching" : "fetched"}
                        onRefresh={async () => {
                            setUser({ isFetching: true, data: {} });
                            setTimeout(
                                () =>
                                    setUser({
                                        isFetching: false,
                                        data: {},
                                    }),
                                500
                            );
                        }}
                    >
                        {user.isFetching ? (
                            <Loader />
                        ) : user.data ? (
                            <>
                                <div className="p-[48px_16px]">
                                    <p className="font-p-medium text-[24px] text-gray-900">
                                        설정
                                    </p>
                                </div>

                                <div className="flex flex-col">
                                    <div
                                        className="p-[10px_16px] transition-all duration-100 active:scale-95"
                                        onClick={() => {
                                            setAction("profile");
                                            setIsOpen(true);
                                        }}
                                    >
                                        <div className="flex items-center gap-[14px]">
                                            <div className="size-[32px] bg-gray-100 rounded-[6px] flex justify-center items-center">
                                                <span className="font-p-tossface text-[18px]">
                                                    😀
                                                </span>
                                            </div>

                                            <span className="font-p-medium text-[16px] text-gray-900">
                                                프로필
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        className="p-[10px_16px] transition-all duration-100 active:scale-95"
                                        onClick={() => {
                                            setAction("security");
                                            setIsOpen(true);
                                        }}
                                    >
                                        <div className="flex items-center gap-[14px]">
                                            <div className="size-[32px] bg-amber-100 rounded-[6px] flex justify-center items-center">
                                                <span className="font-p-tossface text-[18px]">
                                                    🔑
                                                </span>
                                            </div>

                                            <span className="font-p-medium text-[16px] text-gray-900">
                                                보안
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        className="p-[10px_16px] transition-all duration-100 active:scale-95"
                                        onClick={() => {
                                            setAction("billing");
                                            setIsOpen(true);
                                        }}
                                    >
                                        <div className="flex items-center gap-[14px]">
                                            <div className="size-[32px] bg-green-100 rounded-[6px] flex justify-center items-center">
                                                <span className="font-p-tossface text-[18px]">
                                                    💴
                                                </span>
                                            </div>

                                            <span className="font-p-medium text-[16px] text-gray-900">
                                                청구
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        className="p-[10px_16px] transition-all duration-100 active:scale-95"
                                        onClick={() => {
                                            setAction("etc");
                                            setIsOpen(true);
                                        }}
                                    >
                                        <div className="flex items-center gap-[14px]">
                                            <div className="size-[32px] bg-gray-100 rounded-[6px] flex justify-center items-center">
                                                <span className="font-p-tossface text-[18px]">
                                                    📎
                                                </span>
                                            </div>

                                            <span className="font-p-medium text-[16px] text-gray-900">
                                                기타
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <Empty
                                title="Not Found"
                                text="결과를 찾지 못했습니다."
                            />
                        )}
                    </PullToRefresh>

                    <BottomNavigator theme="white" focus="settings" />
                </Screen>
            </Overlay.Parent>

            <Overlay.Children>
                <Screen
                    bf={
                        ["profile", "billing_history"].includes(action)
                            ? 80
                            : action === "billing"
                            ? 144
                            : 0
                    }
                    className="!overflow-y-auto"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={action}
                            variants={containerVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="w-full h-full"
                        >
                            {action === "profile" && (
                                <>
                                    <div className="h-full overflow-y-scroll">
                                        <OverlayHeader
                                            title="프로필"
                                            left={{
                                                Component: ChevronLeftIcon,
                                                onClick: () => setIsOpen(false),
                                            }}
                                        />

                                        <div className="p-[24px_16px] flex flex-col gap-[48px]">
                                            <div className="flex justify-center">
                                                <div className="size-[100px] bg-gray-100 rounded-[12px] flex justify-center items-center">
                                                    <ImageUpIcon
                                                        size={48}
                                                        className="stroke-gray-400"
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-[32px]">
                                                <div className="flex flex-col gap-[8px]">
                                                    <div className="flex items-center gap-[4px]">
                                                        <span className="font-p-medium text-[16px] text-c-primary">
                                                            *
                                                        </span>

                                                        <span className="font-p-medium text-[16px] text-gray-600">
                                                            닉네임
                                                        </span>
                                                    </div>

                                                    <Input
                                                        type="md"
                                                        variants="outline"
                                                        value=""
                                                        onChange={() => {}}
                                                        placeholder="닉네임을 입력해 주세요."
                                                    />

                                                    <div className="flex flex-wrap gap-[8px]">
                                                        <Verify
                                                            label="한영 대소문자 (띄어쓰기 가능)"
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
                                                            자기소개
                                                        </span>
                                                    </div>

                                                    <Input
                                                        type="md"
                                                        variants="outline"
                                                        value=""
                                                        onChange={() => {}}
                                                        placeholder="간단한 자기소개를 입력해 주세요."
                                                    />

                                                    <div className="flex flex-wrap gap-[8px]">
                                                        <Verify
                                                            label="0-40자"
                                                            checked={false}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Footer bp>
                                        <Button type="md" variants="black">
                                            <PencilLineIcon
                                                size={20}
                                                className="stroke-white"
                                            />
                                            프로필 수정하기
                                        </Button>
                                    </Footer>
                                </>
                            )}

                            {action === "security" && (
                                <>
                                    <div className="h-full overflow-y-scroll">
                                        <OverlayHeader
                                            title="보안"
                                            left={{
                                                Component: ChevronLeftIcon,
                                                onClick: () => setIsOpen(false),
                                            }}
                                        />

                                        <div className="p-[24px_16px]">
                                            <div className="flex flex-col gap-[16px]">
                                                <div className="flex flex-col gap-[8px]">
                                                    <span className="font-p-medium text-[18px] text-gray-900">
                                                        소셜 연동
                                                    </span>

                                                    <span className="font-p-regular text-[16px] text-gray-600">
                                                        덕덕쿵은 2개의 소셜
                                                        연동을 지원해요.
                                                        <br />
                                                        원하는 소셜을 선택해서,
                                                        손쉽게 계정을 연동해
                                                        보세요.
                                                    </span>
                                                </div>

                                                <div className="flex gap-[8px]">
                                                    <Button
                                                        type="sm"
                                                        variants="kakao"
                                                    >
                                                        <Image
                                                            src={KakaoIcon}
                                                            alt="kakao"
                                                            width={20}
                                                            height={20}
                                                        />
                                                        카카오
                                                    </Button>

                                                    <Button
                                                        type="sm"
                                                        variants="outline"
                                                    >
                                                        <Image
                                                            src={GoogleIcon}
                                                            alt="google"
                                                            width={20}
                                                            height={20}
                                                        />
                                                        Google
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {action === "billing" && (
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
                                                    <div
                                                        key={index}
                                                        className="snap-center"
                                                    >
                                                        <Card
                                                            bank={card.bank}
                                                            cardNumber={
                                                                card.cardNumber
                                                            }
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

                                                {selectedCard?.default && (
                                                    <Tag text="기본 결제수단" />
                                                )}
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
                                            onClick={() =>
                                                setAction("billing_history")
                                            }
                                        >
                                            <ListCheckIcon
                                                size={20}
                                                className="stroke-white"
                                            />
                                            결제 내역 보기
                                        </Button>

                                        <Button type="md" variants="outline">
                                            <Trash2Icon
                                                size={20}
                                                className="stroke-gray-900"
                                            />
                                            결제수단 삭제하기
                                        </Button>
                                    </Footer>
                                </>
                            )}

                            {action === "billing_history" && (
                                <>
                                    <div className="h-full overflow-y-scroll">
                                        <OverlayHeader
                                            title="결제 내역"
                                            left={{
                                                Component: ChevronLeftIcon,
                                                onClick: () =>
                                                    setAction("billing"),
                                            }}
                                        />

                                        <div className="p-[24px_16px]">
                                            <div className="flex flex-col gap-[32px]">
                                                <div className="flex flex-col gap-[6px]">
                                                    <span className="font-p-medium text-[16px] text-gray-400">
                                                        성공
                                                    </span>

                                                    <div className="flex justify-between items-center">
                                                        <span className="font-p-gmsm text-[18px] text-gray-900">
                                                            2025년 4월 4일
                                                        </span>

                                                        <span className="font-p-gmsm text-[18px] text-gray-900">
                                                            1,200원
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col gap-[6px] opacity-40">
                                                    <span className="font-p-medium text-[16px] text-gray-400">
                                                        결제 실패
                                                    </span>

                                                    <div className="flex justify-between items-center">
                                                        <span className="font-p-gmsm text-[18px] text-gray-900">
                                                            2025년 4월 3일
                                                        </span>

                                                        <span className="font-p-gmsm text-[18px] text-gray-900">
                                                            1,200원
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col gap-[6px]">
                                                    <span className="font-p-medium text-[16px] text-gray-400">
                                                        성공
                                                    </span>

                                                    <div className="flex justify-between items-center">
                                                        <span className="font-p-gmsm text-[18px] text-gray-900">
                                                            2025년 3월 3일
                                                        </span>

                                                        <span className="font-p-gmsm text-[18px] text-gray-900">
                                                            1,200원
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col gap-[6px]">
                                                    <span className="font-p-medium text-[16px] text-gray-400">
                                                        성공
                                                    </span>

                                                    <div className="flex justify-between items-center">
                                                        <span className="font-p-gmsm text-[18px] text-gray-900">
                                                            2025년 2월 3일
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
                                        <Button type="md" variants="primary">
                                            <RefreshCwIcon
                                                size={20}
                                                className="stroke-white"
                                            />
                                            갱신하기
                                        </Button>
                                    </Footer>
                                </>
                            )}

                            {action === "etc" && (
                                <>
                                    <div className="h-full overflow-y-scroll">
                                        <OverlayHeader
                                            title="기타"
                                            left={{
                                                Component: ChevronLeftIcon,
                                                onClick: () => setIsOpen(false),
                                            }}
                                        />

                                        <div className="p-[24px_16px]">
                                            <div className="flex flex-col gap-[16px]">
                                                <div className="flex flex-col gap-[8px]">
                                                    <span className="font-p-medium text-[18px] text-gray-900">
                                                        탈퇴
                                                    </span>

                                                    <span className="font-p-regular text-[16px] text-gray-600">
                                                        모든 정보를 지우고
                                                        덕덕쿵에서 탈퇴합니다.
                                                    </span>
                                                </div>

                                                <Button
                                                    type="sm"
                                                    variants="outline"
                                                >
                                                    <LogOutIcon
                                                        size={20}
                                                        className="stroke-gray-900"
                                                    />
                                                    탈퇴하기
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </Screen>
            </Overlay.Children>
        </Overlay>
    );
}
