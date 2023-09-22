import { jobs } from "@/constants";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const index = () => {
  const router = useRouter();
  const post = router.query.jobb;
  const [job, setJob] = useState(null);

  useEffect(() => {
    if (post) {
        const fetchedJob = jobs.find((job) => job.title == post)
        setJob(fetchedJob)
    }
  }, [post])

  if(!job) {
    return <div className="pt-28 pb-8">Loading...</div>;
  }
  return (
  <div className="w-full pt-24">
    
  </div>
  )
}

export default index;
