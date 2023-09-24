import React from "react";
import jobb3 from "../../public/jobb3.jpg";
import Image from "next/image";
import Link from "next/link";
import jobb1 from "../../public/jobb1.jpg";
import jobb2 from "../../public/jobb2.jpg";
import Vacancies from "@/components/Vacancies";

const index = () => {
  return (
    <div className="w-full pt-24">
      <div className=" w-full flex flex-col lg:flex-row items-center justify-center py-10">
        <div className="w-full px-6">
          <div className="w-[90%] mx-auto flex flex-col gap-8">
            <h1 className=" text-black">Bli med vårt team</h1>
            <p className=" text-xl">
              Er du lidenskapelig opptatt av rengjøring og er stolt av å
              forvandle rom til fristed? Ser du etter en givende karriere der
              din oppmerksomhet på detaljer og hardt arbeid blir anerkjent og
              verdsatt? vi tilbyr spennende jobbmuligheter for både nye og
              erfarne renholdere som deler vår forpliktelse til fortreffelighet.
            </p>
            <Link
              href="/jobbs/jobb/Open-position"
              className="basis-1/4 items-center"
            >
              <button className="px-6 py-2 bg-[#7fafb1] hover:bg-[#C0D7D8] text-black rounded-3xl uppercase font-bold">
                Apply now!
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full">
          <Image
            src={jobb3}
            alt="a man standing infront of white background"
            className="w-96 mx-auto"
          />
        </div>
      </div>
      <div className="bg-slate-100 py-8 flex flex-col gap-6">
        <div className=" w-[95%] md:w-[50%] mx-auto text-center py-14 lg:py-28">
          <p className="text-xl font-bold">
            I Miljø tilbyr vi den beste kundeopplevelsen ved å være den beste
            arbeidsplasser for våre renholdere. Vårt mål er å revolusjonere
            renholdsindustrien!
          </p>
        </div>
        <div className=" w-full flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full p-6">
            <Image
              src={jobb1}
              alt="three womens at meeting"
              className="w-[95%] md:w-[70%] mx-auto lg:w-auto"
            />
          </div>
          <div className="w-full px-6">
            <div className="w-[90%] mx-auto flex flex-col gap-8">
              <h2 className=" text-black">
                Hvorfor velge en karriere med Miljø?
              </h2>
              <p className=" text-lg">
                Bli med i et vennlig og støttende team som verdsetter dine
                bidrag. Vi fremmer en positiv arbeidskultur der hvert teammedlem
                blir respektert og oppmuntret til å vokse:
              </p>
              <ul className=" list-inside list-disc leading-8">
                <li>
                  Vi gir grundig opplæring for å utstyre deg med ferdighetene og
                  kunnskapene som trengs for å utmerke seg i rollen din.
                </li>
                <li>
                  Vi tror på rettferdig kompensasjon til våre hardtarbeidende
                  teammedlemmer.
                </li>
                <li>
                  Vi tilbyr fleksible planleggingsalternativer for å imøtekomme
                  dine personlige behov og forpliktelser.
                </li>
                <li>
                  Vi tror på å pleie talent og gi muligheter for avansement i
                  organisasjonen vår.
                </li>
                <li>
                  Vi tilbyr et bredt spekter av renholdstjenester, fra boliger
                  til kommersielle, og spesialiserte rengjøringsprosjekter.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" w-full flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full px-6">
            <div className="w-[90%] mx-auto flex flex-col gap-8">
              <h2 className=" text-black">
                Hva vi ser etter i et rengjøringsmiddel?
              </h2>
              <p className=" text-lg">
                Hvis svaret er ja så håper vi å høre fra deg!
              </p>
              <ul className="list-inside list-disc leading-8">
                <li>Nøyaktig og Positiv holdning og teamarbeid</li>
                <li>Pålitelighet og punktlighet</li>
                <li>God arbeidsmoral</li>
                <li>Forpliktelse til renslighet og hygiene</li>
                <li>Vilje til å lære og tilpasse seg</li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6">
            <Image
              src={jobb2}
              alt="Group of People Standing Indoors"
              className="w-[95%] md:w-[70%] mx-auto lg:w-auto"
            />
          </div>
        </div>
      </div>
      <div className="w-[70%] mx-auto py-8 lg:py-10">
        <Vacancies />
      </div>
    </div>
  )
}

export default index