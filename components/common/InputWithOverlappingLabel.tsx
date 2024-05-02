import { NextPage } from "next";
import { useState } from "react";

export type InputWithOverlappingLabelProps = {
    wrapperClassName?: string;
    type?: string | "text";
    label: string;
    name: string;
    placeholder?: string | "Type in...";
    value: string;
    onChange: (e: any) => void;
    disabled?: boolean;
    suffix?: string;
};

const InputWithOverlappingLabel: NextPage<InputWithOverlappingLabelProps> = ({ wrapperClassName, type, label, name, placeholder, value, onChange, disabled = false, suffix }) => {
    const [focused, setFocused] = useState(false);
    return (
        <div className={`relative ${wrapperClassName}`}>
            <label
                htmlFor={name}
                className={`absolute left-2 inline-block bg-white px-1 font-normal text-primary transition-all
                ${value !== "" || focused ? "-top-2 text-xs" : " top-3 text-sm"}`}
            >
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={name}
                className={`block w-full !bg-white rounded-sm border-0 py-2.5 text-primary font-medium shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary md:text-md md:leading-6 
                    ${disabled ? "text-gray-300" : ""} ${suffix ? "pr-4" : ""}`
                }
                placeholder={placeholder}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
            {suffix &&
                <div className="absolute right-2 top-2 text-gray-600">
                    {suffix}
                </div>
            }
        </div>
    )
};

export default InputWithOverlappingLabel;