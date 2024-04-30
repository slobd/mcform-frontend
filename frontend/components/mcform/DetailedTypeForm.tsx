import { CardButtonType, MCFormPropsType } from "@/utils/types";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";
import CardButtonGroup from "../common/CardButtonGroup";

const cardButtonData: CardButtonType[] = [
    // { value: "detachedHouse", icon: "/assets/icons/mcform/detachedHouse.svg", text: "Einfamilienhaus" },
    // { value: "townHouse", icon: "/assets/icons/mcform/townHouse.svg", text: "Reihenhaus" },
    // { value: "semiDetachedHouse", icon: "/assets/icons/mcform/semiDetachedHouse.svg", text: "oppelhaushälfte" },
    // { value: "apartmentBuilding", icon: "/assets/icons/mcform/apartmentBuilding.svg", text: "Mehrfamilienhaus" },
    // { value: "residentialAndCommercialBuilding", icon: "/assets/icons/mcform/residentialAndCommercialBuilding.svg", text: "Wohn-und Geschäftshaus" },
    { value: "groundFloor", icon: "/assets/icons/mcform/groundFloor.svg", text: "Erdgeschoss" },
    { value: "apartment", icon: "/assets/icons/mcform/apartment.svg", text: "Etagenwohnung" },
    { value: "pentHouseAndAttic", icon: "/assets/icons/mcform/pentHouseAndAttic.svg", text: "Penthouse / Dachgeschoss" },
    { value: "other", icon: "/assets/icons/mcform/otherApartment.svg", text: "Andere" },
]

const DetailedTypeForm = ({ MCFormData, setMCFormData, backToPrevious, continueToNext }: MCFormPropsType) => {

    const handleSelect = (value: string) => {
        setMCFormData({
            ...MCFormData,
            detailedType: value
        });
        continueToNext();
    }

    return (
        <div className="">
            <FormHeader
                title="Bitte wählen Sie die Art Ihrer Wohnung"
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

export default DetailedTypeForm;
