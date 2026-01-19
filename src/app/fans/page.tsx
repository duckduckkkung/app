"use client";

import { useRouter } from "next/navigation";

import { FansComponent } from "./components/fans";

export default function Fans() {
    const router = useRouter();

    const onClose = () => {
        router.push("/feed");
    };

    return <FansComponent onClose={onClose} />;
}
