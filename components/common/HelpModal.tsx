import React, { useState } from "react";
import Button from "./Button";
import { QuestionMarkCircleIcon } from "@heroicons/react/16/solid";
import Modal from "./Modal";

export type HelpModalProps = {
    title: string;
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
    children?: React.ReactNode;
};

const HelpModal = ({ title, size, children }: HelpModalProps) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="">
            <Button
                className=""
                color="transparent"
                onClick={() => setOpen(true)}
            >
                <QuestionMarkCircleIcon className="w-6 h-6" />
            </Button>
            <Modal
                open={open}
                setOpen={setOpen}
                handler={() => setOpen(false)}
                title={title}
                size={size}
            >
                {children}
            </Modal>
        </div>
    );
};

export default HelpModal;
