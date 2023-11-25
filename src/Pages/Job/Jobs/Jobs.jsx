import { useEffect, useState } from "react";
import JobsCard from "../JobsCard/JobsCard";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("office.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="grid grid-cols-3 gap-5">
      {jobs.map((job) => (
        <JobsCard key={job._id} job={job}></JobsCard>
      ))}
    </div>
  );
};

export default Jobs;
