import { CardButtonType, MCFormPropsType } from "@/utils/types";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";
import CardButtonGroup from "../common/CardButtonGroup";

const cardButtonData: CardButtonType[] = [
    { value: "<1918", icon: "", text: "bis 1918" },
    { value: "1919-1949", icon: "", text: "1919 - 1949" },
    { value: "1950-1969", icon: "", text: "1950 - 1969" },
    { value: "1970-1990", icon: "", text: "1970 - 1990" },
    { value: "1991-2000", icon: "", text: "1991 - 2000" },
    { value: "2001-2015", icon: "", text: "2001 - 2015" },
    { value: ">2015", icon: "", text: "ab 2015" },
]

const BuildYearForm = ({ mcFormData, setMcFormData, backToPrevious, continueToNext }: MCFormPropsType) => {

    const handleSelect = (value: string) => {
        setMcFormData({
            ...mcFormData,
            builtYear: value
        });
        continueToNext();
    }

    return (
        <div className="">
            <FormHeader
                title="Wann wurde die Wohnung erbaut?"
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

export default BuildYearForm;
