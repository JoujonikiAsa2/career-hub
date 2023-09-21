import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className='card card-compact border rounded p-4'>
            <div className="card-body">
            <img src={logo} alt="Jobs" className='w-24' />
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
                <div className='card-action  justify-start'>
                    <button className='btn bg-gradient-to-r from-[#9873FF] to-[#7E90FE] capitalize text-lg font-extrabold rounded text-white'>View Details</button>
                </div>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object
}

export default Job;