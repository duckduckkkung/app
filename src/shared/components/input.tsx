export enum InputTypes {
    default = "flex justify-between items-center transition-all duration-100 outline-none",

    md = `${InputTypes.default} p-[14px_16px] rounded-[8px] font-p-medium text-[16px]`,
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
}

export const Input = ({
    type,
    variants,
    value,
    onChange,
    placeholder = "",
}: InputProps) => {
    return (
        <input
            className={`${InputTypes[type]} ${InputVariants[variants]}`}
            onChange={(e) => onChange(e.target.value)}
            value={value}
            placeholder={placeholder}
        />
    );
};
