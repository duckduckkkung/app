import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Heart } from "lucide-react";
import { useState } from "react";

export interface TypeComment {
    id: string;
    writer: {
        name: string;
        profileImage: string;
    };
    heartCount: number;
    content: string;
    subComment: TypeComment[];
}

interface CommentProps {
    comments: TypeComment[];
}

export const Comments = ({ comments }: CommentProps) => {
    const [openComments, setOpenComments] = useState<Record<string, boolean>>(
        {}
    );

    const toggleComment = (commentId: string) => {
        setOpenComments((prev) => ({
            ...prev,
            [commentId]: !prev[commentId],
        }));
    };

    return (
        <div className="flex flex-col">
            {comments.map((comment, i) => (
                <div key={comment.id} className="flex flex-col">
                    <div className="flex flex-col gap-[12px] p-[20px_8px]">
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col gap-[10px]">
                                <div className="flex items-center gap-[10px]">
                                    <div className="size-[24px] bg-gray-200 rounded-[4px]" />

                                    <span className="font-p-medium text-[16px] text-gray-900">
                                        {comment.writer.name}
                                    </span>
                                </div>

                                <span className="font-p-mj text-[18px] text-gray-900">
                                    {comment.content}
                                </span>
                            </div>

                            <div className="flex flex-col items-center gap-[4px]">
                                <Heart size={16} className="stroke-gray-400" />

                                <span className="font-p-gmsm text-[12px] text-gray-500">
                                    {comment.heartCount}
                                </span>
                            </div>
                        </div>

                        {comment.subComment.length > 0 && (
                            <button
                                onClick={() => toggleComment(comment.id)}
                                className="flex items-center gap-[4px] cursor-pointer hover:opacity-70 transition-opacity"
                            >
                                <motion.div
                                    animate={{
                                        rotate: openComments[comment.id]
                                            ? 180
                                            : 0,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <ChevronDown
                                        size={16}
                                        className="stroke-gray-400"
                                    />
                                </motion.div>

                                <span className="font-p-medium text-[14px] text-gray-400">
                                    {comment.subComment.length}개의 댓글
                                </span>
                            </button>
                        )}
                    </div>

                    <AnimatePresence initial={false}>
                        {comment.subComment.length > 0 &&
                            openComments[comment.id] && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    }}
                                    style={{ overflow: "hidden" }}
                                >
                                    {comment.subComment.map((subComment, i) => (
                                        <div
                                            key={subComment.id}
                                            className="flex flex-col"
                                        >
                                            <div
                                                className="flex flex-col gap-[12px] p-[16px_24px] pr-[8px]"
                                                style={{
                                                    paddingTop:
                                                        i <
                                                        comment.subComment
                                                            .length -
                                                            1
                                                            ? "0px"
                                                            : "",
                                                }}
                                            >
                                                <div className="flex justify-between items-center">
                                                    <div className="flex flex-col gap-[10px]">
                                                        <div className="flex items-center gap-[10px]">
                                                            <div className="size-[24px] bg-gray-200 rounded-[4px]" />

                                                            <span className="font-p-medium text-[16px] text-gray-900">
                                                                {
                                                                    subComment
                                                                        .writer
                                                                        .name
                                                                }
                                                            </span>
                                                        </div>

                                                        <span className="font-p-mj text-[18px] text-gray-900">
                                                            {subComment.content}
                                                        </span>
                                                    </div>

                                                    <div className="flex flex-col items-center gap-[4px]">
                                                        <Heart
                                                            size={16}
                                                            className="stroke-gray-400"
                                                        />

                                                        <span className="font-p-gmsm text-[12px] text-gray-500">
                                                            {
                                                                subComment.heartCount
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {i <
                                                comment.subComment.length -
                                                    1 && (
                                                <div className="w-full h-[1px] bg-gray-200" />
                                            )}
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                    </AnimatePresence>

                    {i < comments.length - 1 && (
                        <div className="w-full h-[1px] bg-gray-200" />
                    )}
                </div>
            ))}
        </div>
    );
};
