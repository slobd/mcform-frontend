import Image from 'next/image';
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import RadioGroup from '../common/RadioGroup';
import FormHeader from "./FormHeader";
import InputWithOverlappingLabel from '../common/InputWithOverlappingLabel';
import { MCFormPropsType } from "@/utils/types";
import Button from '../common/Button';

const genders = [
    { label: 'Herr', value: "male" },
    { label: 'Frau', value: "female" },
]

const UserInfoForm = ({ MCFormData, setMCFormData, backToPrevious, continueToNext }: MCFormPropsType) => {

    const [showAlert, setShowAlert] = useState(true);
    const [gender, setGender] = useState("");

    const handleUserInfoInput = (e: any) => {
        setMCFormData({
            ...MCFormData,
            user: {
                ...MCFormData.user,
                [e.target.name]: e.target.value
            }
        });
    }

    const receiveReview = () => {
        setMCFormData({
            ...MCFormData,
            user: {
                ...MCFormData.user,
                gender: gender
            }
        });
        continueToNext();
    }

    return (
        <div className="">
            <FormHeader
                title="Fast geschafft! Die Bewertung Ihrer Immobilie ist fertig!"
                isNote={true}
            />
            <div className="md:py-10 py-4">
                {showAlert &&
                    <div className="relative w-full grow flex flex-row justify-between items-center bg-[#004b54] text-sm font-normal text-white md:p-3 p-2 mb-5">
                        <div className="flex flex-row justify-start items-center gap-3">
                            <Image
                                src={"/assets/icons/mcform/review.svg"}
                                className={`w-5 h-5`}
                                alt="icon"
                                width={100}
                                height={100}
                            />
                            <div>
                                In Ihrer Region erhielten 86 Kunden kostenlose Bewertungen in den letzten 7 Tagen.
                            </div>
                        </div>
                        <XMarkIcon className="w-5 h-5 cursor-pointer" onClick={() => setShowAlert(false)} />
                    </div>
                }
                <div className=''>
                    <RadioGroup
                        className='py-4'
                        options={genders}
                        selectedValue={gender}
                        onChange={(name, value) => { setGender(value) }}
                        name={'gender'}
                    />
                </div>
                <div className='flex md:flex-row flex-col items-center'>
                    <div className='md:w-1/2 w-full pr-1'>
                        <InputWithOverlappingLabel
                            wrapperClassName={"mt-4 mb-2"}
                            label={"Vorname"}
                            name={"firstName"}
                            placeholder={""}
                            value={MCFormData?.user?.firstName}
                            onChange={(e: any) => handleUserInfoInput(e)}
                        />
                    </div>
                    <div className='md:w-1/2 w-full pl-1'>
                        <InputWithOverlappingLabel
                            wrapperClassName={"mt-4 mb-2"}
                            label={"Nachname"}
                            name={"lastName"}
                            placeholder={""}
                            value={MCFormData?.user?.lastName}
                            onChange={(e: any) => handleUserInfoInput(e)}
                        />
                    </div>
                </div>
                <InputWithOverlappingLabel
                    wrapperClassName={"my-5"}
                    label={"E-Mail-Adresse"}
                    name={"email"}
                    placeholder={""}
                    value={MCFormData?.user?.email}
                    onChange={(e: any) => handleUserInfoInput(e)}
                />
                <InputWithOverlappingLabel
                    wrapperClassName={"my-7"}
                    label={"Telefonnummer"}
                    name={"phone"}
                    placeholder={""}
                    value={MCFormData?.user?.phone}
                    onChange={(e: any) => handleUserInfoInput(e)}
                />

                <div className='flex flex-col items-center gap-3 mt-8 mb-3'>
                    <Button
                        color="yellow"
                        className={`md:px-40 py-3`}
                        onClick={receiveReview}
                    >
                        Bewertung erhalten
                    </Button>
                    <div className='md:px-12 px-4 text-sm opacity-70'>
                        Es gelten unsere
                        <a className='underline px-1'>Allgemeinen Geschäftsbedingungen.</a>
                        In unserer<a className='underline px-1'>Datenschutzerklärung</a>
                        finden Sie Informationen darüber, wie wir Ihre personenbezogenen Daten verarbeiten.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserInfoForm;
