import React from "react";
import { Chrono } from "react-chrono";

const ExpPro = () => {
  return (
    <div
      name="experiencespro"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-4 inline">
          Expériences professionnelle
        </p>
        <div>
          <Chrono
            items={[
              {
                title: "May 1940",
                cardTitle: "Dunkirk",
                url: "http://google.com",
                cardSubtitle:
                  "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
                cardDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians .`,
              },
              {
                title: "25 July 1940",
                cardTitle: "The Battle of Britain",
                cardSubtitle: `RAF Spitfire pilots scramble for their planes`,
                cardDetailedText: `After France’s surrender in June 1940, Churchill told the British people, “Hitler knows that he will have to break us in this island or lose the war”. To mount a successful invasion, the Germans had to gain air.`,
              },
              {
                title: "June 1941",
                cardTitle: "Operation Barbarossa",
                cardSubtitle: `A column of Red Army prisoners taken during the first days of the German invasion`,
                cardDetailedText: `Since the 1920s, Hitler had seen Russia, with its immense natural resources, as the principal target for conquest and expansion. It would provide, he believed, the necessary ‘Lebensraum’, or living space, for ”`,
              },
            ]}
            mode="VERTICAL"
            classNames="pt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default ExpPro;
