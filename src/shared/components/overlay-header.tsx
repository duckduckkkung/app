import { ForwardRefExoticComponent, RefAttributes } from "react";
import { LucideProps } from "lucide-react";

export interface TypeIcon {
    Component: ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    onClick?: () => void;
}

interface OverlayHeaderProps {
    theme?: "light" | "dark";
    left?: TypeIcon;
    right?: TypeIcon;
    title: string;
    className?: string;
    top?: number;
}

export const OverlayHeader = ({
    theme = "light",
    left,
    right,
    title,
    className = "",
    top = 0,
}: OverlayHeaderProps) => {
    return (
        <div
            className={`sticky top-0 z-100 px-[16px] w-full h-[60px] flex justify-between items-center ${className}`}
            style={{
                background: theme === "light" ? "white" : "transparent",
                top: `${top}px`,
            }}
        >
            {left ? (
                <left.Component
                    size={24}
                    className={`transition-all duration-100 active:scale-95 ${
                        theme === "light" ? "stroke-gray-900" : "stroke-white"
                    }`}
                    onClick={left.onClick}
                />
            ) : (
                <div className="size-[24px]" />
            )}

            <span
                className={`font-p-semibold text-[18px] ${
                    theme === "light" ? "text-gray-900" : "text-white"
                }`}
            >
                {title}
            </span>

            {right ? (
                <right.Component
                    size={24}
                    className={`transition-all duration-100 active:scale-95 ${
                        theme === "light" ? "stroke-gray-900" : "stroke-white"
                    }`}
                    onClick={right.onClick}
                />
            ) : (
                <div className="size-[24px]" />
            )}
        </div>
    );
};
