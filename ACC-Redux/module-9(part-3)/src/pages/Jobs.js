import React from "react";
import { useNavigate } from "react-router-dom";
import JobCard from "../components/reusable/JobCard";
import { useGetJobsQuery } from "../feature/job/jobAPI";

const Jobs = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetJobsQuery();
  console.log(data);
  return (
    <div className="pt-14">
      <div className="bg-primary/10 p-5 rounded-2xl">
        <h1 className="font-semibold text-xl">Find Jobs</h1>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        {data?.data?.map((jobData) => (
          <JobCard key={jobData._id} jobData={jobData} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
