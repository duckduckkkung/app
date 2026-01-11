"use client";

import Image from "next/image";

import { Button } from "@/shared/components/button";
import { Screen } from "@/shared/components/screen";
import { Footer } from "@/shared/components/footer";

import Start from "@/assets/icons/start.png";

import GoogleIcon from "@/assets/icons/google.png";
import KakaoIcon from "@/assets/icons/kakao.png";

export default function SignIn() {
    const redirectKakao = () => {
        const CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY;
        const REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;

        location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    };

    const redirectGoogle = () => {
        const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
        const REDIRECT_URI = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;

        location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=email+profile`;
    };

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
                        onClick={redirectGoogle}
                    >
                        <Image
                            src={GoogleIcon}
                            alt="google"
                            width={20}
                            height={20}
                        />
                        Google로 시작하기
                    </Button>

                    <Button type="md" variants="kakao" onClick={redirectKakao}>
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
