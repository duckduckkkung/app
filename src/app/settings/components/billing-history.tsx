import { ChevronLeftIcon, RefreshCwIcon } from "lucide-react";

import { OverlayHeader } from "@/shared/components/overlay-header";
import { Button } from "@/shared/components/button";
import { Footer } from "@/shared/components/footer";

import { useSettingsProps } from "../stores/props.zustand";

export const BillingHistoryComponent = () => {
    const { setIsHistoryOpen } = useSettingsProps();

    return (
        <>
            <div className="h-full overflow-y-scroll">
                <OverlayHeader
                    title="결제 내역"
                    left={{
                        Component: ChevronLeftIcon,
                        onClick: () => setIsHistoryOpen(false),
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
                    <RefreshCwIcon size={20} className="stroke-white" />
                    갱신하기
                </Button>
            </Footer>
        </>
    );
};

export default BillingHistoryComponent;
