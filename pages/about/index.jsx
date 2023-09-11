import ContactForm from "@/components/ContactForm";
import Featured from "@/components/Featured";
import React from "react";

const index = () => {
  return (
    <div className="w-full pt-24 pb-6 text-black">
      <div className=" w-[90%] lg:w-[70%] mx-auto py-10 flex flex-col items-center justify-center text-center gap-4">
        <h2 className="text-black py-4">Miljø Renholdjenester AS</h2>
        <p className="text-lg">
          Velkommen til Miljø Renholdjenester AS, registrert under
          organisasjonsnummer 998 916 755, et anerkjent renholdsbedrift med en
          bemerkelsesverdig reise som startet i år 2012. Med et tiår med
          dedikert service har vi omhyggelig videreutviklet vår kompetanse og
          samlet et vell av kunnskap i innen profesjonell rengjøring. Til tross
          for vår relativt korte eksistens, besitter teamet vårt omfattende
          bransjeerfaring, tilegnet gjennom samarbeid med andre anerkjente
          renholdsfirmaer og dedikerte roller innen renholdsledelse.
        </p>
        <p>
          Vårt primære fokus er å tilby rengjøringsløsninger av høy kvalitet, og
          vår tilpasningsdyktige ekspertise dekker et bredt spekter av
          kommersielle miljøer. Vi er stolte av å tilby grundige
          rengjøringstjenester på forskjellige steder, inkludert travle
          kjøpesentre, viktige helseklinikker, restauranter, kantiner, kontorer
          og butikker. Hos Miljø er målet vårt å sikre at rommene dine er rene
          og hygieniske, og skaper en positiv refleksjon over din merkevare og
          virksomhet.
        </p>
      </div>
      <div className="w-full bg-slate-100 px-2 py-10 lg:px-10">
          <Featured />
      </div>
      <div className="w-full py-10">
        <div className="w-[90%] md:w-[70%] lg:w-[50%] bg-slate-100 mx-auto border-2 border-[#7fafb1] rounded-xl shadow-2xl">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default index;
