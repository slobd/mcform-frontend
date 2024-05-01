"use client";

import { useState } from "react";
import FormHeader from "./FormHeader";
import InputWithOverlappingLabel from '../common/InputWithOverlappingLabel';
import { MCFormPropsType } from "@/utils/types";
import Button from '../common/Button';

const AppointmentAddtionalInfoForm = ({ mcFormData, setMcFormData, backToPrevious, continueToNext }: MCFormPropsType) => {

    const handleInput = (e: any) => {
        setMcFormData({
            ...mcFormData,
            [e.target.name]: e.target.value
        });
    }

    const makeAppointment = () => {
        continueToNext();
    }

    return (
        <div className="">
            <FormHeader
                title="Fast geschafft!"
                name="Uwe Klostermann"
                avatar="/assets/avatars/avatar_1.jpg"
                location="Standortleitung Celle"
            />
            <div className="md:py-10 py-4">
                <div className="">
                    Damit sich Ihr Makler optimal auf den Termin vorbereiten kann, füllen Sie bitte die folgenden Felder aus. So können wir die genaue Bewertung sicherstellen und Ihnen bestmöglich beim Verkauf Ihrer Immobilie helfen.
                </div>
                <InputWithOverlappingLabel
                    wrapperClassName={"my-7"}
                    label={"Verkaufsgrund"}
                    name={"reasonForSale"}
                    placeholder={""}
                    value={mcFormData?.reasonForSale}
                    onChange={(e: any) => handleInput(e)}
                />
                <InputWithOverlappingLabel
                    wrapperClassName={"my-7"}
                    label={"Nettokaltmiete/monat"}
                    name={"netRent"}
                    placeholder={""}
                    value={mcFormData?.netRent}
                    onChange={(e: any) => handleInput(e)}
                    suffix={"€"}
                />

                <div className='flex flex-row justify-end mt-8 mb-3'>
                    <Button
                        color="yellow"
                        className={`md:px-10 py-3`}
                        onClick={makeAppointment}
                    >
                        Termin auswählen
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AppointmentAddtionalInfoForm;
