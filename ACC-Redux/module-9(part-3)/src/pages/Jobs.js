import React from "react";
import { useNavigate } from "react-router-dom";
import JobCard from "../components/reusable/JobCard";
import { useGetJobsQuery } from "../feature/job/jobApi";

const Jobs = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetJobsQuery();
  return (
    <div className="pt-14">
      <h1>This is job page</h1>
      <div>
        {data?.data?.map(({ position, companyName, _id }) => (
          <div>
            <h1>{position}</h1>
            <p>{companyName}</p>
            <button onClick={() => navigate(`/job-details/${_id}`)}>
              Details
            </button>
          </div>
        ))}
      </div>
      {/* <div className="bg-primary/10 p-5 rounded-2xl">
        <h1 className="font-semibold text-xl">Find Jobs</h1>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <JobCard />
      </div> */}
    </div>
  );
};

export default Jobs;
