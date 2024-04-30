import { CardButtonType, MCFormPropsType } from "@/utils/types";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";
import CardButtonGroup from "../common/CardButtonGroup";

const cardButtonData: CardButtonType[] = [
    { value: "house", icon: "/assets/icons/mcform/house.svg", text: "Haus" },
    { value: "apartment", icon: "/assets/icons/mcform/purchase.svg", text: "Wohnung" },
    { value: "business", icon: "/assets/icons/mcform/business.svg", text: "Gewerbe" },
    { value: "property", icon: "/assets/icons/mcform/property.svg", text: "Grundstück" },
]

const PropertyForm = ({ MCFormData, setMCFormData, backToPrevious, continueToNext }: MCFormPropsType) => {

    const handleSelect = (value: string) => {
        setMCFormData({
            ...MCFormData,
            property: value
        });
        continueToNext();
    }

    return (
        <div className="">
            <FormHeader
                title="Welche Immobilie möchten Sie kostenlos bewerten?"
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

export default PropertyForm;
