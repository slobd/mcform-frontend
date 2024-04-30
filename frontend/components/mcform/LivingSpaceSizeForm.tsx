import { CardButtonType, MCFormPropsType } from "@/utils/types";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";
import CardButtonGroup from "../common/CardButtonGroup";

const cardButtonData: CardButtonType[] = [
    { value: "<40", icon: "", text: "<80m²" },
    { value: "40-60", icon: "", text: "40m² - 60m²" },
    { value: "61-80", icon: "", text: "61m² - 80m²" },
    { value: "81-100", icon: "", text: "81m² - 100m²" },
    { value: "101-120", icon: "", text: "101m² - 120m²" },
    { value: ">120", icon: "", text: ">120m²" },
]

const LivingSpaceSizeForm = ({ MCFormData, setMCFormData, backToPrevious, continueToNext }: MCFormPropsType) => {

    const handleSelect = (value: string) => {
        setMCFormData({
            ...MCFormData,
            livingSpaceSize: value
        });
        continueToNext();
    }

    return (
        <div className="">
            <FormHeader
                title="Wie groß ist die Wohnfläche der Wohnung?"
                name="Uwe Klostermann"
                avatar="/assets/avatars/avatar_1.jpg"
                location="Standortleitung Celle"
            />
            <div className="md:py-20 py-8">
                <CardButtonGroup
                    mdCols="3"
                    items={cardButtonData}
                    handleSelect={handleSelect}
                />
            </div>
            <FormFooter
                clickPrevious={backToPrevious}
                clickNext={continueToNext}
            />
        </div>
    );
}

export default LivingSpaceSizeForm;
