export enum TextareaTypes {
    default = "outline-none min-h-[120px]",

    md = `${TextareaTypes.default} p-[14px] rounded-[12px] *:font-p-medium placeholder:font-p-regular *:text-[16px]`,
}

export enum TextareaVariants {
    outline = "bg-white border border-gray-300 *:text-gray-600 placeholder:text-gray-400",
}

interface TextareaProps {
    type: keyof typeof TextareaTypes;
    variants: keyof typeof TextareaVariants;

    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export const Textarea = ({
    type,
    variants,
    value,
    onChange,
    placeholder = "",
}: TextareaProps) => {
    return (
        <textarea
            className={`${TextareaTypes[type]} ${TextareaVariants[variants]}`}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
        />
    );
};
