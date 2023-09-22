import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/LocalStorage";
import AppliedJob from "./AppliedJob";

const AppliedJobs = () => {

    const jobs = useLoaderData()
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([])

    const handleJobsFilter = (filterText) => {
        if (filterText == 'all') {
            setDisplayJobs(appliedJobs)
        }
        else if (filterText == 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs)
        }
        else if (filterText == 'onsite') {
            const onSiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onSiteJobs)
        }

    }

    useEffect(() => {

        const storedJobIds = getStoredJobApplication();

        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job=> storedJobId.includes(job.id));

            const jobsApplied = []
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id)
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied)
            setDisplayJobs(jobsApplied)
        }
    }, [jobs])
    return (
        <div className="max-w-5xl mx-auto">
            {/* <details className="dropdown mb-32">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>onsite</a></li>
                </ul>
            </details> */}

            {/* lg */}

            <div>
                <select className="select select-bordered select-lg w-full max-w-xs" onClick={(e) => handleJobsFilter(e.target.value)}>
                    <option disabled selected>Filter</option>
                    <option value='all'>All</option>
                    <option value='remote'>Remote</option>
                    <option value="onsite">Onsite</option>
                </select>
            </div>

            <div className="p-4 lg:py-20">
                {
                    displayJobs.map(appliedJob => <AppliedJob key={appliedJob.id} appliedJob={appliedJob}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;