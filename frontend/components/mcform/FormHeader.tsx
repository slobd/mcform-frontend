import Image from "next/image";

export type FormHeaderProps = {
    title?: string;
    name?: string;
    avatar?: string;
    location?: string;
};

const FormHeader = ({ title, name, avatar, location }: FormHeaderProps) => {

    return (
        <div className="flex md:flex-row flex-col items-start md:gap-5 gap-3">
            <div className="flex md:flex-col flex-row items-center gap-3">
                <div className="flex md:flex-col flex-row items-center">
                    {avatar &&
                        <Image
                            src={avatar}
                            className={`w-16 h-16 rounded-full`}
                            alt="avatar"
                            width={100}
                            height={100}
                        />
                    }
                </div>
                <div className="flex flex-col md:items-center items-start whitespace-nowrap">
                    <div className="text-md font-semibold">{name}</div>
                    <div className="text-xs">{location}</div>
                </div>
            </div>
            <div className="relative grow bg-gray-100 text-lg font-semibold md:p-6 p-3 w-full">
                <div className="md:hidden absolute -top-3 left-7 w-0 h-0 border-l-[12px] border-l-transparent border-b-[20px] border-b-gray-100 border-r-[12px] border-r-transparent"></div>
                <div className="md:block hidden absolute -left-5 bottom-5 w-0 h-0 border-b-[12px] border-b-transparent border-r-[20px] border-r-gray-100 border-t-[12px] border-t-transparent "></div>
                {title}
            </div>
        </div>
    );
}

export default FormHeader;
