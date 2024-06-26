import { MCFormPropsType } from '../../utils/types';
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";
import InputWithOverlappingLabel from "@/components/common/InputWithOverlappingLabel";

const LocationForm = ({ mcFormData, setMcFormData, backToPrevious, continueToNext }: MCFormPropsType) => {

    const handleInputMCFormData = (e: any) => {
        setMcFormData({
            ...mcFormData,
            location: e.target.value
        });
    }

    return (
        <div className="">
            <FormHeader
                title="In welcher Region befindet sich die Immobilie?"
                name="Uwe Klostermann"
                avatar="/assets/avatars/avatar_1.jpg"
                location="Standortleitung Celle"
            />
            <div className="md:px-12 px-0 md:py-20 py-8">
                <div className='font-medium'>
                    Wir benötigen Ihre Postleitzahl, um den Wert Ihrer Immobilie besser ermitteln zu können.
                </div>
                <InputWithOverlappingLabel
                    wrapperClassName={"mt-4 mb-2"}
                    label={"Postleitzahl"}
                    name={"location"}
                    placeholder={""}
                    value={mcFormData?.location}
                    onChange={(e: any) => handleInputMCFormData(e)}
                />
            </div>
            <FormFooter
                enableNextButton={mcFormData?.location ? true : false}
                clickPrevious={backToPrevious}
                clickNext={continueToNext}
            />
        </div>
    );
}

export default LocationForm;
