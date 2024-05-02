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
    size = "md",
}) => {
    const colors: Record<string, string> = {
        primary: " ",
        yellow: " bg-yellow",
        transparent: " !bg-transparent !text-primary hover:opacity-70",
    };

    const sizes: Record<string, string> = {
        xs: " text-xs",
        sm: " text-sm",
        md: " text-md",
        lg: " text-lg",
        xl: " text-xl",
    };

    return (
        <button
            className={`w-auto flex items-center justify-center py-2 font-medium text-primary rounded-sm hover:bg-primary hover:text-white  
                ${sizes[size]} 
                ${!disabled ? colors[color] : " bg-gray-100 cursor-not-allowed"} 
                ${color == "primary" ? " border border-primary" : " "}
                ${color == "transparent" ? " px-1" : " md:px-12 px-4  min-w-40"}
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