import { CardButtonType, MCFormPropsType } from "@/utils/types";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";
import CardButtonGroup from "../common/CardButtonGroup";

const cardButtonData: CardButtonType[] = [
    { value: "<300", icon: "", text: "<300m²" },
    { value: "301-600", icon: "", text: "301m² - 600m²" },
    { value: "601-1000", icon: "", text: "601m² - 1000m²" },
    { value: "1001-1500", icon: "", text: "1001m² - 1500m²" },
    { value: "1501-2000", icon: "", text: "1501m² - 2000m²" },
    { value: ">2000", icon: "", text: ">2000m²" },
]

const LocatedAreaSizeForm = ({ mcFormData, setMcFormData, backToPrevious, continueToNext }: MCFormPropsType) => {

    const handleSelect = (value: string) => {
        setMcFormData({
            ...mcFormData,
            locatedAreaSize: value
        });
        continueToNext();
    }

    return (
        <div className="">
            <FormHeader
                title="Welche Fläche hat das Grundstück des Hauses?"
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

export default LocatedAreaSizeForm;
