"use client";

import {
    ArrowUpRightIcon,
    ImageUpIcon,
    KeyRoundIcon,
    ListCheckIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { PullToRefresh } from "@/shared/components/pull-to-refresh";
import { BottomSheet } from "@/shared/components/bottom-sheet";
import { Button } from "@/shared/components/button";
import { Screen } from "@/shared/components/screen";
import { Footer } from "@/shared/components/footer";
import { Verify } from "@/shared/components/verify";
import { Loader } from "@/shared/components/loader";
import { Input } from "@/shared/components/input";
import { Empty } from "@/shared/components/empty";
import { Check } from "@/shared/components/check";

export default function Register() {
    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);
    const [isOtpOpen, setIsOtpOpen] = useState(false);
    const [isCreating, setIsCreating] = useState(false);

    const [guest, setGuest] = useState<{ isFetching: boolean; data: object }>({
        isFetching: true,
        data: {},
    });
    useEffect(() => {
        setTimeout(() => setGuest({ isFetching: false, data: {} }), 500);
    }, []);

    return (
        <Screen bf={80}>
            <PullToRefresh
                motionKey={guest.isFetching ? "fetching" : "fetched"}
                onRefresh={async () => {
                    setGuest({ isFetching: true, data: {} });
                    setTimeout(
                        () =>
                            setGuest({
                                isFetching: false,
                                data: {},
                            }),
                        500
                    );
                }}
            >
                {guest.isFetching ? (
                    <Loader />
                ) : guest.data ? (
                    <>
                        <div className="p-[48px_16px] flex flex-col gap-[48px]">
                            <div className="flex justify-center">
                                <div className="size-[100px] bg-gray-100 rounded-[12px] flex justify-center items-center">
                                    <ImageUpIcon
                                        size={48}
                                        className="stroke-gray-400"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-[32px]">
                                <div className="flex flex-col gap-[8px]">
                                    <div className="flex items-center gap-[4px]">
                                        <span className="font-p-medium text-[16px] text-c-primary">
                                            *
                                        </span>

                                        <span className="font-p-medium text-[16px] text-gray-600">
                                            이메일
                                        </span>
                                    </div>

                                    <Input
                                        type="md"
                                        variants="outline"
                                        value=""
                                        onChange={() => {}}
                                        placeholder="이메일을 입력해 주세요."
                                        disabled={isOpen || isOtpOpen}
                                    />

                                    <div className="flex flex-wrap gap-[8px]">
                                        <Verify
                                            label="유효한 이메일"
                                            checked={false}
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-[8px]">
                                    <div className="flex items-center gap-[4px]">
                                        <span className="font-p-medium text-[16px] text-c-primary">
                                            *
                                        </span>

                                        <span className="font-p-medium text-[16px] text-gray-600">
                                            닉네임
                                        </span>
                                    </div>

                                    <Input
                                        type="md"
                                        variants="outline"
                                        value=""
                                        onChange={() => {}}
                                        placeholder="닉네임을 입력해 주세요."
                                        disabled={isOpen || isOtpOpen}
                                    />

                                    <div className="flex flex-wrap gap-[8px]">
                                        <Verify
                                            label="한영 대소문자 (띄어쓰기 가능)"
                                            checked={false}
                                        />

                                        <Verify
                                            label="3-20자"
                                            checked={false}
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-[8px]">
                                    <div className="flex items-center gap-[4px]">
                                        <span className="font-p-medium text-[16px] text-gray-400">
                                            (선택)
                                        </span>

                                        <span className="font-p-medium text-[16px] text-gray-600">
                                            자기소개
                                        </span>
                                    </div>

                                    <Input
                                        type="md"
                                        variants="outline"
                                        value=""
                                        onChange={() => {}}
                                        placeholder="간단한 자기소개를 입력해 주세요."
                                        disabled={isOpen || isOtpOpen}
                                    />

                                    <div className="flex flex-wrap gap-[8px]">
                                        <Verify
                                            label="0-40자"
                                            checked={false}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <Empty />
                )}
            </PullToRefresh>

            <Footer bp>
                <Button
                    type="md"
                    variants="black"
                    onClick={() => {
                        setIsOpen(true);
                        setIsCreating(true);
                    }}
                    disabled={isCreating}
                >
                    <ListCheckIcon size={20} className="stroke-white" />
                    필수항목 동의하기
                </Button>
            </Footer>

            <BottomSheet
                isOpen={isOpen}
                onClose={() => {
                    setIsOpen(false);
                    setIsCreating(false);
                }}
            >
                <div className="flex flex-col gap-[32px]">
                    <div className="flex flex-col gap-[12px]">
                        <p className="font-p-semibold text-[20px] text-gray-900">
                            서비스 이용을 위해 동의가 필요해요.
                        </p>

                        <p className="font-p-regular text-[16px] text-gray-600">
                            안전하고 편리한 서비스 이용을 위해
                            <br />
                            아래 항목에 동의해 주세요.
                        </p>
                    </div>

                    <div className="flex flex-col gap-[16px]">
                        <div className="flex flex-col gap-[10px]">
                            <Check
                                text="이용약관에 동의합니다"
                                link="1"
                                required
                                checked={true}
                            />

                            <Check
                                text="개인정보 수집 및 이용에 동의합니다."
                                link="2"
                                required
                                checked={true}
                            />

                            <Check
                                text="개인정보 처리 위탁에 동의합니다."
                                link="3"
                                required
                                checked={true}
                            />

                            <Check
                                text="마케팅 수신에 동의합니다."
                                link="4"
                                checked={false}
                            />
                        </div>

                        <Button
                            type="md"
                            variants="black"
                            onClick={() => {
                                setIsOpen(false);
                                setTimeout(() => setIsOtpOpen(true), 500);
                            }}
                        >
                            <KeyRoundIcon size={20} className="stroke-white" />
                            2차 인증하기
                        </Button>
                    </div>
                </div>
            </BottomSheet>

            <BottomSheet
                isOpen={isOtpOpen}
                onClose={() => {
                    setIsOtpOpen(false);
                    setIsCreating(false);
                }}
            >
                <div className="flex flex-col gap-[32px]">
                    <div className="flex flex-col gap-[12px]">
                        <p className="font-p-semibold text-[20px] text-gray-900">
                            입력한 이메일로 인증번호를 보냈어요.
                        </p>

                        <p className="font-p-regular text-[16px] text-gray-600">
                            6자리 인증번호를 붙여넣어 주세요.
                        </p>
                    </div>

                    <div className="flex flex-col gap-[16px]">
                        <div className="flex flex-col gap-[8px]">
                            <div className="flex items-center gap-[4px]">
                                <span className="font-p-medium text-[16px] text-c-primary">
                                    *
                                </span>

                                <span className="font-p-medium text-[16px] text-gray-600">
                                    인증번호
                                </span>
                            </div>

                            <Input
                                type="md"
                                variants="outline"
                                value=""
                                onChange={() => {}}
                                placeholder="6자리 인증번호를 입력해 주세요."
                            />

                            <div className="flex flex-wrap gap-[8px]">
                                <Verify label="숫자만" checked={false} />

                                <Verify label="6자" checked={false} />
                            </div>
                        </div>

                        <Button
                            type="md"
                            variants="primary"
                            onClick={() => {
                                setIsOtpOpen(false);
                                router.push("/feed");
                            }}
                        >
                            <ArrowUpRightIcon
                                size={20}
                                className="stroke-white"
                            />
                            덕질 시작하기
                        </Button>
                    </div>
                </div>
            </BottomSheet>
        </Screen>
    );
}
