import { LoaderCircleIcon } from "lucide-react";

export const Loader = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <LoaderCircleIcon
                size={18}
                className="stroke-gray-400 animate-spin"
            />
        </div>
    );
};
