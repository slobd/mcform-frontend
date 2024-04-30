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

const FormFooter = ({ enablePreviousButton = true, enableNextButton = false, clickPrevious, clickNext}: FormFooterProps) => {


    return (
        <div className={`flex flex-row items-center ${enablePreviousButton ? "justify-between" : "justify-end"}`}>
            <Button
                color="transparent"
                size="md"
                className={`w-9 h-9 ${enablePreviousButton ? "" : "hidden"}`}
                onClick={() => clickPrevious()}
            >
                <ChevronLeftIcon className="w-5 h-5" />
                Zurück
            </Button>
            <Button
                color="primary"
                className={`w-9 h-9 ${enableNextButton ? "" : "hidden"}`}
                onClick={() => clickNext()}
            >
                Weiter
            </Button>
        </div>
    );
}

export default FormFooter;
