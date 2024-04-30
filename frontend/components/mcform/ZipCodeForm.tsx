import { MCFormPropsType } from '../../utils/types';
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";
import InputWithOverlappingLabel from "@/components/common/InputWithOverlappingLabel";

const ZipCodeForm = ({ MCFormData, setMCFormData, backToPrevious, continueToNext }: MCFormPropsType) => {

    const handleInputMCFormData = (e: any) => {
        console.log("set zip code", e.target)
        setMCFormData({
            ...MCFormData,
            zipCode: e.target.value
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
                <div>
                    Wir benötigen Ihre Postleitzahl, um den Wert Ihrer Immobilie besser ermitteln zu können.
                </div>
                <InputWithOverlappingLabel
                    wrapperClassName={"mt-4 mb-2"}
                    label={"Postleitzahl"}
                    name={"zipCode"}
                    placeholder={""}
                    value={MCFormData?.zipCode}
                    onChange={(e: any) => handleInputMCFormData(e)}
                />
            </div>
            <FormFooter
                enableNextButton={MCFormData?.zipCode ? true : false}
                clickPrevious={backToPrevious}
                clickNext={continueToNext}
            />
        </div>
    );
}

export default ZipCodeForm;
