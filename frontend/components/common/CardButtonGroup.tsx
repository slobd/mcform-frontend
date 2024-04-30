import { CardButtonType } from "@/utils/types";
import CardButton from "./CardButton";

export type CardButtonGroupProps = {
    items: CardButtonType[];
    handleSelect: (e: any) => void;
    className?: string,
    mdCols?: "2" | "3" | "4" | "5" ,
};

const CardButtonGroup = ({ items, handleSelect, className, mdCols = "4" }: CardButtonGroupProps) => {

    const columns: Record<string, string> = {
        2: "md:grid-cols-2",
        3: "md:grid-cols-3",
        4: "md:grid-cols-4",
        5: "md:grid-cols-5",
    };

    return (
        <div className={`mb-10 grid text-center md:mb-0 md:max-w-5xl w-full grid-cols-2 ${columns[mdCols]} ${className}`}>
            {items.map((item, index) =>
                <CardButton
                    key={index}
                    icon={item.icon}
                    text={item.text}
                    onClick={() => handleSelect(item.value)}
                />
            )}
        </div>
    );
};

export default CardButtonGroup;
