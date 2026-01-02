interface TagProps {
    text: string;
}

export const Tag = ({ text }: TagProps) => {
    return (
        <div className="shrink-0 w-fit p-[2px_8px] bg-gray-100 rounded-[4px] flex items-center gap-[4px] border border-gray-300">
            <span className="font-p-medium text-[14px] text-gray-600">
                {text}
            </span>
        </div>
    );
};
