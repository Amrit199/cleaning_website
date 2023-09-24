import React from "react";
import VacancyCard from "./VacancyCard";
import { jobs } from "@/constants";

const Vacancies = () => {
  return (
    <div className="w-full">
      <div className="w-full flex items-end justify-between">
        <h2 className="text-black justify-self-start">Ledige stillinger</h2>
        <p className="uppercase font-bold justify-self-end">Soknadsfrist</p>
      </div>
      <div className="flex flex-col gap-6 py-5">
        {jobs.map((job, index) => (
          <VacancyCard key={index} item={job} />
        ))}
      </div>
    </div>
  );
};

export default Vacancies;
