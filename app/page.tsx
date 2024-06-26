'use client';

import { useState } from "react";
import HomeCardButton from "@/components/home/HomeCardButton";
import { CardButtonType, McFormDataType } from "@/utils/types";
import { XMarkIcon } from "@heroicons/react/16/solid";
import ConfirmModal from "@/components/modal/confirmModal";
import CategoryForm from "@/components/mcform/CategoryForm";
import LocationForm from "@/components/mcform/LocationForm";
import PropertyForm from "@/components/mcform/PropertyForm";
import DetailedTypeForm from "@/components/mcform/DetailedTypeForm";
import LivingSpaceSizeForm from "@/components/mcform/LivingSpaceSizeForm";
import LocatedAreaSizeForm from "@/components/mcform/LocatedAreaSizeForm";
import RoomCountForm from "@/components/mcform/RoomCountForm";
import BuildYearForm from "@/components/mcform/BuildYearForm";
import RentedStatusForm from "@/components/mcform/RentedStatusForm";
import QualityStandardForm from "@/components/mcform/QualityStandardForm";
import TimelineForm from "@/components/mcform/TimelineForm";
import UserInfoForm from "@/components/mcform/UserInfoForm";
import Review from "@/components/mcform/Review";
import AppointmentForm from "@/components/mcform/AppointmentForm";
import AppointmentInfoForm from "@/components/mcform/AppointmentInfoForm";
import AppointmentAddtionalInfoForm from "@/components/mcform/AppointmentAddtionalInfoForm";
import AppointmentDateTimeForm from "@/components/mcform/AppointmentDateTimeForm";
import { defaultMcFormData } from '../utils/constants';
import { APIService } from "@/services";

const cardButtonData: CardButtonType[] = [
  { value: "sell", icon: "/assets/icons/home/sell.svg", text: "Ich möchte verkaufen" },
  { value: "buy", icon: "/assets/icons/home/buy.svg", text: "Ich möchte kaufen" },
  { value: "miscellaneous", icon: "/assets/icons/home/miscellaneous.svg", text: "Ich bin neugierig" },
]

export default function Home() {
  const [cancelConfirmModal, setCancelConfirmModal] = useState(false);
  const [mcFormData, setMcFormData] = useState<McFormDataType>(defaultMcFormData);
  const [showMCForm, setShowMCForm] = useState(false);
  const [totalStep, setTotalStep] = useState(12);
  const [currentStep, setCurrentStep] = useState(2);

  const handleSelect = (value: string) => {
    setMcFormData({
      ...mcFormData,
      category: value
    })
    setShowMCForm(true);
  }

  const handleCancel = () => {
    setCancelConfirmModal(true);
  }

  const handleConfirm = (value: boolean) => {
    if (value) {
      setMcFormData(defaultMcFormData);
      setCurrentStep(2);
      setShowMCForm(false);
    }
    setCancelConfirmModal(false);
  }

  const handleFinish = () => {

    APIService.user.create({
      ...mcFormData.user
    }).then((res: any) => {
      APIService.mcFormData.create({
        ...mcFormData,
        user: res.data._id,
      }).then((res: any) => {
        console.log("mcFormData created", res);
      })
    })


    setMcFormData(defaultMcFormData);
    setCurrentStep(2);
    setShowMCForm(false);
  }

  return (
    <div className="bg-white text-primary min-h-screen">
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
                className="flex flex-row justify-between font-medium items-center cursor-pointer"
                onClick={() => handleCancel()}
              >
                <span>Schließen</span>
                <XMarkIcon className="w-6 h-6" />
              </div>
            </div>
            <div className="grow">
              <div className="" aria-hidden="true">
                <div className="overflow-hidden bg-gray-200">
                  <div className="h-2 rounded-sm bg-primary" style={{ width: currentStep * 100 / totalStep + "%" }} />
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
            <div className={`max-w-4xl w-full md:px-20 px-4 md:pt-32 pt-8 pb-8`}>
              {currentStep == 1 &&
                <CategoryForm
                  mcFormData={mcFormData}
                  setMcFormData={setMcFormData}
                  backToPrevious={() => setCurrentStep(prev => prev - 1)}
                  continueToNext={() => setCurrentStep(prev => prev + 1)}
                />
              }
              {currentStep == 2 &&
                <LocationForm
                  mcFormData={mcFormData}
                  setMcFormData={setMcFormData}
                  backToPrevious={() => setCurrentStep(prev => prev - 1)}
                  continueToNext={() => setCurrentStep(prev => prev + 1)}
                />
              }
              {currentStep == 3 &&
                <PropertyForm
                  mcFormData={mcFormData}
                  setMcFormData={setMcFormData}
                  backToPrevious={() => setCurrentStep(prev => prev - 1)}
                  continueToNext={() => setCurrentStep(prev => prev + 1)}
                />
              }
              {currentStep == 4 &&
                <DetailedTypeForm
                  mcFormData={mcFormData}
                  setMcFormData={setMcFormData}
                  backToPrevious={() => setCurrentStep(prev => prev - 1)}
                  continueToNext={() => setCurrentStep(prev => prev + 1)}
                />
              }
              {currentStep == 5 &&
                <LivingSpaceSizeForm
                  mcFormData={mcFormData}
                  setMcFormData={setMcFormData}
                  backToPrevious={() => setCurrentStep(prev => prev - 1)}
                  continueToNext={() => setCurrentStep(prev => prev + 1)}
                />
              }
              {/* {currentStep == 6 &&
                <LocatedAreaSizeForm
                  mcFormData={mcFormData}
                  setMcFormData={setMcFormData}
                  backToPrevious={() => setCurrentStep(prev => prev - 1)}
                  continueToNext={() => setCurrentStep(prev => prev + 1)}
                />
              } */}
              {currentStep == 6 &&
                <RoomCountForm
                  mcFormData={mcFormData}
                  setMcFormData={setMcFormData}
                  backToPrevious={() => setCurrentStep(prev => prev - 1)}
                  continueToNext={() => setCurrentStep(prev => prev + 1)}
                />
              }
              {currentStep == 7 &&
                <BuildYearForm
                  mcFormData={mcFormData}
                  setMcFormData={setMcFormData}
                  backToPrevious={() => setCurrentStep(prev => prev - 1)}
                  continueToNext={() => setCurrentStep(prev => prev + 1)}
                />
              }
              {currentStep == 8 &&
                <RentedStatusForm
                  mcFormData={mcFormData}
                  setMcFormData={setMcFormData}
                  backToPrevious={() => setCurrentStep(prev => prev - 1)}
                  continueToNext={() => setCurrentStep(prev => prev + 1)}
                />
              }
              {currentStep == 9 &&
                <QualityStandardForm
                  mcFormData={mcFormData}
                  setMcFormData={setMcFormData}
                  backToPrevious={() => setCurrentStep(prev => prev - 1)}
                  continueToNext={() => setCurrentStep(prev => prev + 1)}
                />
              }
              {currentStep == 10 &&
                <TimelineForm
                  mcFormData={mcFormData}
                  setMcFormData={setMcFormData}
                  backToPrevious={() => setCurrentStep(prev => prev - 1)}
                  continueToNext={() => setCurrentStep(prev => prev + 1)}
                />
              }
              {currentStep == 11 &&
                <UserInfoForm
                  mcFormData={mcFormData}
                  setMcFormData={setMcFormData}
                  backToPrevious={() => setCurrentStep(prev => prev - 1)}
                  // continueToNext={() => setCurrentStep(prev => prev + 1)}
                  continueToNext={() => handleFinish()}
                />
              }
              {/* {currentStep == 12 &&
                <AppointmentForm
                  mcFormData={mcFormData}
                  setMcFormData={setMcFormData}
                  backToPrevious={() => setCurrentStep(prev => prev - 1)}
                  continueToNext={() => setCurrentStep(prev => prev + 1)}
                />
              }
              {currentStep == 13 &&
                <AppointmentInfoForm
                  mcFormData={mcFormData}
                  setMcFormData={setMcFormData}
                  backToPrevious={() => setCurrentStep(prev => prev - 1)}
                  continueToNext={() => setCurrentStep(prev => prev + 1)}
                />
              }
              {currentStep == 14 &&
                <AppointmentAddtionalInfoForm
                  mcFormData={mcFormData}
                  setMcFormData={setMcFormData}
                  backToPrevious={() => setCurrentStep(prev => prev - 1)}
                  continueToNext={() => setCurrentStep(prev => prev + 1)}
                />
              }
              {currentStep == 15 &&
                <AppointmentDateTimeForm
                  mcFormData={mcFormData}
                  setMcFormData={setMcFormData}
                  backToPrevious={() => setCurrentStep(prev => prev - 1)}
                  continueToNext={() => setCurrentStep(prev => prev + 1)}
                />
              } */}
            </div>
          </div>
          <div>
            <Review />
          </div>
        </div>
      }

    </div>
  );
}
