import ApplicationForm from "@/components/ApplicationForm";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const name = router.query.jobb;
  return (
    <div className="w-full pt-24 pb-8">
      <div className="w-[90%] md:w-[70%] lg:w-[50%] mx-auto">
        <h1 className="text-black text-center font-bold py-20">Søk på stillingen som {!name ? name : "Open position"}</h1>
        <ApplicationForm />
      </div>
    </div>
  );
};

export default index;
