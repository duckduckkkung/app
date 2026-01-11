export enum ButtonTypes {
    default = "outline-none",

    sm = `${ButtonTypes.default} w-full p-[14px_20px] rounded-[12px] font-p-medium text-[16px] flex justify-center items-center gap-[8px] transition-all duration-100 active:scale-95 *:transition-all *:duration-100`,
    md = `${ButtonTypes.default} w-full p-[16px_24px] rounded-[12px] font-p-medium text-[16px] flex justify-center items-center gap-[8px] transition-all duration-100 active:scale-95 *:transition-all *:duration-100`,
    sm_icon = `${ButtonTypes.md} !p-[12px] !rounded-[6px] !aspect-square`,
    md_icon = `${ButtonTypes.md} !p-[16px] !rounded-[8px] !aspect-square`,
    lg_icon = `${ButtonTypes.md} !p-[20px] !rounded-[12px] !aspect-square`,
}

export enum ButtonVariants {
    ghost = "bg-white text-gray-900",
    outline = "bg-white ring ring-inset ring-gray-300 text-gray-900",
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
