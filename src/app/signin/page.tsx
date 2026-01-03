"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { Button } from "@/shared/components/button";
import { Screen } from "@/shared/components/screen";
import { Footer } from "@/shared/components/footer";

import Start from "@/assets/icons/start.png";

import GoogleIcon from "@/assets/icons/google.png";
import KakaoIcon from "@/assets/icons/kakao.png";

export default function SignIn() {
    const router = useRouter();

    return (
        <Screen>
            <div className="w-full h-full pt-[100px] relative">
                <div className="w-full flex justify-center">
                    <Image src={Start} alt="start" />
                </div>

                <Footer>
                    <Button
                        type="md"
                        variants="outline"
                        onClick={() => router.push("/feed")}
                    >
                        <Image
                            src={GoogleIcon}
                            alt="google"
                            width={20}
                            height={20}
                        />
                        Google로 시작하기
                    </Button>

                    <Button
                        type="md"
                        variants="kakao"
                        onClick={() => router.push("/register")}
                    >
                        <Image
                            src={KakaoIcon}
                            alt="kakao"
                            width={20}
                            height={20}
                        />
                        카카오로 시작하기
                    </Button>
                </Footer>
            </div>
        </Screen>
    );
}
