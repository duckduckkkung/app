"use client";

import {
    motion,
    AnimatePresence,
    PanInfo,
    useMotionValue,
    useDragControls,
} from "framer-motion";

import { useBar } from "@/stores/bar.zustand";

interface BottomSheetProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const BottomSheet = ({
    isOpen,
    onClose,
    children,
}: BottomSheetProps) => {
    const bar = useBar();

    const dragControls = useDragControls();
    const y = useMotionValue(0);

    const handleDragEnd = (
        _: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo
    ) => {
        if (info.offset.y > 100 || info.velocity.y > 500) {
            onClose();
        } else {
            y.set(0);
        }
    };

    return (
        <AnimatePresence onExitComplete={() => y.set(0)}>
            {isOpen && (
                <>
                    <motion.div
                        key="bottomsheet-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black z-100"
                        onClick={onClose}
                    />

                    <motion.div
                        key="bottomsheet-children"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={{
                            initial: {
                                y: "100%",
                                opacity: 0,
                            },
                            animate: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    y: {
                                        type: "tween",
                                        duration: 0.25,
                                        ease: "easeOut",
                                    },
                                    opacity: { duration: 0, delay: 0 },
                                },
                            },
                            exit: {
                                y: "100%",
                                opacity: 0,
                                transition: {
                                    y: {
                                        type: "tween",
                                        duration: 0.25,
                                        ease: "easeIn",
                                    },
                                    opacity: { duration: 0.05, delay: 0.2 },
                                },
                            },
                        }}
                        drag="y"
                        dragControls={dragControls}
                        dragListener={false}
                        dragConstraints={{ top: 0, bottom: 0 }}
                        dragElastic={{ top: 0.6, bottom: 0.6 }}
                        dragMomentum={false}
                        onDragEnd={handleDragEnd}
                        style={{
                            y,
                            bottom: `${bar.bottom}px`,
                            touchAction: "none",
                        }}
                        className="rounded-[24px] fixed left-[16px] right-[16px] bg-white z-200 overflow-hidden max-h-[90vh] p-[16px] pt-[8px] flex flex-col gap-[24px]"
                    >
                        <div
                            className="absolute top-0 left-0 w-full h-[80px] z-100"
                            onPointerDown={(e) => {
                                e.stopPropagation();
                                dragControls.start(e);
                            }}
                            style={{ touchAction: "none" }}
                        />
                        <div
                            className="flex justify-center items-center cursor-grab active:cursor-grabbing"
                            style={{ touchAction: "none" }}
                        >
                            <div className="w-[40px] h-[6px] bg-gray-200 rounded-[100px]" />
                        </div>

                        <div className="w-full h-full overflow-y-auto">
                            {children}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
