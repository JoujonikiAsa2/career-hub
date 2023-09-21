import { useLoaderData, useParams } from "react-router-dom";
import { CiLocationOn,CiDollar } from "react-icons/ci";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import {BsTelephone} from "react-icons/bs";
import {HiOutlineMail} from "react-icons/hi";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id == idInt)
    console.log(job)
    return (
        <div className="">
            <div className="flex justify-center items-center py-20  bg-blue-100">
                <h2 className="text-4xl font-extrabold">Job Details</h2>
            </div>
            <div className="grid gap-12 md:grid-cols-4 max-w-5xl mx-auto py-20 px-6">
                <div className="md:col-span-2 space-y-3">
                    <p className="text-lg"><span className="text-lg font-bold">Job Description:</span> {job.job_description}</p>
                    <p className="text-lg"><span className="text-lg font-bold">Job Responsibility:</span> {job.job_responsibility}</p>
                    <div>
                        <p className="text-lg"><span className="text-lg font-bold">Educational Requirements</span></p>
                        <p> {job.educational_requirements}</p>
                    </div>
                    <div>
                        <p className="text-lg"><span className="text-lg font-bold">Experiences:</span> </p>
                        <p>{job.experiences}</p>
                    </div>

                </div>
                <div className="w-96">
                    <div className="border card p-4 rounded space-y-2">
                        <h2 className="py-2 text-lg font-bold">Job Details</h2>
                        <hr className="pb-2" />
                        <div className="flex items-center gap-1">
                            <CiDollar></CiDollar> <p><span className=" font-bold">Salary:</span> {job.salary} (Per Month)</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <BiBriefcaseAlt2></BiBriefcaseAlt2> <p><span className="font-bold">Job title:</span> {job.job_title}</p>
                        </div>
                        <h2 className="py-2 text-lg font-bold">Conatct Information</h2>
                        <hr className="pb-2" />
                        <div className="flex items-center gap-1 text-xm">
                            <BsTelephone></BsTelephone> <p><span className="font-bold">Phone:</span> {job.contact_information.phone}</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <HiOutlineMail></HiOutlineMail> <p><span className="font-bold">Email:</span> {job.contact_information.email}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <CiLocationOn></CiLocationOn> <p><span className="font-bold">Address:</span> {job.contact_information.address}</p>
                        </div>
                    </div>
                    <div>
                        <button className="w-[100%] btn bg-blue-500 my-4 capitalize text-white font-bold">Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;