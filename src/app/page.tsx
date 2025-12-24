"use client";

import { useBar } from "@/stores/bar.zustand";

export default function Home() {
    const bar = useBar();

    return (
        <div
            style={{
                paddingTop: `${bar.top}px`,
                paddingBottom: `${bar.bottom}px`,
            }}
        >
            엄..
        </div>
    );
}
