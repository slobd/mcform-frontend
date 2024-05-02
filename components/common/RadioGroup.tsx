import { OptionType } from '@/utils/types';
import { NextPage } from 'next';

interface RadioGroupProps {
    label?: string;
    options: OptionType[];
    name: string;
    selectedValue: string;
    onChange: (name: string, value: string) => void;
    className?: string;
    align?: "row" | "col";
}

const RadioGroup: NextPage<RadioGroupProps> = ({ label, options, name, selectedValue, onChange, className, align = "row" }) => {
    return (
        <div className={`${className}`}>
            <p className="text-xs text-primary mb-2">{label}</p>
            <div className={`flex gap-2 ${align == "row" ? "flex-row" : "flex-col"}`}>
                {options.map((option) => (
                    <label key={option.value} className="inline-flex items-center mr-4">
                        <input
                            type="radio"
                            name={name}
                            value={option.value}
                            checked={selectedValue === option.value}
                            onChange={() => onChange(name, option.value)}
                            className="form-radio h-4 w-4 text-primary !ring-0"
                        />
                        <span className="ml-2 text-sm text-primary">{option.label}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default RadioGroup;