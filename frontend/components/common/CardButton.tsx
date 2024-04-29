import { useRef, useState } from "react";
import Image from 'next/image';
import { ChevronRightIcon } from "@heroicons/react/16/solid";

export type CardButtonProps = {
    icon?: string;
    text: string;
    onClick: () => void
};

const CardButton = ({ icon, text, onClick }: CardButtonProps) => {

    return (
        <div className="md:px-10 px-2 py-2 md:w-auto w-full">
            <div
                className="group flex items-center cursor-pointer rounded-lg border-0 p-5 transition-colors bg-gray-100 hover:bg-yellow-400"
                onClick={() => onClick()}
            >
                <div className="flex items-center flex-col">
                    {icon &&
                        <Image
                            src={icon}
                            className={`w-16 h-16`}
                            alt="icon"
                            width={100}
                            height={100}
                        />
                    }
                    <p className="m-0 max-w-[30ch] text-sm opacity-80 text-center">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardButton;
