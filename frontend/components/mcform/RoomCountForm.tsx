import { CardButtonType, MCFormPropsType } from "@/utils/types";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";
import CardButtonGroup from "../common/CardButtonGroup";

const cardButtonData: CardButtonType[] = [
    { value: "1", icon: "", text: "1" },
    { value: "2", icon: "", text: "2" },
    { value: "3", icon: "", text: "3" },
    { value: "4", icon: "", text: "4" },
    { value: "5", icon: "", text: "5" },
    { value: "5+", icon: "", text: "Mehr als 5" },
    { value: "15+", icon: "", text: "Mehr als 15" },
]

const RoomCountForm = ({ mcFormData, setMcFormData, backToPrevious, continueToNext }: MCFormPropsType) => {

    const handleSelect = (value: string) => {
        setMcFormData({
            ...mcFormData,
            roomCount: value
        });
        continueToNext();
    }

    return (
        <div className="">
            <FormHeader
                title="Wie viele Zimmer hat das Haus? (ohne Bad und Küche)"
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

export default RoomCountForm;
