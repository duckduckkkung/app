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
            className="flex justify-between items-center group"
            onClick={() => onChange?.(!checked)}
        >
            <div className="flex items-center gap-[4px]">
                <div className="transition-all duration-100 group-active:scale-75">
                    {checked ? (
                        <CheckIcon
                            size={16}
                            className="shrink-0 stroke-gray-900"
                        />
                    ) : (
                        <div className="size-[16px] flex justify-center items-center">
                            {required ? (
                                <div className="size-[6px] bg-gray-300 rounded-full" />
                            ) : (
                                <div className="size-[6px] border-1 border-gray-300 rounded-full" />
                            )}
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-[4px]">
                    {required && (
                        <span className="shrink-0 font-p-semibold text-[16px] text-gray-600">
                            (필수)
                        </span>
                    )}

                    <span className="font-p-medium text-[16px] text-gray-500 truncate">
                        {text}
                    </span>
                </div>
            </div>
        </div>
    );
};
