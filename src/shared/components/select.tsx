import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { BottomSheet } from "./bottom-sheet";

export enum SelectTypes {
    default = "flex justify-between items-center transition-all duration-100 active:scale-95",

    md = `${SelectTypes.default} gap-[10px] p-[14px_16px] rounded-[8px] *:font-p-medium *:text-[16px]`,
}

export enum SelectVariants {
    outline = "bg-white border border-gray-300 *:text-gray-900",
}

export interface TypeSelectOption {
    value: string;
    label: string;
}

interface SelectProps {
    type: keyof typeof SelectTypes;
    variants: keyof typeof SelectVariants;

    value: TypeSelectOption;
    options: TypeSelectOption[];
    onChange: (value: TypeSelectOption) => void;
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
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <div
                className={`${SelectTypes[type]} ${SelectVariants[variants]}`}
                onClick={() => setIsOpen(true)}
            >
                <span>{value.label || placeholder}</span>

                <ChevronDownIcon size={14} className="stroke-gray-500" />
            </div>

            <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className="flex flex-col">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className="w-full py-[10px] flex gap-[8px] items-center"
                            onClick={() => {
                                setIsOpen(false);
                                onChange(option);
                            }}
                        >
                            {option.value === value.value && (
                                <CheckIcon
                                    size={16}
                                    className="stroke-gray-900"
                                />
                            )}

                            <span className="font-p-medium text-[16px] text-gray-900">
                                {option.label}
                            </span>
                        </div>
                    ))}
                </div>
            </BottomSheet>
        </>
    );
};
