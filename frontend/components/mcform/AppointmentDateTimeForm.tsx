"use client";

import { useEffect, useState } from "react";
import FormHeader from "./FormHeader";
import InputWithOverlappingLabel from '../common/InputWithOverlappingLabel';
import { MCFormPropsType } from "@/utils/types";
import Button from '../common/Button';

const AppointmentDateTimeForm = ({ MCFormData, setMCFormData, backToPrevious, continueToNext }: MCFormPropsType) => {

    const handleInput = (e: any) => {
        setMCFormData({
            ...MCFormData,
            [e.target.name]: e.target.value
        });
    }

    const makeAppointment = () => {
        continueToNext();
    }

    return (
        <div className="">
            <FormHeader
                title="Datum & Uhrzeit wählen"
                name="Uwe Klostermann"
                avatar="/assets/avatars/avatar_1.jpg"
                location="Standortleitung Celle"
            />
            <div className="md:py-10 py-4">
                <div className="">
                Bitte wählen Sie ein Datum und eine Uhrzeit aus dem unten stehenden Kalender. Der Termin dauert gewöhnlich ca. 30-60 min
                </div>
                <InputWithOverlappingLabel
                    wrapperClassName={"my-7"}
                    label={"Telefonnummer"}
                    name={"phone"}
                    placeholder={""}
                    value={MCFormData?.user?.phone}
                    onChange={() =>{} }
                    disabled={true}
                />

                <div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>

                <div className='flex flex-row justify-end mt-8 mb-3'>
                    <Button
                        color="yellow"
                        className={`md:px-10 py-3`}
                        onClick={makeAppointment}
                        disabled={!MCFormData?.appointment?.date || !MCFormData?.appointment?.time}
                    >
                        Termin auswählen
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AppointmentDateTimeForm;
