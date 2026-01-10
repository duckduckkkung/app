import { ChevronLeftIcon, LogOutIcon } from "lucide-react";

import { OverlayHeader } from "@/shared/components/overlay-header";
import { Button } from "@/shared/components/button";

import { useSettingsProps } from "../stores/props.zustand";

export const EtcComponent = () => {
    const { setIsOpen } = useSettingsProps();

    return (
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
                                모든 정보를 지우고 덕덕쿵에서 탈퇴합니다.
                            </span>
                        </div>

                        <Button type="sm" variants="outline">
                            <LogOutIcon size={20} className="stroke-gray-900" />
                            탈퇴하기
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EtcComponent;
