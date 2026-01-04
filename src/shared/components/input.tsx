export enum InputTypes {
    default = "flex justify-between items-center transition-all duration-100 outline-none",

    md = `${InputTypes.default} p-[12px_14px] rounded-[8px] font-p-medium text-[16px]`,
}

export enum InputVariants {
    outline = "bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400",
}

interface InputProps {
    type: keyof typeof InputTypes;
    variants: keyof typeof InputVariants;

    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
}

export const Input = ({
    type,
    variants,
    value,
    onChange,
    placeholder = "",
    disabled = false,
}: InputProps) => {
    return (
        <input
            className={`${InputTypes[type]} ${InputVariants[variants]} ${
                disabled ? "!bg-gray-50 !text-gray-600" : ""
            }`}
            onChange={(e) => onChange(e.target.value)}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
        />
    );
};
