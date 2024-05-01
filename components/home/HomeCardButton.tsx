import { useRef, useState } from "react";
import Image from 'next/image';
import { ChevronRightIcon } from "@heroicons/react/16/solid";

export type HomeCardButtonProps = {
    icon?: string;
    text: string;
    onClick: () => void
};

const HomeCardButton = ({ icon, text, onClick }: HomeCardButtonProps) => {

    return (
        <div className="md:px-10 px-2 py-2 md:w-auto w-full">
            <div
                className="group flex md:flex-col flex-row justify-between items-center cursor-pointer rounded-lg border-0 p-5 transition-colors bg-gray-100 hover:bg-yellow"
                onClick={() => onClick()}
            >
                <div className="flex items-center md:flex-col flex-row">
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
                <ChevronRightIcon className="md:hidden w-10 h-10" />
            </div>
        </div>
    );
};

export default HomeCardButton;
