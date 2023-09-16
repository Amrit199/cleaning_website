import React from "react";
import jobb from "../public/jobb.jpg";
import Image from "next/image";
import Link from "next/link";
import jobb1 from "../public/jobb1.jpg";
import jobb2 from "../public/jobb2.jpg";

const job = () => {
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
              href="/contact"
              className="basis-1/4 hidden md:flex items-center"
            >
              <button className="px-6 py-2 bg-[#7fafb1] hover:bg-[#C0D7D8] text-black rounded-3xl uppercase font-bold">
                Apply now!
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full">
          <Image
            src={jobb}
            alt="a man standing infront of white background"
            className="w-96 mx-auto"
          />
        </div>
      </div>
      <div className="bg-slate-100 py-8 flex flex-col gap-6">
        <div className=" w-[95%] md:w-[50%] mx-auto text-center py-14 lg:py-28">
          <p className="text-xl font-bold">
            At Freska, we offer the best customer experience by being the best
            workplace for our cleaners. Our goal is to revolutionize the
            cleaning industry!
          </p>
        </div>
        <div className=" w-full flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full p-6">
            <Image src={jobb1} alt="three womens at meeting" className="w-[95%] md:w-[70%] mx-auto lg:w-auto" />
          </div>
          <div className="w-full px-6">
            <div className="w-[90%] mx-auto flex flex-col gap-8">
              <h2 className=" text-black">HVA TILBYR VI?</h2>
              <p className=" text-lg">
                Vi streber etter å være den beste arbeidsplassen for alle våre
                ansatte. Vi tror sterkt på at fornøyde renholdere leder til
                fornøyde kunder. Dette tilbyr vi våre fantastiske renholdere i
                Freska:
              </p>
              <ul className=" list-inside list-disc leading-8">
                <li>
                  Daglig støtte; vi har et dedikert team som kun er her for å
                  hjelpe deg.
                </li>
                <li>
                  Stabil inntekt; ingen overraskelser på lønnsslippen din.
                </li>
                <li>
                  Gratis Forkurs til Fagbrev; slik at du kan bygge opp CV-en din
                  mens du jobber med oss.
                </li>
                <li>
                  Betalt opplæring med våre eksperter; slik at du kan skinne i
                  rollen din.
                </li>
                <li>
                  Og selvfølgelig viktige rettigheter som feriepenger,
                  sykepenger, pensjon osv.{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" w-full flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full px-6">
            <div className="w-[90%] mx-auto flex flex-col gap-8">
              <h2 className=" text-black">HØRES DETTE UT SOM DEG?</h2>
              <p className=" text-lg">
                Hvis svaret er ja så håper vi å høre fra deg!
              </p>
              <ul className="list-inside list-disc leading-8">
                <li>
                  Du liker å bygge langvarige kundeforhold, vi har de beste
                  kundene i Norge
                </li>
                <li>Du løser problemer selvstendig og arbeider effektivt.</li>
                <li>Du behersker norsk eller engelsk flytende.</li>
                <li>Du har registrert adresse i Norge.</li>
                <li>
                  Du har egen bil hvis du bor utenfor offentlig transport sone.
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6">
            <Image src={jobb2} alt="Group of People Standing Indoors" className="w-[95%] md:w-[70%] mx-auto lg:w-auto"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default job;
