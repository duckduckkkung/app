import { create } from "zustand";

export const useToast = create<{
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;

    message: string;
    setMessage: (message: string) => void;
}>((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set((state) => ({ ...state, isOpen })),

    message: "Typography",
    setMessage: (message) => set((state) => ({ ...state, message })),
}));
