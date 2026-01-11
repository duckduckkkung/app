import { useRef, useEffect, useState } from "react";

import { useBar } from "../stores/bar.zustand";

interface TabProps {
    options: string[];
    tab: string;
    onChange: (newTab: string, direction: number) => void;
}

export const Tab = ({ options, tab, onChange }: TabProps) => {
    const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
    const tabRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    const bar = useBar();

    const getTabIndex = (tabName: string) => {
        return options.indexOf(tabName);
    };

    const handleTabClick = (newTab: string) => {
        const currentIndex = getTabIndex(tab);
        const newIndex = getTabIndex(newTab);
        const direction = newIndex > currentIndex ? 1 : -1;
        onChange(newTab, direction);
    };

    useEffect(() => {
        const activeTabRef = tabRefs.current[tab];
        if (activeTabRef) {
            setIndicatorStyle({
                width: activeTabRef.offsetWidth,
                left: activeTabRef.offsetLeft,
            });
        }
    }, [tab]);

    return (
        <div
            className="w-full sticky flex px-[16px] border-b border-b-gray-300"
            style={{
                top: `${bar.top}px`,
            }}
        >
            {options.map((option) => (
                <div
                    key={option}
                    ref={(el) => {
                        tabRefs.current[option] = el;
                    }}
                    className={`shrink-0 flex-1 p-[12px] flex justify-center items-center transition-all duration-100 active:scale-95 cursor-pointer group`}
                    onClick={() => handleTabClick(option)}
                >
                    <span
                        className={`text-[18px] transition-all duration-100 ${
                            option === tab
                                ? "font-p-medium text-gray-900"
                                : "font-p-regular text-gray-400"
                        }`}
                    >
                        {option}
                    </span>
                </div>
            ))}

            <div
                className="absolute bottom-0 h-[2px] bottom-[-1px] bg-gray-900 transition-all duration-300 ease-in-out"
                style={{
                    width: `${indicatorStyle.width}px`,
                    left: `${indicatorStyle.left}px`,
                }}
            />
        </div>
    );
};
