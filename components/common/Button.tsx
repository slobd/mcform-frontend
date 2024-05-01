import { NextPage } from "next";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
    color?: "primary" | "yellow" | "transparent";
    disabled?: boolean;
    className?: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const Button: NextPage<ButtonProps> = ({
    children,
    onClick,
    color = "primary",
    disabled = false,
    className,
    size = "sm",
}) => {
    const colors: Record<string, string> = {
        primary: "",
        yellow: "bg-yellow",
        transparent: "!bg-transparent !text-black hover:!opacity-70",
    };

    const sizes: Record<string, string> = {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
        xl: "text-xl",
    };

    return (
        <button
            className={`w-auto flex items-center justify-center py-2 md:px-12 px-4 font-normal text-black rounded-sm hover:bg-primary hover:text-white  
                ${sizes[size]} 
                ${!disabled ? colors[color] : "bg-gray-100 cursor-not-allowed"} 
                ${color == "primary" ? "border border-primary" : ""}
                ${className}`
            }
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;