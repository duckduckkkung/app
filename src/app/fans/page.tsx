"use client";

import { useEffect } from "react";

import { Layout } from "./components/layout";

import { useSettingsProps } from "./stores/props.zustand";

export default function Fans() {
    const { setIsOpen } = useSettingsProps();

    useEffect(() => {
        setIsOpen(true);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Layout>
            <div />
        </Layout>
    );
}
