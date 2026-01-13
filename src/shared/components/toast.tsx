import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import { useToast } from "../stores/toast.zustand";
import { useBar } from "../stores/bar.zustand";

export const Toast = () => {
    const { message, isOpen, setIsOpen } = useToast();
    const bar = useBar();

    useEffect(() => {
        if (isOpen && message) {
            const timer = setTimeout(() => {
                setIsOpen(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [isOpen, message, setIsOpen]);

    return (
        <AnimatePresence>
            {isOpen && message && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{
                        duration: 0.3,
                        ease: [0.4, 0, 0.2, 1],
                    }}
                    className="fixed left-1/2 -translate-x-1/2 bg-gray-900 p-[12px_24px] rounded-[8px] z-1000 w-max flex justify-center items-center"
                    style={{
                        bottom: `${bar.bottom + 128}px`,
                    }}
                    onClick={() => setIsOpen(false)}
                >
                    <span className="font-p-medium text-[16px] text-white text-center">
                        {message}
                    </span>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
