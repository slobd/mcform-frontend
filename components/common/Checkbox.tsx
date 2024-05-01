import { NextPage } from "next";
import Image from "next/image";

interface CheckboxProps {
    checked: boolean;
    label: string;
    onCheck: () => void;
    theme?: "light" | "dark";
    rounded?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
    className?: string,
}

const Checkbox: NextPage<CheckboxProps> = ({ checked, label, onCheck, theme = "light", rounded = "sm", className }) => {
    const roundSizes: Record<string, string> = {
        xs: "rounded-xs",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full"
    };

    return (
        <div
            className={`flex items-center ${theme === "dark" && "my-1"} cursor-pointer ${className}`}
            onClick={onCheck}
        >
            <div
                className={`${theme === "light" ? "w-6 h-6" : "w-5 h-5"
                    } flex items-center justify-center border border-white ${!checked
                        ? "bg-black opacity-30"
                        : ``
                    } ${theme === "dark" && "invert"} ${roundSizes[rounded]}`}
            >
                {checked && (
                    <Image
                        src={"/assets/images/check.png"}
                        className={`${theme === "light" ? "w-5" : "w-4 opacity-80"} invert select-none`}
                        width={10}
                        height={10}
                        alt="checkbox"
                    />
                )}
            </div>
            {label && <span className="text-xs text-[#121212] mx-2">{label}</span>}
        </div>
    );
};

export default Checkbox;