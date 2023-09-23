
import { jobs, jobsKontakt } from "@/constants";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const index = () => {
  const router = useRouter();
  const post = router.query.jobb;
  const [job, setJob] = useState(null);

  useEffect(() => {
    if (post) {
      const fetchedJob = jobs.find((job) => job.position == post);
      setJob(fetchedJob);
    }
  }, [post]);

  if (!job) {
    return <div className="pt-28 pb-8">Loading...</div>;
  }
  return (
    <div className="w-full pt-24 pb-10">
      <div className="w-[80%] mx-auto py-8">
        <div className="w-full flex gap-8">
          <div className="w-full basis-2/3 flex flex-col gap-5 text-lg">
            <h3 className="text-black">{job.title}</h3>
            <div className="flex flex-col gap-3">
              <p className="font-bold">
                Stillingstittel:{" "}
                <span className="font-normal">{job.position}</span>
              </p>
              <p className="font-bold">
                Frist: <span className="font-normal">{job.data}</span>
              </p>
              <p className="font-bold">
                Ansettelsesform: <span className="font-normal">{job.type}</span>
              </p>
            </div>
            <p className="text-xl">{job.intro}</p>
            <div>
              <p className="font-bold text-lg">Vi søker deg som:</p>
              <ul className=" list-inside list-disc">
                {job.requirements.map((item, index) => (
                  <li key={index} className="list-item">
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-lg">Ved å jobbe hos oss får du:</p>
              <ul className="list-disc list-inside">
                {job.benefits.map((item, index) => (
                  <li key={index} className="list-item">
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <p>{job.conclustion}</p>
          </div>
          <div className="w-full basis-1/3 p-6 justify-self-center">
            <div className="p-6 bg-blue/10 text-center flex flex-col gap-4 items-center rounded-xl">
              <div>
                <h4 className="text-black">Kontaktperson</h4>
                <p>{jobsKontakt.name}</p>
                <p>{jobsKontakt.mobile}</p>
                <p>{jobsKontakt.email}</p>
              </div>
              <div>
                <h4 className="text-black">Søknadsfrist</h4>
                <p>{job.data}</p>
              </div>
              <Link
                href={`/jobbs/${job.position}/contact`}
                className="basis-1/4 hidden md:flex items-center"
              >
                <button className="px-6 py-2 bg-[#7fafb1] hover:bg-[#C0D7D8] text-black rounded-3xl uppercase font-bold">
                  Søk her
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
