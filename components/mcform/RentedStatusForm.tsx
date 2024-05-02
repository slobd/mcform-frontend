import { CardButtonType, MCFormPropsType } from "@/utils/types";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";
import CardButtonGroup from "../common/CardButtonGroup";
import ToolTip from "../common/Tooltip";

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
                <div className="flex flex-row items-center">
                    <div className="pl-1 text-black text-xs font-semibold opacity-70">Welche Option passt zu mir?</div>
                    <ToolTip title="Vermietungszustand">
                        <div className="mb-8">
                            <div className="font-semibold mb-2"> Eigennutzung </div>
                            <div className="font-medium">
                                Die Immobilie ist Ihr Eigentum und wird ausschließlich von Ihnen selbst genutzt oder bewohnt.
                            </div>
                        </div>
                        <div className="mb-8">
                            <div className="font-semibold mb-2"> Eigennutzung </div>
                            <div className="font-medium">
                                Die Immobilie ist Ihr Eigentum und wird ausschließlich von Ihnen selbst genutzt oder bewohnt.
                            </div>
                        </div>
                        <div className="mb-8">
                            <div className="font-semibold mb-2"> Eigennutzung </div>
                            <div className="font-medium">
                                Die Immobilie ist Ihr Eigentum und wird ausschließlich von Ihnen selbst genutzt oder bewohnt.
                            </div>
                        </div>
                    </ToolTip>
                </div>
            </div>
            <FormFooter
                clickPrevious={backToPrevious}
                clickNext={continueToNext}
            />
        </div>
    );
}

export default RentedStatusForm;
