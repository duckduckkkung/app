import { ChevronLeftIcon, UploadIcon } from "lucide-react";

import { OverlayHeader } from "@/shared/components/overlay-header";
import { Textarea } from "@/shared/components/textarea";
import { Verify } from "@/shared/components/verify";
import { Select } from "@/shared/components/select";
import { Button } from "@/shared/components/button";
import { Footer } from "@/shared/components/footer";
import { Input } from "@/shared/components/input";

import { useSettingsProps } from "../../stores/props.zustand";

export const WriteComponent = () => {
    const { setIsSubOpen, setSubAction } = useSettingsProps();

    return (
        <>
            <div className="h-full overflow-y-scroll">
                <OverlayHeader
                    title="게시글 작성"
                    left={{
                        Component: ChevronLeftIcon,
                        onClick: () => setIsSubOpen(false),
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
                                    말머리
                                </span>
                            </div>

                            <Select
                                type="md"
                                variants="outline"
                                options={[
                                    {
                                        value: "cat1",
                                        label: "🖼️ 사진관",
                                    },
                                    {
                                        value: "cat2",
                                        label: "🤖 AI 코딩 대회",
                                    },
                                    {
                                        value: "cat3",
                                        label: "🌍 월드에는",
                                    },
                                    {
                                        value: "cat4",
                                        label: "💼 회사원들",
                                    },
                                ]}
                                value={{
                                    value: "cat1",
                                    label: "🖼️ 사진관",
                                }}
                                onChange={() => {}}
                                placeholder="말머리를 선택해 주세요."
                            />
                        </div>

                        <div className="flex flex-col gap-[8px]">
                            <div className="flex items-center gap-[4px]">
                                <span className="font-p-medium text-[16px] text-c-primary">
                                    *
                                </span>

                                <span className="font-p-medium text-[16px] text-gray-600">
                                    제목
                                </span>
                            </div>

                            <Input
                                type="md"
                                variants="outline"
                                value=""
                                onChange={() => {}}
                                placeholder="제목을 입력해 주세요."
                            />

                            <div className="flex flex-wrap gap-[8px]">
                                <Verify label="2-40자" checked={false} />
                            </div>
                        </div>

                        <div className="flex flex-col gap-[8px]">
                            <div className="flex items-center gap-[4px]">
                                <span className="font-p-medium text-[16px] text-c-primary">
                                    *
                                </span>

                                <span className="font-p-medium text-[16px] text-gray-600">
                                    본문
                                </span>
                            </div>

                            <Textarea
                                type="md"
                                variants="outline"
                                value=""
                                onChange={() => {}}
                                placeholder="본문을 입력해 주세요."
                            />

                            <div className="flex flex-wrap gap-[8px]">
                                <Verify label="3-600자" checked={false} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer bp>
                <Button
                    type="md"
                    variants="black"
                    onClick={() => {
                        setIsSubOpen(false);

                        setTimeout(() => {
                            setSubAction("detail");
                            setIsSubOpen(true);
                        }, 400);
                    }}
                >
                    <UploadIcon size={20} className="stroke-white" />
                    게시하기
                </Button>
            </Footer>
        </>
    );
};

export default WriteComponent;
