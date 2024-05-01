import { MCFormPropsType } from "@/utils/types";
import FormHeader from "./FormHeader";
import Button from "../common/Button";

const AppointmentForm = ({ mcFormData, setMcFormData, backToPrevious, continueToNext }: MCFormPropsType) => {

    const telephoneAppointment = () => {
        setMcFormData({
            ...mcFormData,
            appointment: {
                ...mcFormData?.appointment,
                type: "phone",
            }
        });
        continueToNext();
    }

    const onsiteAppointment = () => {
        setMcFormData({
            ...mcFormData,
            appointment: {
                ...mcFormData?.appointment,
                type: "onsite",
            }
        });
        continueToNext();
    }

    return (
        <div className="">
            <FormHeader
                title="Möchten Sie jetzt einen Termin buchen?"
                name="Uwe Klostermann"
                avatar="/assets/avatars/avatar_1.jpg"
                location="Standortleitung Celle"
            />
            <div className="md:py-10 py-4">
                <div className="">
                    Im Anschluss an den Termin erhalten Sie Ihre detaillierte Immobilienbewertung. Die Beratung durch unseren Makler ist für Sie selbstverständlich kostenfrei.
                </div>
            </div>
            <div className="flex flex-col items-center gap-5 mb-5">
                <div>
                    <Button
                        color="primary"
                        className={`py-3 font-semibold min-w-[280px]`}
                        onClick={() => telephoneAppointment()}
                    >
                        Telefontermin vereinbaren
                    </Button>
                </div>
                <div>
                    <Button
                        color="primary"
                        className={`py-3 font-semibold min-w-[280px]`}
                        onClick={() => onsiteAppointment()}
                    >
                        Termin vor Ort vereinbaren
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AppointmentForm;
