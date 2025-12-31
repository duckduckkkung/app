"use client";

import { useBar } from "@/stores/bar.zustand";

interface ScreenProps {
    children: React.ReactNode;
    className?: string;
}

export const Screen = ({ children, className = "" }: ScreenProps) => {
    const bar = useBar();

    return (
        <div
            className={`h-full ${className}`}
            style={{
                paddingTop: `${bar.top}px`,
                paddingBottom: `${bar.bottom}px`,
            }}
        >
            {children}
        </div>
    );
};
