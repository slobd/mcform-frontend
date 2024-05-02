import { CardButtonType, MCFormPropsType } from "@/utils/types";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";
import CardButtonGroup from "../common/CardButtonGroup";
import HelpModal from "../common/HelpModal";

const cardButtonData: CardButtonType[] = [
    { value: "<40", icon: "", text: "<40m²" },
    { value: "40-60", icon: "", text: "40m² - 60m²" },
    { value: "61-80", icon: "", text: "61m² - 80m²" },
    { value: "81-100", icon: "", text: "81m² - 100m²" },
    { value: "101-120", icon: "", text: "101m² - 120m²" },
    { value: ">120", icon: "", text: ">120m²" },
]

const LivingSpaceSizeForm = ({ mcFormData, setMcFormData, backToPrevious, continueToNext }: MCFormPropsType) => {

    const handleSelect = (value: string) => {
        setMcFormData({
            ...mcFormData,
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
                <HelpModal title="Wohnfläche">
                    <div>
                        Der Wohnbereich (in m²) ergibt sich aus der Summe der Wohnraumflächen des Objektes
                    </div>
                </HelpModal>
            </div>
            <FormFooter
                clickPrevious={backToPrevious}
                clickNext={continueToNext}
            />
        </div>
    );
}

export default LivingSpaceSizeForm;
