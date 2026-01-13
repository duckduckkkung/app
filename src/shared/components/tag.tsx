import { HashIcon } from "lucide-react";
import { TypeIcon } from "./overlay-header";

interface TagProps {
    text: string;
    icon?: TypeIcon;
    onClick?: () => void;
    hash?: boolean;
}

export const Tag = ({ text, icon, onClick, hash = false }: TagProps) => {
    return (
        <div
            className="shrink-0 w-fit p-[4px_12px] bg-gray-100 rounded-[8px] flex items-center gap-[6px] border border-gray-300"
            onClick={onClick}
        >
            {hash && <HashIcon size={14} className="stroke-gray-400" />}

            <span className="font-p-medium text-[14px] text-gray-600">
                {text}
            </span>

            {icon && (
                <icon.Component
                    size={14}
                    className="stroke-gray-400"
                    onClick={icon.onClick}
                />
            )}
        </div>
    );
};
