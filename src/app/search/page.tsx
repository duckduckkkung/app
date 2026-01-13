"use client";

import { PlusIcon, SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { BottomNavigator } from "@/shared/components/bottom-navigator";
import { PullToRefresh } from "@/shared/components/pull-to-refresh";
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

    const [fans, setFans] = useState<{ isFetching: boolean; data: TypeFan[] }>({
        isFetching: true,
        data: [],
    });
    useEffect(() => {
        setTimeout(() => setFans({ isFetching: false, data: MockFans }), 500);
    }, []);

    return (
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
                                                        setIsCreateOpen(true)
                                                    }
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
                                                    onClick={() =>
                                                        setIsFanOpen(true)
                                                    }
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
    );
}
