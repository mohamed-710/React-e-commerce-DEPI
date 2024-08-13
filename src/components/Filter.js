import '../filter.css'
function Filter({filter,setFilter})
{
    const handleSelectChange = (e) => {
        setFilter(e.target.value);
    };
    return (
    <div className='d-flex justify-content-center align-items-center'>
    <p className="Filter">Filter:</p>
    <select
        className="select"
        defaultValue={filter}
        onChange={handleSelectChange}
    >
        <option value="price">Price</option>
        <option value="rating">Rating</option>
    </select>
</div>
);
}
export default Filter;