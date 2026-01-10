"use client";

import { useBar } from "@/shared/stores/bar.zustand";

interface ScreenProps {
    children: React.ReactNode;
    className?: string;
    bn?: boolean;
    bf?: number;
}

export const Screen = ({
    children,
    className = "",
    bn = false,
    bf = 0,
}: ScreenProps) => {
    const bar = useBar();

    return (
        <div
            className={`h-full ${className}`}
            style={{
                paddingTop: `${bar.top}px`,
                paddingBottom: `${bar.bottom + (bn ? 75 : 0) + bf}px`,
            }}
        >
            {children}
        </div>
    );
};
