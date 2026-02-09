import {
    ChevronLeftIcon,
    EllipsisIcon,
    HeartIcon,
    SendIcon,
} from "lucide-react";

import { OverlayHeader } from "@/shared/components/overlay-header";
import { Comments } from "@/shared/components/comments";
import { Button } from "@/shared/components/button";
import { Footer } from "@/shared/components/footer";
import { Input } from "@/shared/components/input";

import { useSettingsProps } from "../../stores/props.zustand";

export const DetailComponent = () => {
    const { setIsSubOpen, setIsManageOpen } = useSettingsProps();

    const comments = [
        {
            id: "asdf",
            writer: {
                name: "엄준식",
                profileImage: "",
            },
            heartCount: 71,
            content: "너무 이ㅃ",
            subComment: [
                {
                    id: "asdfgh",
                    writer: {
                        name: "극악무도한하영사랑꾼",
                        profileImage: "",
                    },
                    heartCount: 28,
                    content: "이분 끝내 돌아가셨습니다.",
                    subComment: [],
                },
                {
                    id: "asdfghj",
                    writer: {
                        name: "이야이",
                        profileImage: "",
                    },
                    heartCount: 2,
                    content: "ㅋㅋㅋㅋㅋㅋㅋㅋ",
                    subComment: [],
                },
            ],
        },
        {
            id: "asdfghjk",
            writer: {
                name: "극악무도한하영사랑꾼",
                profileImage: "",
            },
            heartCount: 6,
            content: "와 진짜 귀엽다",
            subComment: [],
        },
        {
            id: "asdfghjkl",
            writer: {
                name: "피융",
                profileImage: "",
            },
            heartCount: 0,
            content: "이분머임???",
            subComment: [],
        },
        {
            id: "asdfghjkl;",
            writer: {
                name: "오이거는첨봄",
                profileImage: "",
            },
            heartCount: 0,
            content: "밍끼야아아아악",
            subComment: [],
        },
    ];

    return (
        <>
            <div className="h-full overflow-y-scroll">
                <OverlayHeader
                    title="게시글"
                    left={{
                        Component: ChevronLeftIcon,
                        onClick: () => setIsSubOpen(false),
                    }}
                    right={{
                        Component: EllipsisIcon,
                        onClick: () => setIsManageOpen(true),
                    }}
                />

                <div className="p-[24px_16px]">
                    <div className="flex flex-col gap-[24px]">
                        <span className="font-p-semibold text-[24px] text-gray-900">
                            내 아내임.
                        </span>

                        <div className="flex flex-wrap gap-[32px]">
                            <div className="flex flex-col gap-[4px]">
                                <p className="font-p-regular text-[16px] text-gray-400">
                                    작성자
                                </p>

                                <span className="font-p-medium text-[18px] text-gray-900">
                                    엄준식
                                </span>
                            </div>

                            <div className="flex flex-col gap-[4px]">
                                <p className="font-p-regular text-[16px] text-gray-400">
                                    작성일
                                </p>

                                <span className="font-p-medium text-[18px] text-gray-900">
                                    2026년 2월 1일
                                </span>
                            </div>

                            <div className="flex flex-col gap-[4px]">
                                <p className="font-p-regular text-[16px] text-gray-400">
                                    말머리
                                </p>

                                <span className="font-p-medium text-[18px] text-gray-900">
                                    🖼️ 사진관
                                </span>
                            </div>

                            <div className="flex flex-col gap-[4px]">
                                <p className="font-p-regular text-[16px] text-gray-400">
                                    조회수
                                </p>

                                <span className="font-p-medium text-[18px] text-gray-900">
                                    2,717
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-[8px] bg-gray-100" />

                <div className="p-[16px] flex flex-col gap-[48px]">
                    <span className="font-p-mj text-[18px] text-gray-900">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Doloremque labore itaque minus ex. Explicabo
                        voluptatem quod itaque vel in omnis blanditiis, rerum
                        tempora nisi, deleniti ad incidunt nobis voluptatibus
                        corporis? Deserunt, repellendus porro expedita numquam
                        distinctio repudiandae laudantium blanditiis deleniti
                        exercitationem odio libero ullam odit debitis maiores
                        fuga tenetur atque. Dolore voluptatibus totam ratione?
                        Expedita dicta cumque maiores! Neque, illo. Fugiat fuga
                        numquam ratione illo dolorum neque non distinctio.
                        Corporis harum asperiores, libero laboriosam eaque
                        soluta quaerat dolores dolorum laudantium tenetur
                        voluptatum doloremque deserunt quod architecto, esse
                        quidem similique earum. Facere dicta, aliquam nihil
                        repellendus natus blanditiis quo quam cum ex in
                        repudiandae. Aliquid nostrum facilis id, unde alias
                        culpa nesciunt quidem deleniti voluptatum blanditiis
                        itaque illo libero iusto. Voluptatem! Maxime eum error
                        sapiente incidunt! Perferendis nesciunt exercitationem
                        enim recusandae ab nisi deserunt! Ipsum unde numquam
                        quae tenetur eum ab perspiciatis omnis illum, vel vitae
                        quam eos eaque magnam a. Quidem ratione adipisci
                        perspiciatis ex omnis est, suscipit reprehenderit
                        exercitationem facilis quam provident mollitia quis ab,
                        ullam, molestiae similique pariatur? Quae ut quos,
                        deleniti dolores impedit hic pariatur ratione maxime?
                    </span>

                    <div className="flex flex-col gap-[24px]">
                        <div className="flex items-center gap-[8px]">
                            <span className="font-p-semibold text-[20px] text-gray-900">
                                댓글
                            </span>

                            <span className="font-p-gmsm text-[18px] text-gray-400 translate-y-[2px] leading-none">
                                {comments.length}
                            </span>
                        </div>

                        <Comments comments={comments} />

                        <div className="flex items-center gap-[12px]">
                            <Input
                                type="md"
                                variants="outline"
                                value=""
                                onChange={() => {}}
                                placeholder="댓글 입력..."
                            />

                            <div className="w-fit">
                                <Button type="md_icon" variants="black">
                                    <SendIcon
                                        size={16}
                                        className="stroke-white"
                                    />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer bp>
                <Button
                    type="md"
                    variants="outline"
                    onClick={() => setIsSubOpen(false)}
                >
                    <HeartIcon size={20} className="stroke-gray-900" />
                    좋아요
                </Button>
            </Footer>
        </>
    );
};

export default DetailComponent;
