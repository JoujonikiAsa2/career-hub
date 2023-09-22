import PropTypes from 'prop-types'
const Category = ({ category }) => {
    const { logo, category_name, availability } = category;
    return (
        <div>
            <div className='card card-compact border rounded p-4 bg-gradient-to-r from-[#f3f1f1] from-10% to-[#badeec]'>
                <div className="card-body">
                    <img src={logo} alt="Jobs" className='w-12' />
                    <h2 className='card-title'>{category_name}</h2>
                    <p>{availability}</p>
                </div>
            </div>
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.object
}
export default Category;