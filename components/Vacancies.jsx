import React from "react";
import VacancyCard from "./VacancyCard";

const Vacancies = () => {
  return (
    <div className="w-full">
      <div className="w-full flex items-end justify-between">
        <h2 className="text-black justify-self-start">Ledige stillinger</h2>
        <p className="uppercase font-bold justify-self-end">Soknadsfrist</p>
      </div>
      <div className="py-5">
        <VacancyCard />
      </div>
    </div>
  );
};

export default Vacancies;
