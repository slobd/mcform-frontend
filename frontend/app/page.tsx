'use client';

import { useState } from "react";
import HomeCardButton from "@/components/home/HomeCardButton";
import { CardButtonType, MCFormDataType } from "@/utils/types";
import { XMarkIcon } from "@heroicons/react/16/solid";
import ConfirmModal from "@/components/modal/confirmModal";
import CategoryForm from "@/components/mcform/CategoryForm";
import ZipCodePanel from "@/components/mcform/ZipCodeForm";
const cardButtonData: CardButtonType[] = [
  { value: "sell", icon: "/assets/icons/home/sell.svg", text: "Ich möchte verkaufen" },
  { value: "buy", icon: "/assets/icons/home/buy.svg", text: "Ich möchte kaufen" },
  { value: "miscellaneous", icon: "/assets/icons/home/miscellaneous.svg", text: "Ich bin neugierig" },
]

const defaultMCFormData: MCFormDataType = {
  type: "",
  zipCode: "",
}
export default function Home() {
  const [cancelConfirmModal, setCancelConfirmModal] = useState(false);
  const [MCFormData, setMCFormData] = useState<MCFormDataType>(defaultMCFormData);
  const [showMCForm, setShowMCForm] = useState(false);
  const [totalStep, setTotalStep] = useState(9);
  const [currentStep, setCurrentStep] = useState(2);

  const handleSelect = (value: string) => {
    setMCFormData({
      ...MCFormData,
      type: value
    })
    setShowMCForm(true);
  }

  const handleCancel = () => {
    setCancelConfirmModal(true);
  }

  const handleConfirm = (value: boolean) => {
    if (value) {
      setShowMCForm(false);
      setMCFormData(defaultMCFormData);
      setCurrentStep(2);
    }
    setCancelConfirmModal(false);
  }

  return (
    <div className="bg-white min-h-screen">
      {!showMCForm &&
        <div className="flex flex-col items-center justify-center md:p-24 p-4">
          <div className="sm:px-6 md:py-24 py-4 md:px-8 px-0">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Ihr Immobilienmakler mit kostenloser Bewertung
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                Wofür benötigen Sie den Wert Ihrer Immobilie?
              </p>
            </div>
          </div>
          <div className="mb-32 grid text-center md:mb-0 md:max-w-5xl w-full md:grid-cols-3 md:text-left">
            {cardButtonData.map((button: CardButtonType, index) => (
              <HomeCardButton
                key={index}
                icon={button.icon}
                text={button.text}
                onClick={() => handleSelect(button.value)}
              />
            ))}
          </div>
        </div>
      }
      {showMCForm &&
        <div className="flex flex-col w-full">
          <div>
            <div className="grow-0 flex flex-row justify-between items-center w-full md:px-20 px-4 py-6">
              <div
                className="text-2xl font-semibold cursor-pointer"
                onClick={() => handleCancel()}
              >
                McMakler
              </div>
              <div
                className="flex flex-row justify-between items-center cursor-pointer"
                onClick={() => handleCancel()}
              >
                <span>Schließen</span>
                <XMarkIcon className="w-6 h-6" />
              </div>
            </div>
            <div className="grow">
              <div className="" aria-hidden="true">
                <div className="overflow-hidden bg-gray-200">
                  <div className="h-2 rounded-sm bg-gray-600" style={{ width: currentStep * 100 / totalStep + "%" }} />
                </div>
              </div>
            </div>
            <ConfirmModal
              open={cancelConfirmModal}
              setOpen={setCancelConfirmModal}
              handler={handleConfirm}
              title={"Bewertungsprozess verlassen?"}
              description={"Ihr Fortschritt wird nicht gespeichert."}
            />
          </div>
          <div className="flex justify-center">
            <div className="md:px-20 px-4 md:py-32 py-8 max-w-4xl w-full">
                {currentStep == 1 &&
                  <CategoryForm
                    MCFormData={MCFormData}
                    setMCFormData={setMCFormData}
                    backToPrevious={() => setCurrentStep(prev => prev - 1)}
                    continueToNext={() => setCurrentStep(prev => prev + 1)}
                  />
                }
                {currentStep == 2 &&
                  <ZipCodePanel
                    MCFormData={MCFormData}
                    setMCFormData={setMCFormData}
                    backToPrevious={() => setCurrentStep(prev => prev - 1)}
                    continueToNext={() => setCurrentStep(prev => prev + 1)}
                  />
                }
            </div>
          </div>
        </div>
      }

    </div>
  );
}
