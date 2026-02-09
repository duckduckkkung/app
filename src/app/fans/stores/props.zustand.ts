import { create } from "zustand";

import { SettingsActions } from "../types/types";

export const useSettingsProps = create<{
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;

    isCommunityOpen: boolean;
    setIsCommunityOpen: (isCommunityOpen: boolean) => void;

    isSubOpen: boolean;
    setIsSubOpen: (isSubOpen: boolean) => void;
    subAction: keyof typeof SettingsActions;
    setSubAction: (action: keyof typeof SettingsActions) => void;

    isManageOpen: boolean;
    setIsManageOpen: (isManageOpen: boolean) => void;
}>((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set((state) => ({ ...state, isOpen })),

    isCommunityOpen: false,
    setIsCommunityOpen: (isCommunityOpen) =>
        set((state) => ({ ...state, isCommunityOpen })),

    isSubOpen: false,
    setIsSubOpen: (isSubOpen) => set((state) => ({ ...state, isSubOpen })),
    subAction: "write",
    setSubAction: (subAction) => set((state) => ({ ...state, subAction })),

    isManageOpen: false,
    setIsManageOpen: (isManageOpen) =>
        set((state) => ({ ...state, isManageOpen })),
}));
