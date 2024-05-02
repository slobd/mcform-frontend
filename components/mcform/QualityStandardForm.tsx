import { CardButtonType, MCFormPropsType } from "@/utils/types";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";
import CardButtonGroup from "../common/CardButtonGroup";
import ToolTip from "../common/Tooltip";

const cardButtonData: CardButtonType[] = [
    { value: "simply", icon: "/assets/icons/mcform/simply.svg", text: "Einfach" },
    { value: "normal", icon: "/assets/icons/mcform/normal.svg", text: "Normal" },
    { value: "upscale", icon: "/assets/icons/mcform/upscale.svg", text: "Gehoben" },
    { value: "luxury", icon: "/assets/icons/mcform/luxury.svg", text: "Luxus" },
]

const QualityStandardForm = ({ mcFormData, setMcFormData, backToPrevious, continueToNext }: MCFormPropsType) => {

    const handleSelect = (value: string) => {
        setMcFormData({
            ...mcFormData,
            qualityStandard: value
        });
        continueToNext();
    }

    return (
        <div className="">
            <FormHeader
                title="Bitte wählen Sie den Qualitätsstandard der Immobilie"
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
                <div className="flex flex-row items-center">
                    <div className="pl-1 text-black text-xs font-semibold opacity-70">Welche Option passt zu mir?</div>
                    <ToolTip title="Qualitätsstandard" size={"5xl"}>
                        <div className="grid md:grid-cols-2 gap-x-4 gap-y-10">
                            <div className="">
                                <div className="font-semibold mb-2"> Einfach </div>
                                <div className="font-medium mb-2">
                                    ne einfache Ausstattung beinhaltet bspw.:
                                </div>
                                <div className="font-medium">
                                    Einfachverglasung, Fußboden mit PVC oder ohne Belag, Stand-WC, Nachtspeicherheizung.
                                </div>
                            </div>
                            <div className="">
                                <div className="font-semibold mb-2"> Normal </div>
                                <div className="font-medium mb-2">
                                    Eine normale Ausstattung beinhaltet bspw.:
                                </div>
                                <div className="font-medium">
                                    Zweifachverglasung, Fußboden mit Linoleum-, Teppich- oder Laminat-Belag, Dusche oder Badewanne, Fern- oder Zentralheizung.
                                </div>
                            </div>
                            <div className="">
                                <div className="font-semibold mb-2"> Gehoben </div>
                                <div className="font-medium mb-2">
                                    Eine gehobene Ausstattung beinhaltet bspw.:
                                </div>
                                <div className="font-medium">
                                    Elektrische Rollläden, Massivholz-, Naturstein- oder Terrazzoboden, zwei Bäder, Fußbodenheizung, Solarkollektoren.
                                </div>
                            </div>
                            <div className="">
                                <div className="font-semibold mb-2"> Luxus </div>
                                <div className="font-medium mb-2">
                                    Eine luxuriöse Ausstattung beinhaltet bspw.:
                                </div>
                                <div className="font-medium">
                                    Spezialverglasung, hochwertiges Parkett oder Edelholzböden, mehrere Bäder.
                                </div>
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

export default QualityStandardForm;
