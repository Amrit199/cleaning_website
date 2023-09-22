import Link from "next/link";
import React from "react";

const VacancyCard = () => {
    const title = "Renholder"
  return (
    <Link href={`/jobbs/${title}`}>
      <div className=" w-full bg-slate-200 shadow-lg p-3 rounded-lg flex items-center justify-between text-lg">
        <p>{title}</p>
        <div className=" flex gap-4">
          <p>Oslo</p>
          <p>2.sep.2023</p>
        </div>
      </div>
    </Link>
  );
};

export default VacancyCard;
