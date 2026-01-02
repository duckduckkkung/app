import { ChevronDownIcon } from "lucide-react";

export enum SelectTypes {
    default = "flex justify-between items-center transition-all duration-100 active:scale-95",

    sm = `${SelectTypes.default} gap-[6px] p-[2px_8px] rounded-[6px] *:font-p-regular *:text-[14px]`,
    md = `${SelectTypes.default} gap-[10px] p-[6px_16px] rounded-[8px] *:font-p-medium *:text-[16px]`,
    lg = `${SelectTypes.default} gap-[16px] p-[10px_18px] rounded-[10px] *:font-p-medium *:text-[18px]`,
}

export enum SelectVariants {
    outline = "bg-gray-100 border border-gray-300 *:text-gray-600",
}

interface SelectProps {
    type: keyof typeof SelectTypes;
    variants: keyof typeof SelectVariants;

    value: string;
    options: string[];
    onChange: (value: string) => void;
    placeholder?: string;
}

export const Select = ({
    type,
    variants,
    value,
    options,
    onChange,
    placeholder = "",
}: SelectProps) => {
    return (
        <div className={`${SelectTypes[type]} ${SelectVariants[variants]}`}>
            <span>{value || placeholder}</span>

            <ChevronDownIcon size={14} className="stroke-gray-500" />
        </div>
    );
};
