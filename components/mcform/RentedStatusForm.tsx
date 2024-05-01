import { CardButtonType, MCFormPropsType } from "@/utils/types";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";
import CardButtonGroup from "../common/CardButtonGroup";

const cardButtonData: CardButtonType[] = [
    { value: "ownUse", icon: "/assets/icons/mcform/ownUse.svg", text: "Eigennutzung" },
    { value: "rented", icon: "/assets/icons/mcform/rented.svg", text: "Vermietet" },
    { value: "vacant", icon: "/assets/icons/mcform/vacant.svg", text: "Leerstehend" },
]

const RentedStatusForm = ({ mcFormData, setMcFormData, backToPrevious, continueToNext }: MCFormPropsType) => {

    const handleSelect = (value: string) => {
        setMcFormData({
            ...mcFormData,
            rentedStatus: value
        });
        continueToNext();
    }

    return (
        <div className="">
            <FormHeader
                title="Ist die Wohnung vermietet?"
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

export default RentedStatusForm;
