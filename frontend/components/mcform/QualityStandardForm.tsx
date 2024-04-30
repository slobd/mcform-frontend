import { CardButtonType, MCFormPropsType } from "@/utils/types";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";
import CardButtonGroup from "../common/CardButtonGroup";

const cardButtonData: CardButtonType[] = [
    { value: "simply", icon: "/assets/icons/mcform/simply.svg", text: "Einfach" },
    { value: "normal", icon: "/assets/icons/mcform/normal.svg", text: "Normal" },
    { value: "upscale", icon: "/assets/icons/mcform/upscale.svg", text: "Gehoben" },
    { value: "luxury", icon: "/assets/icons/mcform/luxury.svg", text: "Luxus" },
]

const QualityStandardForm = ({ MCFormData, setMCFormData, backToPrevious, continueToNext }: MCFormPropsType) => {

    const handleSelect = (value: string) => {
        setMCFormData({
            ...MCFormData,
            qualityStandard: value
        });
        continueToNext();
    }

    return (
        <div className="">
            <FormHeader
                title="Bitte wählen Sie den Qualitätsstandard der Immobilie"
                name="Uwe Klostermann"
                avatar="/assets/avatars/avatar_1.jpg"
                location="Standortleitung Celle"
            />
            <div className="md:py-20 py-8">
                <CardButtonGroup
                    mdCols="4"
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

export default QualityStandardForm;
