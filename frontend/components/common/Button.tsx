import { NextPage } from "next";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
    color?: "primary" | "transparent";
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
        primary: "bg-primary",
        transparent: "bg-transparent",
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
            className={`w-auto flex items-center justify-center py-1 md:px-12 px-4 font-normal text-black rounded-sm hover:opacity-80 
                ${sizes[size]} ${className} 
                ${!disabled ? colors[color] : `bg-gray-100 cursor-not-allowed`}`
            }
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;