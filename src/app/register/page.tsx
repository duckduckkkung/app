"use client";

import {
    ArrowUpRightIcon,
    ImageUpIcon,
    KeyRoundIcon,
    ListCheckIcon,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AxiosError } from "axios";

import { BottomSheet } from "@/shared/components/bottom-sheet";
import { Button } from "@/shared/components/button";
import { Screen } from "@/shared/components/screen";
import { Footer } from "@/shared/components/footer";
import { Verify } from "@/shared/components/verify";
import { Loader } from "@/shared/components/loader";
import { Input } from "@/shared/components/input";
import { Empty } from "@/shared/components/empty";
import { Check } from "@/shared/components/check";

import { useToast } from "@/shared/stores/toast.zustand";

import {
    ErrorCode,
    register,
    ResponseTemplate,
    sendOtp,
    SocialLoginResponse,
    verifyOtp,
} from "@ice1/api-client";
import { useGuestInfo } from "@/shared/hooks/oauth2";

import { REGEX } from "@/shared/utils/regex";

export default function Register() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const { setMessage, setIsOpen: setIsToastOpen } = useToast();

    const token = decodeURIComponent(searchParams.get("token") as string);
    const provider = searchParams.get("provider") as string;

    const [email, setEmail] = useState<string>("");
    const emailVerify = useMemo(
        () => ({
            one: REGEX.EMAIL.test(email.trim()),
        }),
        [email]
    );

    const [name, setName] = useState<string>("");
    const nameVerify = useMemo(
        () => ({
            one: /^[a-zA-Zㄱ-ㅎ가-힣 ]+$/.test(name.trim()),
            two: /^[\s\S]{3,20}$/.test(name.trim()),
        }),
        [name]
    );

    const [bio, setBio] = useState<string>("");
    const bioVerify = useMemo(
        () => ({
            one: REGEX.INTRODUCTION.test(bio.trim()),
        }),
        [bio]
    );

    const [profileImage, setProfileImage] = useState<string>("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [agrees, setAgrees] = useState<boolean[]>([
        false,
        false,
        false,
        false,
    ]);

    const [otp, setOtp] = useState<string>("");
    const otpVerify = useMemo(
        () => ({
            one: /^[0-9]+$/.test(otp.trim()),
            two: /^.{6}$/.test(otp.trim()),
        }),
        [otp]
    );

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isOtpOpen, setIsOtpOpen] = useState<boolean>(false);
    const [isCreating, setIsCreating] = useState<boolean>(false);

    const { data: guestInfo, isFetching: isGuestInfoFetching } = useGuestInfo({
        provider,
        token,
    });
    const [setupFlag, setSetupFlag] = useState<boolean>(false);

    useEffect(() => {
        if (setupFlag || isGuestInfoFetching) return;

        if (!guestInfo) {
            setMessage("정보가 존재하지 않습니다.");
            setIsToastOpen(true);
            router.push("/signin");
            return;
        }

        setSetupFlag(true);
        setEmail(guestInfo?.data.email || "");
        setName(guestInfo?.data.username || "");
        setProfileImage(guestInfo?.data.profile_image_src || "");
    }, [
        setupFlag,
        guestInfo,
        isGuestInfoFetching,
        router,
        setMessage,
        setIsToastOpen,
    ]);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (
                !["image/png", "image/jpeg", "image/webp"].includes(file.type)
            ) {
                return;
            }

            const reader = new FileReader();
            reader.onload = () => {
                setProfileImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const isNextStepImpossible = useMemo(
        () =>
            isCreating ||
            !REGEX.NICKNAME.test(name.trim()) ||
            !REGEX.EMAIL.test(email.trim()) ||
            !REGEX.INTRODUCTION.test(bio.trim()),
        [isCreating, name, email, bio]
    );

    const submit = async () => {
        setIsOpen(false);

        try {
            await sendOtp({
                token,
                email,
            });

            setIsOtpOpen(true);
        } catch {
            setIsCreating(false);
            setMessage("인증번호 발송에 실패하였습니다.");
            setIsToastOpen(true);
        }
    };

    const otpSubmit = async () => {
        if (isCreating) return;

        if (!(agrees[0] && agrees[1] && agrees[2])) {
            return;
        }

        if (!REGEX.OTP.test(otp.trim())) {
            return;
        }

        if (!REGEX.EMAIL.test(email.trim())) {
            return;
        }

        if (!REGEX.NICKNAME.test(name.trim())) {
            return;
        }

        if (!REGEX.INTRODUCTION.test(bio.trim())) {
            return;
        }

        setIsOtpOpen(false);

        const otpResponse = await verifyOtp({
            token,
            email,
            code: otp,
        });

        if (!otpResponse.data.result) {
            setIsCreating(false);
            setMessage("OTP가 일치하지 않습니다.");
            setIsToastOpen(true);
            setOtp("");

            return;
        }

        let profileImage: File | undefined;
        if (
            fileInputRef.current?.files &&
            (fileInputRef.current?.files?.length || 0) > 0
        ) {
            profileImage = fileInputRef.current.files[0];
        }

        try {
            await register({
                username: name,
                email: email,
                introduction: bio,
                provider_name: provider,
                token,
                file: profileImage,
            });

            router.push("/feed");
        } catch (error) {
            if (!(error instanceof AxiosError)) {
                return;
            }

            setIsCreating(false);
            setMessage("회원가입에 실패하였습니다.");
            setIsToastOpen(true);

            const response = error.response
                ?.data as unknown as ResponseTemplate<SocialLoginResponse>;

            if (response.errorCode === ErrorCode.USER_IS_EXISTS_NAME) {
                setMessage("중복된 닉네임 입니다.");
                setIsToastOpen(true);
                setIsOtpOpen(false);
                setOtp("");

                return;
            } else {
                setMessage("회원가입에 실패하였습니다.");
                setIsToastOpen(true);
                setIsOtpOpen(false);
                setOtp("");
            }

            return;
        }
    };

    return (
        <>
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
            />

            <Screen bf={80}>
                {isGuestInfoFetching ? (
                    <Loader />
                ) : guestInfo?.data ? (
                    <>
                        <div className="p-[48px_16px] flex flex-col gap-[48px]">
                            <div className="flex justify-center">
                                <div
                                    className="size-[128px] bg-gray-100 rounded-[12px] flex justify-center items-center overflow-hidden"
                                    onClick={() =>
                                        fileInputRef.current?.click()
                                    }
                                >
                                    {profileImage ? (
                                        <>
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={profileImage}
                                                alt="profile"
                                                className="size-full object-cover"
                                            />
                                        </>
                                    ) : (
                                        <ImageUpIcon
                                            size={64}
                                            className="stroke-gray-400"
                                        />
                                    )}
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
                                        value={email}
                                        onChange={setEmail}
                                        placeholder="이메일을 입력해 주세요."
                                        disabled={isOpen || isOtpOpen}
                                    />

                                    <div className="flex flex-wrap gap-[8px]">
                                        <Verify
                                            label="유효한 이메일"
                                            checked={emailVerify.one}
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
                                        value={name}
                                        onChange={setName}
                                        placeholder="닉네임을 입력해 주세요."
                                        disabled={isOpen || isOtpOpen}
                                    />

                                    <div className="flex flex-wrap gap-[8px]">
                                        <Verify
                                            label="한영 대소문자 (띄어쓰기 가능)"
                                            checked={nameVerify.one}
                                        />

                                        <Verify
                                            label="3-20자"
                                            checked={nameVerify.two}
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
                                        value={bio}
                                        onChange={setBio}
                                        placeholder="간단한 자기소개를 입력해 주세요."
                                        disabled={isOpen || isOtpOpen}
                                    />

                                    <div className="flex flex-wrap gap-[8px]">
                                        <Verify
                                            label="0-40자"
                                            checked={bioVerify.one}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <Empty />
                )}

                <Footer bp>
                    <Button
                        type="md"
                        variants="black"
                        onClick={() => {
                            setIsOpen(true);
                            setIsCreating(true);
                        }}
                        disabled={isNextStepImpossible}
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
                        setAgrees([false, false, false, false]);
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
                                    required
                                    checked={agrees[0]}
                                    onChange={(e) =>
                                        setAgrees(([a, b, c, d]) => {
                                            a = e;
                                            return [a, b, c, d];
                                        })
                                    }
                                />

                                <Check
                                    text="개인정보 수집 및 이용에 동의합니다."
                                    required
                                    checked={agrees[1]}
                                    onChange={(e) =>
                                        setAgrees(([a, b, c, d]) => {
                                            b = e;
                                            return [a, b, c, d];
                                        })
                                    }
                                />

                                <Check
                                    text="개인정보 처리 위탁에 동의합니다."
                                    required
                                    checked={agrees[2]}
                                    onChange={(e) =>
                                        setAgrees(([a, b, c, d]) => {
                                            c = e;
                                            return [a, b, c, d];
                                        })
                                    }
                                />

                                <Check
                                    text="마케팅 수신에 동의합니다."
                                    checked={agrees[3]}
                                    onChange={(e) =>
                                        setAgrees(([a, b, c, d]) => {
                                            d = e;
                                            return [a, b, c, d];
                                        })
                                    }
                                />
                            </div>

                            <Button
                                type="md"
                                variants="black"
                                onClick={submit}
                                disabled={
                                    !(agrees[0] && agrees[1] && agrees[2])
                                }
                            >
                                <KeyRoundIcon
                                    size={20}
                                    className="stroke-white"
                                />
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
                        setOtp("");
                        setAgrees([false, false, false, false]);
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
                                    value={otp}
                                    onChange={setOtp}
                                    placeholder="6자리 인증번호를 입력해 주세요."
                                />

                                <div className="flex flex-wrap gap-[8px]">
                                    <Verify
                                        label="숫자만"
                                        checked={otpVerify.one}
                                    />

                                    <Verify
                                        label="6자"
                                        checked={otpVerify.two}
                                    />
                                </div>
                            </div>

                            <Button
                                type="md"
                                variants="primary"
                                onClick={otpSubmit}
                                disabled={!otpVerify.one || !otpVerify.two}
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
        </>
    );
}
