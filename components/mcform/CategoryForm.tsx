import { CardButtonType, MCFormPropsType } from "@/utils/types";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";
import CardButtonGroup from "../common/CardButtonGroup";

const cardButtonData: CardButtonType[] = [
    { value: "sell", icon: "/assets/icons/mcform/sale.svg", text: "Verkauf" },
    { value: "buy", icon: "/assets/icons/mcform/purchase.svg", text: "Kauf" },
    { value: "miscellaneous", icon: "/assets/icons/mcform/miscellaneous.svg", text: "Sonstiges" },
]

const CategoryForm = ({ mcFormData, setMcFormData, backToPrevious, continueToNext }: MCFormPropsType) => {

    const handleSelect = (value: string) => {
        setMcFormData({
            ...mcFormData,
            category: value
        });
        continueToNext();
    }

    return (
        <div className="">
            <FormHeader
                title="Wofür benötigen Sie den Immobilienwert?"
                isNote={true}
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
