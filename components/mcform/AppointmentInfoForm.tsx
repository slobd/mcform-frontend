"use client";

import { useState } from "react";
import FormHeader from "./FormHeader";
import InputWithOverlappingLabel from '../common/InputWithOverlappingLabel';
import { MCFormPropsType } from "@/utils/types";
import Button from '../common/Button';
import Checkbox from "../common/Checkbox";

const AppointmentInfoForm = ({ mcFormData, setMcFormData, backToPrevious, continueToNext }: MCFormPropsType) => {

    const [confirm, setConfirm] = useState(false);

    const handleUserInfoInput = (e: any) => {
        setMcFormData({
            ...mcFormData,
            user: {
                ...mcFormData.user,
                [e.target.name]: e.target.value
            }
        });
    }

    const makeAppointment = () => {
        continueToNext();
    }

    return (
        <div className="">
            <FormHeader
                title="Adresse Ihrer Immobilie angeben"
                name="Uwe Klostermann"
                avatar="/assets/avatars/avatar_1.jpg"
                location="Standortleitung Celle"
            />
            <div className="md:py-10 py-4">
                <div className="">
                    Bitte geben Sie die vollständige Adresse Ihrer Immobilie an und bestätigen Sie Ihre Anwesenheit.
                </div>
                <InputWithOverlappingLabel
                    wrapperClassName={"mt-4 mb-2"}
                    label={"Telefonnummer"}
                    name={"phone"}
                    placeholder={""}
                    value={mcFormData?.user?.phone}
                    onChange={(e: any) => handleUserInfoInput(e)}
                    disabled={true}
                />
                <div className='flex md:flex-row flex-col items-center'>
                    <div className='md:w-1/2 w-full md:pr-1 pr-0'>
                        <InputWithOverlappingLabel
                            wrapperClassName={"mt-4 mb-2"}
                            label={"Postleitzahl"}
                            name={"postalCode"}
                            placeholder={""}
                            value={"29223"}
                            onChange={(e: any) => handleUserInfoInput(e)}
                            disabled={true}
                        />
                    </div>
                    <div className='md:w-1/2 w-full md:pl-1 pl-0'>
                        <InputWithOverlappingLabel
                            wrapperClassName={"mt-4 mb-2"}
                            label={"Stadt"}
                            name={"city"}
                            placeholder={""}
                            value={mcFormData?.user?.city}
                            onChange={(e: any) => handleUserInfoInput(e)}
                        />
                    </div>
                </div>
                <div className='flex md:flex-row flex-col items-center'>
                    <div className='md:w-1/2 w-full md:pr-1 pr-0'>
                        <InputWithOverlappingLabel
                            wrapperClassName={"mt-4 mb-2"}
                            label={"Straße"}
                            name={"street"}
                            placeholder={""}
                            value={mcFormData?.user?.street}
                            onChange={(e: any) => handleUserInfoInput(e)}
                        />
                    </div>
                    <div className='md:w-1/2 w-full md:pl-1 pl-0'>
                        <InputWithOverlappingLabel
                            wrapperClassName={"mt-4 mb-2"}
                            label={"Hausnr."}
                            name={"houseNumber"}
                            placeholder={""}
                            value={mcFormData?.user?.houseNumber}
                            onChange={(e: any) => handleUserInfoInput(e)}
                        />
                    </div>
                </div>

                <Checkbox
                    className={"mt-5"}
                    label={"Ich bestätige hiermit, dass ich an dem ausgewählten Termin telefonisch erreichbar sein werde."}
                    theme="dark"
                    checked={confirm}
                    onCheck={() => setConfirm(prev => !prev)}
                />

                <div className='flex flex-row justify-end mt-8 mb-3'>
                    <Button
                        color="yellow"
                        className={`md:px-10 py-3`}
                        onClick={makeAppointment}
                        disabled={!confirm || !mcFormData?.user?.city || !mcFormData?.user?.street || !mcFormData?.user?.houseNumber}
                    >
                        Termin vereinbaren
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AppointmentInfoForm;
