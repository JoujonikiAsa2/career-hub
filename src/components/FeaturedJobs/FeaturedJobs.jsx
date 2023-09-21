import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('../jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div className="py-8 lg:py-28">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold">Featured Jobs</h2>
                <p className="text-base font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>

            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 lg:pt-10 px-6 py-8">
                {
                    jobs.slice(0,dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength===jobs.length ? 'hidden' : 'flex justify-center py-10 pb:8 md:pb-20 lg:pb-28' }>
                <button 
                onClick={()=>setDataLength(jobs.length)}
                className="btn bg-gradient-to-r from-[#9873FF] to-[#7E90FE] capitalize text-lg font-extrabold rounded text-white">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;