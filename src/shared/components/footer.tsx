"use client";

interface FooterProps {
    children: React.ReactNode;
}

export const Footer = ({ children }: FooterProps) => {
    return (
        <div className="absolute bottom-0 left-0 right-0 w-full p-[16px] pt-[8px] flex flex-col gap-[6px]">
            {children}
        </div>
    );
};
