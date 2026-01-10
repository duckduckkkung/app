import { ChevronLeftIcon } from "lucide-react";
import Image from "next/image";

import { OverlayHeader } from "@/shared/components/overlay-header";
import { Button } from "@/shared/components/button";

import GoogleIcon from "@/assets/icons/google.png";
import KakaoIcon from "@/assets/icons/kakao.png";

import { useSettingsProps } from "../stores/props.zustand";

export const SecurityComponent = () => {
    const { setIsOpen } = useSettingsProps();

    return (
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
                                덕덕쿵은 2개의 소셜 연동을 지원해요.
                                <br />
                                원하는 소셜을 선택해서, 손쉽게 계정을 연동해
                                보세요.
                            </span>
                        </div>

                        <div className="flex gap-[8px]">
                            <Button type="sm" variants="kakao">
                                <Image
                                    src={KakaoIcon}
                                    alt="kakao"
                                    width={20}
                                    height={20}
                                />
                                카카오
                            </Button>

                            <Button type="sm" variants="outline">
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
    );
};

export default SecurityComponent;
