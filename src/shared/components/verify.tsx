import { CheckIcon } from "lucide-react";

interface VerifyProps {
    checked: boolean;
    label: string;
}

export const Verify = ({ checked, label }: VerifyProps) => {
    return (
        <div className="flex items-center gap-[4px]">
            <CheckIcon
                size={14}
                className={`transition-all duration-100 ${
                    checked ? "stroke-gray-700" : "stroke-gray-400"
                }`}
            />

            <span
                className={`font-p-medium text-[14px] transition-all duration-100 ${
                    checked ? "text-gray-700" : "text-gray-400"
                }`}
            >
                {label}
            </span>
        </div>
    );
};
