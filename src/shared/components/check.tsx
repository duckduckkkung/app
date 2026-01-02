import { ArrowUpRightIcon, CheckIcon } from "lucide-react";

interface CheckProps {
    required?: boolean;
    link?: string;
    text: string;
    checked: boolean;
}

export const Check = ({
    required = false,
    link,
    text,
    checked,
}: CheckProps) => {
    return (
        <div
            className="flex justify-between items-center"
            onClick={() => link && window.open(link)}
        >
            <div className="flex items-center gap-[8px]">
                <CheckIcon
                    size={16}
                    className={checked ? "stroke-c-primary" : "stroke-gray-400"}
                />

                <div className="flex items-center gap-[4px]">
                    {required && (
                        <span className="font-p-medium text-[16px] text-c-primary">
                            (필수)
                        </span>
                    )}

                    <span className="font-p-medium text-[16px] text-gray-600">
                        {text}
                    </span>
                </div>
            </div>

            {link && <ArrowUpRightIcon size={16} className="stroke-gray-300" />}
        </div>
    );
};
