import { CheckIcon } from "lucide-react";

interface CheckProps {
    required?: boolean;
    onChange?: (checked: boolean) => void;
    text: string;
    checked: boolean;
}

export const Check = ({
    required = false,
    onChange,
    text,
    checked,
}: CheckProps) => {
    return (
        <div
            className="flex justify-between items-center"
            onClick={() => onChange?.(!checked)}
        >
            <div className="flex items-center gap-[8px]">
                <CheckIcon
                    size={16}
                    className={`shrink-0 transition-all duration-100 ${
                        checked ? "stroke-c-primary" : "stroke-gray-400"
                    }`}
                />

                <div className="flex items-center gap-[4px]">
                    {required && (
                        <span className="shrink-0 font-p-medium text-[16px] text-c-primary">
                            (필수)
                        </span>
                    )}

                    <span className="font-p-medium text-[16px] text-gray-600 truncate">
                        {text}
                    </span>
                </div>
            </div>
        </div>
    );
};
