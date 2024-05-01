import { CardButtonType, MCFormPropsType } from "@/utils/types";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";
import CardButtonGroup from "../common/CardButtonGroup";

const cardButtonData: CardButtonType[] = [
    { value: "1-3", icon: "/assets/icons/mcform/1-3month.svg", text: "1 - 3 Monate" },
    { value: "4-6", icon: "/assets/icons/mcform/4-6month.svg", text: "4 - 6 Monate" },
    { value: "6-12", icon: "/assets/icons/mcform/6-12month.svg", text: "6 - 12 Monate" },
    { value: "12+", icon: "/assets/icons/mcform/12+month.svg", text: "12 Monate oder später" },
    { value: "unsure", icon: "/assets/icons/mcform/unsuremonth.svg", text: "Unsicher" },
    { value: "dontSell", icon: "/assets/icons/mcform/dontSell.svg", text: "Ich will nicht verkaufen" },
]

const TimelineForm = ({ mcFormData, setMcFormData, backToPrevious, continueToNext }: MCFormPropsType) => {

    const handleSelect = (value: string) => {
        setMcFormData({
            ...mcFormData,
            timeline: value
        });
        continueToNext();
    }

    return (
        <div className="">
            <FormHeader
                title="Wann möchten Sie Ihre Immobilie verkaufen?"
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

export default TimelineForm;
