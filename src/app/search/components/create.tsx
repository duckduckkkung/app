import { BookPlusIcon, ImageUpIcon, PlusIcon, XIcon } from "lucide-react";
import { ChevronLeftIcon } from "lucide-react";

import { OverlayHeader } from "@/shared/components/overlay-header";
import { Screen } from "@/shared/components/screen";
import { Button } from "@/shared/components/button";
import { Verify } from "@/shared/components/verify";
import { Footer } from "@/shared/components/footer";
import { Input } from "@/shared/components/input";
import { Tag } from "@/shared/components/tag";

interface CreateComponentProps {
    onClose: () => void;
}

export const CreateComponent = ({ onClose }: CreateComponentProps) => {
    return (
        <Screen bf={80}>
            <div className="h-full overflow-y-scroll">
                <OverlayHeader
                    title="덕질 생성"
                    left={{
                        Component: ChevronLeftIcon,
                        onClick: onClose,
                    }}
                />

                <div className="p-[24px_16px]">
                    <div className="flex flex-col gap-[32px]">
                        <div className="flex flex-col gap-[8px]">
                            <div className="flex items-center gap-[4px]">
                                <span className="font-p-medium text-[16px] text-c-primary">
                                    *
                                </span>

                                <span className="font-p-medium text-[16px] text-gray-600">
                                    관심사
                                </span>
                            </div>

                            <Input
                                type="md"
                                variants="outline"
                                value=""
                                onChange={() => {}}
                                placeholder="관심사를 입력해 주세요."
                            />

                            <div className="flex flex-wrap gap-[8px]">
                                <Verify
                                    label="한영 대소문자 일본어"
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
                                    짧은 설명
                                </span>
                            </div>

                            <Input
                                type="md"
                                variants="outline"
                                value=""
                                onChange={() => {}}
                                placeholder="짧은 설명을 입력해 주세요."
                            />

                            <div className="flex flex-wrap gap-[8px]">
                                <Verify label="0-60자" checked={false} />
                            </div>
                        </div>

                        <div className="flex flex-col gap-[8px]">
                            <div className="flex items-center gap-[4px]">
                                <span className="font-p-medium text-[16px] text-gray-400">
                                    (최대 5개)
                                </span>

                                <span className="font-p-medium text-[16px] text-gray-600">
                                    특징
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-[6px]">
                                <Tag
                                    text="특징원"
                                    icon={{
                                        Component: XIcon,
                                    }}
                                />
                                <Tag
                                    text="특징투"
                                    icon={{
                                        Component: XIcon,
                                    }}
                                />
                            </div>

                            <div className="flex items-center gap-[12px]">
                                <Input
                                    type="md"
                                    variants="outline"
                                    value=""
                                    onChange={() => {}}
                                    placeholder="특징을 입력해 주세요."
                                />

                                <div className="w-fit">
                                    <Button type="md_icon" variants="black">
                                        <PlusIcon
                                            size={16}
                                            className="stroke-white"
                                        />
                                    </Button>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-[8px]">
                                <Verify label="2-12자" checked={false} />
                            </div>
                        </div>

                        <div className="flex flex-col gap-[8px]">
                            <div className="flex items-center gap-[4px]">
                                <span className="font-p-medium text-[16px] text-gray-400">
                                    (최대 4장)
                                </span>

                                <span className="font-p-medium text-[16px] text-gray-600">
                                    사진
                                </span>
                            </div>

                            <div className="size-[128px] bg-gray-100 rounded-[12px] flex justify-center items-center">
                                <ImageUpIcon
                                    size={64}
                                    className="stroke-gray-400"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer bp>
                <Button type="md" variants="primary">
                    <BookPlusIcon size={20} className="stroke-white" />
                    덕질 생성하기
                </Button>
            </Footer>
        </Screen>
    );
};

export default CreateComponent;
