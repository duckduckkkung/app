"use client";

import { useBar } from "@/stores/bar.zustand";

interface ScreenProps {
    children: React.ReactNode;
    className?: string;
    bn?: boolean;
}

export const Screen = ({
    children,
    className = "",
    bn = false,
}: ScreenProps) => {
    const bar = useBar();

    return (
        <div
            className={`h-full ${className}`}
            style={{
                paddingTop: `${bar.top}px`,
                paddingBottom: `${bar.bottom + (bn ? 75 : 0)}px`,
            }}
        >
            {children}
        </div>
    );
};
