"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";

import { Screen } from "@/shared/components/screen";

import { BillingHistoryComponent } from "./billing-history";
import { SecurityComponent } from "./security";
import { ProfileComponent } from "./profile";
import { BillingComponent } from "./billing";
import { EtcComponent } from "./etc";

import { useSettingsProps } from "../stores/props.zustand";

export const Layout = () => {
    const { action } = useSettingsProps();

    const containerVariants = useMemo(
        () => ({
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { duration: 0.1 } },
            exit: { opacity: 0, transition: { duration: 0.1 } },
        }),
        []
    );

    return (
        <Screen
            bf={
                ["profile", "billing_history"].includes(action)
                    ? 80
                    : action === "billing"
                    ? 144
                    : 0
            }
            className="!overflow-y-auto"
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={action}
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="w-full h-full"
                >
                    {action === "profile" && <ProfileComponent />}

                    {action === "security" && <SecurityComponent />}

                    {action === "billing" && <BillingComponent />}

                    {action === "billing_history" && (
                        <BillingHistoryComponent />
                    )}

                    {action === "etc" && <EtcComponent />}
                </motion.div>
            </AnimatePresence>
        </Screen>
    );
};

export default Layout;
