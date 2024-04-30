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
};

const InputWithOverlappingLabel: NextPage<InputWithOverlappingLabelProps> = ({ wrapperClassName, type, label, name, placeholder, value, onChange }) => {
    const [focused, setFocused] = useState(false);
    return (
        <div className={`relative ${wrapperClassName}`}>
            <label
                htmlFor={name}
                className={`absolute left-2 inline-block bg-white px-1 font-normal text-gray-600 transition-all
                ${value !== "" || focused ? "-top-2 text-xs" : " top-2.5 text-sm"}`}
            >
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={name}
                className="block w-full rounded-sm border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                placeholder={placeholder}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                value={value}
                onChange={onChange}
            />
        </div>
    )
};

export default InputWithOverlappingLabel;