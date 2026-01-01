export enum TextareaTypes {
    default = "outline-none min-h-[120px]",

    sm = `${TextareaTypes.default} p-[8px] rounded-[6px] *:font-p-regular placeholder:font-p-regular *:text-[14px]`,
    md = `${TextareaTypes.default} p-[16px] rounded-[8px] *:font-p-medium placeholder:font-p-regular *:text-[16px]`,
    lg = `${TextareaTypes.default} p-[18px] rounded-[10px] *:font-p-medium placeholder:font-p-medium *:text-[18px]`,
}

export enum TextareaVariants {
    outline = "bg-gray-100 border border-gray-300 *:text-gray-600 placeholder:text-gray-400",
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
