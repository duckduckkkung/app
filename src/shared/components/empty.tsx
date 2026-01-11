import Image from "next/image";

import NotFoundIcon from "@/assets/icons/not-found.png";

interface EmptyProps {
    title?: string;
    text?: string;
}

export const Empty = ({
    title = "Not Found",
    text = "결과를 찾지 못했습니다.",
}: EmptyProps) => {
    return (
        <div className="py-[128px] flex flex-col justify-center items-center gap-[24px]">
            <Image src={NotFoundIcon} alt="Not Found" />

            <div className="flex flex-col justify-center items-center gap-[4px]">
                <p className="font-p-bold text-[18px] text-gray-900">{title}</p>

                <p className="font-p-regular text-[16px] text-gray-600">
                    {text}
                </p>
            </div>
        </div>
    );
};
