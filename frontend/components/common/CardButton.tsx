import { useState } from "react";
import Image from 'next/image';

export type CardButtonProps = {
    icon?: string;
    text: string;
    onClick: () => void
};

const CardButton = ({ icon, text, onClick }: CardButtonProps) => {

    return (
        <div className="p-1 md:w-auto w-full">
            <div
                className="group w-full h-full flex justify-center items-center cursor-pointer rounded-sm border border-gray-200 p-5 transition-colors bg-gray-100 hover:border-gray-500"
                onClick={() => onClick()}
            >
                <div className="flex flex-col justify-between items-center min-h-20 h-full">
                    {icon &&
                        <Image
                            src={icon}
                            className={`w-9 h-9`}
                            alt="icon"
                            width={100}
                            height={100}
                        />
                    }
                    <p className="m-0 max-w-[30ch] text-md font-medium opacity-80 text-center">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardButton;
