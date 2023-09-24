import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const VacancyCard = ({ item }) => {
  return (
    <Link className="transition-all delay-100 hover:scale-105" href={`/jobbs/${item.position}`}>
      <div className=" w-full bg-slate-200 shadow-lg p-3 rounded-lg flex items-center justify-between text-lg">
        <p>{item.position}</p>
        <div className=" flex gap-4">
          <p>{item.type}</p>
          <p>{item.data}</p>
        </div>
      </div>
    </Link>
  );
};

export default VacancyCard;
