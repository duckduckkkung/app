"use client";

import {
    motion,
    AnimatePresence,
    PanInfo,
    useMotionValue,
    useTransform,
    MotionValue,
    useDragControls,
} from "framer-motion";
import { createContext, useContext, useMemo, useState } from "react";

interface OverlayContextValue {
    x: MotionValue<number>;
    isOpen: boolean;
    onClose: () => void;
    isDragging: boolean;
    setIsDragging: (isDragging: boolean) => void;
}

const OverlayContext = createContext<OverlayContextValue | null>(null);

const useOverlayContext = () => {
    const context = useContext(OverlayContext);
    if (!context) {
        throw new Error("Overlay 컴포넌트 내부에서 사용해야 합니다");
    }
    return context;
};

interface OverlayProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export const Overlay = ({ children, isOpen, onClose }: OverlayProps) => {
    const x = useMotionValue(0);
    const [isDragging, setIsDragging] = useState(false);
    const value = useMemo(
        () => ({ x, isOpen, onClose, isDragging, setIsDragging }),
        [x, isOpen, onClose, isDragging, setIsDragging]
    );

    return (
        <OverlayContext.Provider value={value}>
            {children}
        </OverlayContext.Provider>
    );
};

const Parent = ({ children }: { children: React.ReactNode }) => {
    const { x, isOpen, isDragging } = useOverlayContext();

    const innerWidth = typeof window !== "undefined" ? window.innerWidth : 400;
    const parentX = useTransform(x, [0, innerWidth], ["-30%", "0%"]);

    return (
        <motion.div
            key="overlay-parent"
            initial={{ x: "0%" }}
            exit={{ x: "0%" }}
            style={{
                x: isOpen ? parentX : 0,
                transition: isDragging ? undefined : "all 0.25s ease-out",
            }}
            className="fixed inset-0 z-100"
        >
            {children}
        </motion.div>
    );
};

const Children = ({ children }: { children: React.ReactNode }) => {
    const { x, isOpen, onClose, setIsDragging } = useOverlayContext();
    const dragControls = useDragControls();

    const handleDragEnd = (
        _: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo
    ) => {
        setIsDragging(false);

        if (info.offset.x > 50 || info.velocity.x > 500) onClose();
        else x.set(0);
    };

    return (
        <AnimatePresence onExitComplete={() => x.set(0)}>
            {isOpen && (
                <>
                    <motion.div
                        key="overlay-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-gray-900 z-200"
                        onClick={onClose}
                    />

                    <motion.div
                        key="overlay-children"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={{
                            initial: {
                                x: "100%",
                                opacity: 0,
                            },
                            animate: {
                                x: 0,
                                opacity: 1,
                                transition: {
                                    x: {
                                        type: "tween",
                                        duration: 0.25,
                                        ease: "easeOut",
                                    },
                                    opacity: { duration: 0, delay: 0 },
                                },
                            },
                            exit: {
                                x: "100%",
                                opacity: 0,
                                transition: {
                                    x: {
                                        type: "tween",
                                        duration: 0.25,
                                        ease: "easeOut",
                                    },
                                    opacity: { duration: 0.05, delay: 0.2 },
                                },
                            },
                        }}
                        drag="x"
                        dragControls={dragControls}
                        dragListener={false}
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={{ left: 0, right: 0.6 }}
                        dragMomentum={false}
                        onDragEnd={handleDragEnd}
                        onDragStart={() => setIsDragging(true)}
                        style={{ x }}
                        className="fixed top-0 right-0 w-full h-full bg-white shadow-2xl z-300 overflow-hidden"
                    >
                        <div
                            onPointerDown={(e) => dragControls.start(e)}
                            className="absolute left-0 top-0 bottom-0 w-10 z-100 cursor-grab active:cursor-grabbing"
                            style={{ touchAction: "none" }}
                        />

                        <div className="w-full h-full">{children}</div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

Overlay.Parent = Parent;
Overlay.Children = Children;
