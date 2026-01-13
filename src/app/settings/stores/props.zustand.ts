import { create } from "zustand";

import { SettingsActions } from "../types/types";

export const useSettingsProps = create<{
    action: keyof typeof SettingsActions;
    setAction: (action: keyof typeof SettingsActions) => void;

    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;

    isHistoryOpen: boolean;
    setIsHistoryOpen: (isHistoryOpen: boolean) => void;
}>((set) => ({
    action: "profile",
    setAction: (action) => set((state) => ({ ...state, action })),

    isOpen: false,
    setIsOpen: (isOpen) => set((state) => ({ ...state, isOpen })),

    isHistoryOpen: false,
    setIsHistoryOpen: (isHistoryOpen) =>
        set((state) => ({ ...state, isHistoryOpen })),
}));
