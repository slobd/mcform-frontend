import React, { useState } from "react";
import Button from "../common/Button";
import { QuestionMarkCircleIcon } from "@heroicons/react/16/solid";
import Modal from "./Modal";

export type ToolTipProps = {
    title: string;
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
    children?: React.ReactNode;
};

const ToolTip = ({ title, size, children }: ToolTipProps) => {
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

export default ToolTip;
