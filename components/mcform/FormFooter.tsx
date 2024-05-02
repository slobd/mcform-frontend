'use client';

import { useState } from "react";
import Button from "@/components/common/Button";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";

export type FormFooterProps = {
    enablePreviousButton?: boolean;
    enableNextButton?: boolean;
    clickPrevious: () => void;
    clickNext: () => void;
};

const FormFooter = ({ enablePreviousButton = true, enableNextButton = false, clickPrevious, clickNext }: FormFooterProps) => {


    return (
        <div className={`flex flex-row items-center ${enablePreviousButton ? "justify-between" : "justify-end"}`}>
            {enablePreviousButton &&
                <Button
                    color="transparent"
                    size="lg"
                    onClick={() => clickPrevious()}
                >
                    <ChevronLeftIcon className="w-5 h-5" />
                    Zurück
                </Button>
            }
            {enableNextButton &&
                <Button
                    color="yellow"
                    onClick={() => clickNext()}
                >
                    Weiter
                </Button>
            }
        </div>
    );
}

export default FormFooter;
