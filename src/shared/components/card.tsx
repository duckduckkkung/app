import { ChevronLeftIcon } from "lucide-react";
import { useMemo } from "react";
import Image from "next/image";

import IC from "@/assets/icons/ic.png";

import Kakaobank from "@/assets/icons/kakaobank.png";
import Tossbank from "@/assets/icons/tossbank.png";
import Wooribank from "@/assets/icons/wooribank.png";
import Nhbank from "@/assets/icons/nhbank.png";
import Shbank from "@/assets/icons/shbank.png";

export enum BankType {
    kakaobank,
    tossbank,
    wooribank,
    nhbank,
    shbank,
}

export interface TypeCard {
    id: string;
    bank: keyof typeof BankType;
    name: string;
    cardNumber: string;
    default: boolean;
}

interface CardProps {
    bank: keyof typeof BankType;
    cardNumber: string;
}

export const Card = ({ bank, cardNumber }: CardProps) => {
    const data = useMemo(() => {
        switch (bank) {
            case "kakaobank":
                return {
                    bg: "#FEE500",
                    stroke: "#C9B500",
                    text: "#1C1C1C",
                    logo: Kakaobank,
                    brand: (
                        <>
                            kakao<b>bank</b>
                        </>
                    ),
                };

            case "tossbank":
                return {
                    bg: "#FFFFFF",
                    stroke: "#D7D7D7",
                    text: "#101828",
                    logo: Tossbank,
                    brand: (
                        <>
                            <b>toss</b>bank
                        </>
                    ),
                };

            case "wooribank":
                return {
                    bg: "#FFFFFF",
                    stroke: "#D7D7D7",
                    text: "#101828",
                    logo: Wooribank,
                    brand: (
                        <>
                            <b>woori</b>bank
                        </>
                    ),
                };

            case "nhbank":
                return {
                    bg: "#00A94E",
                    stroke: "#007235",
                    text: "#FFFFFF",
                    logo: Nhbank,
                    brand: (
                        <>
                            <b>nh</b>bank
                        </>
                    ),
                };

            case "shbank":
                return {
                    bg: "#FFFFFF",
                    stroke: "#D7D7D7",
                    text: "#101828",
                    logo: Shbank,
                    brand: (
                        <>
                            <b>sh</b>bank
                        </>
                    ),
                };
        }
    }, [bank]);

    return (
        <div
            className="shrink-0 w-[calc(100dvw_-_48px)] aspect-[1.8/1] p-[16px] flex flex-col justify-between border rounded-[8px]"
            style={{
                backgroundColor: data.bg,
                borderColor: data.stroke,
            }}
        >
            <div className="flex flex-col gap-[24px]">
                <div className="flex justify-between items-center">
                    <Image src={data.logo} alt="bank" width={32} height={32} />

                    <span
                        className="font-p-gmsm text-[16px] *:font-p-gmsb"
                        style={{
                            color: data.text,
                        }}
                    >
                        {data.brand}
                    </span>
                </div>

                <div className="flex items-center gap-[4px]">
                    <ChevronLeftIcon
                        size={16}
                        style={{
                            stroke: data.text,
                        }}
                    />

                    <Image src={IC} alt="ic" width={36} />
                </div>
            </div>

            <div className="flex justify-end items-center">
                <div className="flex items-center gap-[8px]">
                    <span
                        className="font-p-gmsm text-[16px] leading-none translate-y-[2px]"
                        style={{
                            color: data.text,
                        }}
                    >
                        {cardNumber.slice(0, 4)}
                    </span>

                    <div className="flex items-center gap-[4px]">
                        <div
                            className="size-[4px] rounded-full"
                            style={{
                                backgroundColor: data.text,
                            }}
                        />
                        <div
                            className="size-[4px] rounded-full"
                            style={{
                                backgroundColor: data.text,
                            }}
                        />
                        <div
                            className="size-[4px] rounded-full"
                            style={{
                                backgroundColor: data.text,
                            }}
                        />
                        <div
                            className="size-[4px] rounded-full"
                            style={{
                                backgroundColor: data.text,
                            }}
                        />
                    </div>

                    <div className="flex items-center gap-[4px]">
                        <div
                            className="size-[4px] rounded-full"
                            style={{
                                backgroundColor: data.text,
                            }}
                        />
                        <div
                            className="size-[4px] rounded-full"
                            style={{
                                backgroundColor: data.text,
                            }}
                        />
                        <div
                            className="size-[4px] rounded-full"
                            style={{
                                backgroundColor: data.text,
                            }}
                        />
                        <div
                            className="size-[4px] rounded-full"
                            style={{
                                backgroundColor: data.text,
                            }}
                        />
                    </div>

                    <div className="flex items-center gap-[4px]">
                        <span
                            className="font-p-gmsm text-[16px] leading-none translate-y-[2px]"
                            style={{
                                color: data.text,
                            }}
                        >
                            {cardNumber.slice(12, 15)}
                        </span>

                        <div
                            className="size-[4px] rounded-full"
                            style={{
                                backgroundColor: data.text,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
