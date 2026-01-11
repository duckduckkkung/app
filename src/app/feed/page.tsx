"use client";

import {
    ClapperboardIcon,
    Layers2Icon,
    StickyNoteIcon,
    UserRoundIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

import { BottomNavigator } from "@/shared/components/bottom-navigator";
import { PullToRefresh } from "@/shared/components/pull-to-refresh";
import { Overlay } from "@/shared/components/overlay";
import { Screen } from "@/shared/components/screen";
import { Loader } from "@/shared/components/loader";
import { Empty } from "@/shared/components/empty";
import { Tag } from "@/shared/components/tag";

import { FansComponent } from "../fans/components/fans";

import { fans as MockFans } from "@/mocks/fans";

import { TypeFan } from "@/shared/types/data";

export default function Feed() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const [fans, setFans] = useState<{ isFetching: boolean; data: TypeFan[] }>({
        isFetching: true,
        data: [],
    });
    useEffect(() => {
        setTimeout(() => setFans({ isFetching: false, data: MockFans }), 500);
    }, []);

    return (
        <Overlay isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <Overlay.Parent>
                <Screen bn>
                    <PullToRefresh
                        motionKey={fans.isFetching ? "fetching" : "fetched"}
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
                                            className="flex flex-col gap-[4px] transition-all duration-100 active:scale-95"
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
                                                    <Tag text="새로운 굿즈" />
                                                    <Tag text="인기 7% 상승" />
                                                    <Tag text="업데이트된 정보" />
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className="flex flex-col gap-[4px] transition-all duration-100 active:scale-95"
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
                                                    <Tag text="새로운 공연 일정" />
                                                    <Tag text="인기 4% 상승" />
                                                    <Tag text="업데이트된 정보" />
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
                                            className="flex flex-col gap-[4px] transition-all duration-100 active:scale-95"
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

                                            <Tag
                                                text="지난 달 보다 방문 횟수가
                                                        40% 증가했어요."
                                            />
                                        </div>

                                        <div
                                            className="flex flex-col gap-[4px] transition-all duration-100 active:scale-95"
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

                                            <Tag
                                                text="지난 달 보다 방문 횟수가
                                                        3% 감소했어요."
                                            />
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
                                                {Array(15)
                                                    .fill(0)
                                                    .map((_, i) => (
                                                        <div
                                                            key={`img-${i}`}
                                                            className="bg-gray-200 aspect-square rounded-[8px] transition-all duration-100 active:scale-95"
                                                            onClick={() =>
                                                                setIsOpen(true)
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
                                                            className="bg-gray-200 aspect-square rounded-[8px] transition-all duration-100 active:scale-95"
                                                            onClick={() =>
                                                                setIsOpen(true)
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
                    </PullToRefresh>

                    <BottomNavigator theme="light" focus="feed" />
                </Screen>
            </Overlay.Parent>

            <Overlay.Children>
                <FansComponent />
            </Overlay.Children>
        </Overlay>
    );
}
