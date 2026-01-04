import { ForwardRefExoticComponent, RefAttributes } from "react";
import { LucideProps } from "lucide-react";

export interface TypeIcon {
    Component: ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    onClick?: () => void;
}

interface OverlayHeaderProps {
    theme?: "white" | "dark";
    left?: TypeIcon;
    right?: TypeIcon;
    title: string;
}

export const OverlayHeader = ({
    theme = "white",
    left,
    right,
    title,
}: OverlayHeaderProps) => {
    return (
        <div
            className="sticky top-0 z-100 px-[16px] w-full h-[60px] flex justify-between items-center"
            style={{
                background: theme === "white" ? "white" : "transparent",
            }}
        >
            {left ? (
                <left.Component
                    size={24}
                    className={
                        theme === "white" ? "stroke-gray-900" : "stroke-white"
                    }
                    onClick={left.onClick}
                />
            ) : (
                <div className="size-[24px]" />
            )}

            <span
                className={`font-p-semibold text-[18px] ${
                    theme === "white" ? "text-gray-900" : "text-white"
                }`}
            >
                {title}
            </span>

            {right ? (
                <right.Component
                    size={24}
                    className={
                        theme === "white" ? "stroke-gray-900" : "stroke-white"
                    }
                    onClick={right.onClick}
                />
            ) : (
                <div className="size-[24px]" />
            )}
        </div>
    );
};
