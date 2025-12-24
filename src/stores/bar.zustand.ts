import { create } from "zustand";

export const useBar = create<{
    top: number;
    bottom: number;
    set: (top: number, bottom: number) => void;
}>((set) => ({
    top: 0,
    bottom: 0,
    set: (top, bottom) => set((state) => ({ ...state, top, bottom })),
}));
