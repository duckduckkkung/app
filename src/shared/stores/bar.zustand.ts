import { create } from "zustand";

const MODE = process.env.NEXT_PUBLIC_MODE;

export const useBar = create<{
    top: number;
    bottom: number;
    set: (top: number, bottom: number) => void;
}>((set) => ({
    top: MODE === "test" ? 59 : 0,
    bottom: MODE === "test" ? 34 : 0,
    set: (top, bottom) => set((state) => ({ ...state, top, bottom })),
}));
