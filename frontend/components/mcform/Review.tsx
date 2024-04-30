import Image from "next/image";

const Review = () => {

    return (
        <div className="flex flex-row justify-center items-center gap-5">
            <span>
                <Image
                    src={"/assets/images/trustpilot_review.png"}
                    className={`w-[120px] h-[50px] `}
                    alt="avatar"
                    width={100}
                    height={100}
                />
            </span>
            <span>
                <Image
                    src={"/assets/images/google_review.png"}
                    className={`w-[120px] h-[50px]`}
                    alt="avatar"
                    width={100}
                    height={100}
                />
            </span>
        </div>
    );
}

export default Review;
