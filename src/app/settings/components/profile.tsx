import { ChevronLeftIcon, ImageUpIcon, PencilLineIcon } from "lucide-react";

import { OverlayHeader } from "@/shared/components/overlay-header";
import { Button } from "@/shared/components/button";
import { Footer } from "@/shared/components/footer";
import { Verify } from "@/shared/components/verify";
import { Input } from "@/shared/components/input";

import { useSettingsProps } from "../stores/props.zustand";

export const ProfileComponent = () => {
    const { setIsOpen } = useSettingsProps();

    return (
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
                        <div className="size-[128px] bg-gray-100 rounded-[12px] flex justify-center items-center">
                            <ImageUpIcon
                                size={64}
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

                                <Verify label="3-20자" checked={false} />
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
                                <Verify label="0-40자" checked={false} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer bp>
                <Button type="md" variants="black">
                    <PencilLineIcon size={20} className="stroke-white" />
                    프로필 수정하기
                </Button>
            </Footer>
        </>
    );
};

export default ProfileComponent;
