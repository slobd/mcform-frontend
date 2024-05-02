import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export type ModalProps = {
    open: boolean;
    setOpen: (e: any) => void;
    title?: string;
    handler: (e: boolean) => void;
    children: React.ReactNode;
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
};

const Modal = ({ open, setOpen, handler, title, children, size = "xl" }: ModalProps) => {

    const sizes: Record<string, string> = {
        "sm": " sm:max-w-sm",
        "md": " sm:max-w-md",
        "lg": " sm:max-w-lg",
        "xl": " sm:max-w-xl",
        "2xl": " sm:max-w-2xl",
        "3xl": " sm:max-w-3xl",
        "4xl": " sm:max-w-4xl",
        "5xl": " sm:max-w-5xl",
        "6xl": " sm:max-w-6xl",
        "7xl": " sm:max-w-7xl",
    };

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-[200] text-primary"
                onClose={setOpen}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className={`${sizes[size]} relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:p-6`}>
                                <Dialog.Title
                                    as="h2"
                                    className="font-bold leading-7 text-lg mb-4 pb-5 border-b border-primary/50"
                                >
                                    {title}
                                </Dialog.Title>
                                <div className="absolute right-0 top-2 pr-4 mt-4">
                                    <button
                                        type="button"
                                        className="rounded-md bg-white focus:outline-none"
                                        onClick={() => handler(false)}
                                    >
                                        <span className="sr-only">Close</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                                <div className="py-4 px-2">
                                    {children}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default Modal;
