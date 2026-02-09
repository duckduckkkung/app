"use client";

import { ChevronLeftIcon, PlusIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useMemo } from "react";

import { OverlayHeader } from "@/shared/components/overlay-header";
import { Screen } from "@/shared/components/screen";
import { Button } from "@/shared/components/button";
import { Footer } from "@/shared/components/footer";
import { Tab } from "@/shared/components/tab";

import { useSettingsProps } from "../stores/props.zustand";

import { fans as MockFans } from "@/mocks/fans";

type TypeTab = "규칙" | "최신" | "HOT";

const tabs: TypeTab[] = ["규칙", "최신", "HOT"];

export const CommunityComponent = () => {
    const { setIsCommunityOpen } = useSettingsProps();

    const fan = MockFans[0];

    const [tab, setTab] = useState<TypeTab>(tabs[0]);

    const containerVariants = useMemo(
        () => ({
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { duration: 0.15 } },
            exit: { opacity: 0, transition: { duration: 0.15 } },
        }),
        [],
    );

    return (
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

                <Tab
                    options={tabs}
                    tab={tab}
                    onChange={(e) => setTab(e as TypeTab)}
                />

                <div className="w-full overflow-x-hidden">
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={tab}
                            variants={containerVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="relative w-full h-full"
                        >
                            {tab === "규칙" && (
                                <div className="p-[16px]">
                                    <span className="font-p-mj text-[18px] text-gray-900">
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Eligendi explicabo
                                        repudiandae consectetur alias quia odio
                                        ratione veritatis harum. Quas, itaque
                                        eveniet illum fugit praesentium ab nam
                                        sapiente. Voluptatem, eaque.
                                        Exercitationem. Fuga iste quis
                                        voluptatibus maxime mollitia optio quam
                                        sint fugiat, nesciunt porro,
                                        consequuntur accusamus nam eos sunt
                                        expedita laborum totam dolore error
                                        inventore, quibusdam rerum! Atque
                                        corporis ab enim accusantium. Maiores
                                        ipsa sunt, obcaecati odio ullam beatae
                                        inventore quis, eius, pariatur adipisci
                                        doloribus dolor porro expedita delectus
                                        placeat cum veritatis. Cumque ea neque
                                        modi, perspiciatis ex aspernatur eveniet
                                        iusto esse! Placeat est necessitatibus
                                        facere voluptatibus sunt reprehenderit
                                        incidunt, a pariatur natus molestiae
                                        maxime odio perspiciatis sed deleniti
                                        quaerat. Suscipit facere enim libero
                                        omnis laborum eos eligendi molestias
                                        distinctio sequi nam! Cupiditate animi
                                        doloribus veritatis quia! Dolor ut
                                        debitis, nobis suscipit asperiores
                                        beatae atque placeat doloremque laborum
                                        quibusdam omnis dolores eos, consectetur
                                        quam ex itaque cupiditate adipisci aut
                                        voluptatem similique exercitationem.
                                        Eligendi alias veritatis officiis
                                        architecto tempora magni optio quod,
                                        voluptatem est dicta voluptatum nulla
                                        obcaecati excepturi a ad similique,
                                        molestiae adipisci cum aspernatur labore
                                        cumque omnis voluptate! Fugiat, quia
                                        commodi.
                                    </span>
                                </div>
                            )}

                            {tab === "최신" && (
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
                                                    2026.4 단독 콘서트 / 사진
                                                    몇장
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
                                                    어쩌구뉴스 - 한강 고양이
                                                    입양 확정
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
                            )}

                            {tab === "HOT" && (
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
                                                    2026.4 단독 콘서트 / 사진
                                                    몇장
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
                                                    어쩌구뉴스 - 한강 고양이
                                                    입양 확정
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
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <Footer bp>
                <Button type="md" variants="black">
                    <PlusIcon size={20} className="stroke-white" />
                    게시글 쓰기
                </Button>
            </Footer>
        </Screen>
    );
};

export default CommunityComponent;
