import { CardButtonType, MCFormPropsType } from "@/utils/types";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";
import CardButtonGroup from "../common/CardButtonGroup";

const cardButtonData: CardButtonType[] = [
    { value: "sell", icon: "/assets/icons/sale.svg", text: "Verkauf" },
    { value: "buy", icon: "/assets/icons/purchase.svg", text: "Kauf" },
    { value: "miscellaneous", icon: "/assets/icons/miscellaneous.svg", text: "Sonstiges" },
]

const CategoryForm = ({ MCFormData, setMCFormData, backToPrevious, continueToNext }: MCFormPropsType) => {

    const handleSelect = (value: string) => {
        setMCFormData({
            ...MCFormData,
            type: value
        });
        continueToNext();
    }

    return (
        <div className="">
            <FormHeader
                title="In welcher Region befindet sich die Immobilie?"
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
                enablePreviousButton={false}
                clickPrevious={backToPrevious}
                clickNext={continueToNext}
            />
        </div>
    );
}

export default CategoryForm;
