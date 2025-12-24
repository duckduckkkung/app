"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { FrozenRoute } from "./prozen-route";

const queryClient = new QueryClient();

export const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <FrozenRoute>{children}</FrozenRoute>
            </QueryClientProvider>
        </>
    );
};
