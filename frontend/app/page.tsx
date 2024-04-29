'use client';

import HomeCardButton from "@/components/home/HomeCardButton";
import { CardButtonType } from "@/utils/types";
import { useState } from "react";

const buttonsData: CardButtonType[] = [
  { link: "sell", icon: "/assets/icons/sell.svg", text: "Ich möchte verkaufen" },
  { link: "buy", icon: "/assets/icons/buy.svg", text: "Ich möchte kaufen" },
  { link: "curious", icon: "/assets/icons/curious.svg", text: "Ich bin neugierig" },
]
export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCardClick = (link: string) => {
    setSelectedCategory(link);
  }

  return (
    <div className="bg-white min-h-screen">
      {!selectedCategory
        ? <div className="flex flex-col items-center justify-center md:p-24 p-4">
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
            {buttonsData.map((button: CardButtonType, index) => (
              <HomeCardButton
                key={index}
                icon={button.icon}
                text={button.text}
                onClick={() => handleCardClick(button.link)}
              />
            ))}
          </div>
        </div>
        : <div className="flex flex-col w-full">
          <div>

          </div>
        </div>
      }

    </div>
  );
}
