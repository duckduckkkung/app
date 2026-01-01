"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { BottomNavigator } from "@/shared/components/bottom-navigator";
import { Screen } from "@/shared/components/screen";
import { Loader } from "@/shared/components/loader";
import { Empty } from "@/shared/components/empty";

import { fans as MockFans } from "@/mocks/fans";

import { TypeFan } from "@/shared/types/types";
import { OverlayHeader } from "@/shared/components/overlay-header";

export default function Moment() {
    const [fans, setFans] = useState<{ isFetching: boolean; data: TypeFan[] }>({
        isFetching: true,
        data: [],
    });
    useEffect(() => {
        setTimeout(() => setFans({ isFetching: false, data: MockFans }), 500);
    }, []);

    const containerVariants = useMemo(
        () => ({
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { duration: 0.1 } },
            exit: { opacity: 0, transition: { duration: 0.1 } },
        }),
        []
    );

    return (
        <Screen className="bg-gray-900">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={fans.isFetching ? "fetching" : "fetched"}
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="relative w-full h-full overflow-y-scroll"
                >
                    {fans.isFetching ? (
                        <Loader />
                    ) : fans.data.length > 0 ? (
                        <>
                            <OverlayHeader theme="dark" title="모먼트" />

                            <div className="p-[48px_16px]"></div>
                        </>
                    ) : (
                        <Empty
                            title="Not Found"
                            text="결과를 찾지 못했습니다."
                        />
                    )}
                </motion.div>
            </AnimatePresence>

            <BottomNavigator theme="dark" focus="moment" />
        </Screen>
    );
}
