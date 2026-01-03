"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { Loader } from "@/shared/components/loader";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        const timeout = setTimeout(() => router.push("/signin"), 500);

        return () => {
            clearTimeout(timeout);
        };
    }, [router]);

    return (
        <div className="w-full h-full">
            <Loader />
        </div>
    );
}
