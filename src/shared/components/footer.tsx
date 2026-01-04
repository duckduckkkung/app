"use client";

import { useBar } from "@/stores/bar.zustand";

interface FooterProps {
    children: React.ReactNode;
    bp?: boolean;
}

export const Footer = ({ children, bp = false }: FooterProps) => {
    const bar = useBar();

    return (
        <div
            className="absolute left-0 right-0 w-full p-[16px] pt-[8px] flex flex-col gap-[6px]"
            style={{
                bottom: bp ? `${bar.bottom}px` : 0,
            }}
        >
            {children}
        </div>
    );
};
