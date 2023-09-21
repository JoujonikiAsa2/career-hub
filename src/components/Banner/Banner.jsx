import userImage from '../../assets/images/user.png'
const Banner = () => {
    return (
        <div className="text-left">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between gap-36">
                    <img src={userImage} className="max-w-sm rounded-lg" />
                    <div className='w-96'>
                        <h1 className="text-4xl font-bold">One Step Closer To Your <span className='text-[#7E90FE]'>Dream Job</span></h1>
                        <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className="btn bg-[#7E90FE] text-lg font-extrabold text-white capitalize">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;