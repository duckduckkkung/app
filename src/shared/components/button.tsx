export enum ButtonTypes {
    default = "outline-none",

    md = `${ButtonTypes.default} w-full p-[16px_24px] rounded-[12px] font-p-medium text-[16px] flex justify-center items-center gap-[8px] transition-all duration-100 active:scale-95 *:transition-all *:duration-100`,
}

export enum ButtonVariants {
    outline = "bg-white border border-gray-300 text-gray-900",
    black = "bg-gray-900 text-white",
    primary = "bg-c-primary text-white",
    kakao = "bg-[#FEE500] text-[#191919]",
}

interface ButtonProps {
    type: keyof typeof ButtonTypes;
    variants: keyof typeof ButtonVariants;

    onClick?: () => void;
    children: React.ReactNode;
    disabled?: boolean;
}

export const Button = ({
    type,
    variants,
    onClick,
    children,
    disabled = false,
}: ButtonProps) => {
    return (
        <button
            className={`${ButtonTypes[type]} ${ButtonVariants[variants]} ${
                disabled ? "!bg-gray-100 *:!stroke-gray-400 !text-gray-400" : ""
            }`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
