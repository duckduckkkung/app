"use client";

import { useEffect, useState } from "react";

import { BottomNavigator } from "@/shared/components/bottom-navigator";
import { PullToRefresh } from "@/shared/components/pull-to-refresh";
import { Overlay } from "@/shared/components/overlay";
import { Screen } from "@/shared/components/screen";
import { Loader } from "@/shared/components/loader";
import { Empty } from "@/shared/components/empty";

import { Layout } from "./components/layout";

import { useSettingsProps } from "./stores/props.zustand";
import BillingHistoryComponent from "./components/billing-history";

export default function Settings() {
    const { setAction, isOpen, setIsOpen, isHistoryOpen, setIsHistoryOpen } =
        useSettingsProps();

    const [user, setUser] = useState<{ isFetching: boolean; data: object }>({
        isFetching: true,
        data: {},
    });
    useEffect(() => {
        setTimeout(() => setUser({ isFetching: false, data: {} }), 500);
    }, []);

    return (
        <Overlay isOpen={isHistoryOpen} onClose={() => setIsHistoryOpen(false)}>
            <Overlay.Parent>
                <Overlay isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <Overlay.Parent>
                        <Screen bn>
                            <PullToRefresh
                                motionKey={
                                    user.isFetching ? "fetching" : "fetched"
                                }
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
                                    <Empty />
                                )}
                            </PullToRefresh>

                            <BottomNavigator theme="light" focus="settings" />
                        </Screen>
                    </Overlay.Parent>

                    <Overlay.Children>
                        <Layout />
                    </Overlay.Children>
                </Overlay>
            </Overlay.Parent>

            <Overlay.Children>
                <Screen bf={80}>
                    <BillingHistoryComponent />
                </Screen>
            </Overlay.Children>
        </Overlay>
    );
}
