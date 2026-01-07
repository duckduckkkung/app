"use client";

import {
    ClapperboardIcon,
    CogIcon,
    MessageSquareDotIcon,
    SearchIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

import { useBar } from "@/stores/bar.zustand";

interface BottomNavigatorProps {
    theme?: "white" | "dark";
    focus?: "feed" | "moment" | "search" | "settings";
}

export const BottomNavigator = ({
    theme = "white",
    focus = "feed",
}: BottomNavigatorProps) => {
    const router = useRouter();

    const bar = useBar();

    const menus = [
        {
            id: "feed",
            name: "피드",
            Icon: MessageSquareDotIcon,
            location: "/feed",
        },
        {
            id: "moment",
            name: "모먼트",
            Icon: ClapperboardIcon,
            location: "/moment",
        },
        {
            id: "search",
            name: "검색",
            Icon: SearchIcon,
            location: "/search",
        },
        {
            id: "settings",
            name: "설정",
            Icon: CogIcon,
            location: "/settings",
        },
    ];

    return (
        <div
            className="absolute px-[16px] w-full bottom-0 left-0 flex justfiy-between gap-0"
            style={{
                paddingBottom: `${bar.bottom}px`,
                background: theme === "white" ? "white" : "transparent",
            }}
        >
            {menus.map((menu, i) => (
                <div
                    key={`menu-${i}`}
                    className="flex-1 p-[12px] flex flex-col gap-[6px] items-center transition-all duration-100 active:scale-95"
                    onClick={() => router.push(menu.location)}
                >
                    <menu.Icon
                        size={24}
                        className={
                            theme === "white"
                                ? menu.id === focus
                                    ? "stroke-gray-900"
                                    : "stroke-gray-400"
                                : menu.id === focus
                                ? "stroke-white"
                                : "stroke-white/40"
                        }
                    />

                    <span
                        className={`font-p-medium text-[14px] ${
                            theme === "white"
                                ? menu.id === focus
                                    ? "text-gray-900"
                                    : "text-gray-400"
                                : menu.id === focus
                                ? "text-white"
                                : "text-white/40"
                        }`}
                    >
                        {menu.name}
                    </span>
                </div>
            ))}
        </div>
    );
};
