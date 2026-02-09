import { create } from "zustand";

export const useSettingsProps = create<{
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;

    isCommunityOpen: boolean;
    setIsCommunityOpen: (isCommunityOpen: boolean) => void;
}>((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set((state) => ({ ...state, isOpen })),

    isCommunityOpen: false,
    setIsCommunityOpen: (isCommunityOpen) =>
        set((state) => ({ ...state, isCommunityOpen })),
}));
