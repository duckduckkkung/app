import { ChevronLeftIcon } from "lucide-react";

import { OverlayHeader } from "@/shared/components/overlay-header";
import { Screen } from "@/shared/components/screen";
import { Tag } from "@/shared/components/tag";

interface DetailComponentProps {
    onClose: () => void;
}

export const DetailComponent = ({ onClose }: DetailComponentProps) => {
    return (
        <Screen>
            <div className="h-full overflow-y-scroll">
                <OverlayHeader
                    title="상세"
                    left={{
                        Component: ChevronLeftIcon,
                        onClick: onClose,
                    }}
                />

                <div className="p-[16px] flex flex-col gap-[24px]">
                    <div className="flex flex-col gap-[8px]">
                        <p className="font-p-semibold text-[24px] text-gray-900">
                            내 아내임.
                        </p>

                        <p className="font-p-mj text-[18px] text-gray-900">
                            이것은 설명 입니다 데스요.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-[8px]">
                        <Tag text="태그하나만" />

                        <Tag text="태그두개" />

                        <Tag text="tag셋" />
                    </div>
                </div>

                <div className="w-full h-[8px] bg-gray-100" />

                <div className="p-[16px] flex flex-col gap-[36px]">
                    <p className="font-p-semibold text-[18px] text-gray-900">
                        댓글
                    </p>

                    <div className="flex flex-col gap-[36px]">
                        {Array(42)
                            .fill(0)
                            .map((_, index) => (
                                <div
                                    key={`item-${index}`}
                                    className="flex flex-col gap-[8px]"
                                >
                                    <p className="font-p-medium text-[16px] text-gray-900">
                                        테스터
                                    </p>

                                    <p className="font-p-mj text-[16px] text-gray-900">
                                        여러분 저 됐어요! 됐다구요!!
                                        <br />
                                        🌈 좆됐어요 💅🏻
                                    </p>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </Screen>
    );
};

export default DetailComponent;
