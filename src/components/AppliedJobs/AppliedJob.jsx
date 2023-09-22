import { CiLocationOn } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
const AppliedJob = ({ appliedJob }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = appliedJob
    return (
        <div className="my-4">
            <div className='card w-[65vw] border rounded p-6'>
                <div className="flex flex-col lg:flex-row md:flex-row justify-evenly  items-center">
                    <div className="flex gap-6">
                        <img src={logo} alt="Jobs" className='w-36 h-36' />
                        <div>
                            <h2 className='card-title'>{job_title}</h2>
                            <p>{company_name}</p>
                            <div className='flex font-extrabold'>
                                <button className='px-5 py-2 border rounded border-[#7E90FE] mr-4 text-[#7E90FE]'>{remote_or_onsite}</button>
                                <button className='px-5 py-2 border rounded border-[#7E90FE] mr-4 text-[#7E90FE]'>{job_type}</button>
                            </div>
                            <div className='flex'>
                                <p className='py-2 flex gap-3 items-center text-lg'><CiLocationOn></CiLocationOn> {location}</p>
                                <p className='py-2 flex gap-3 items-center text-lg' ><RiMoneyDollarCircleLine></RiMoneyDollarCircleLine> {salary}</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-action  justify-start'>
                        <Link to={`/job/${id}`} className='btn bg-gradient-to-r from-[#9873FF] to-[#7E90FE] capitalize text-lg font-extrabold rounded text-white' id={id}>View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

AppliedJob.propTypes = {
    appliedJob: PropTypes.object
}

export default AppliedJob