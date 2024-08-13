import '../sort.css'
function Sort({sort,setSort})
{
    const handleSelectChange = (e) => {
        setSort(e.target.value);
    };
    return (
    <div className='d-flex justify-content-center align-items-center'>
    <p className="Sort_By">Sort By:</p>
    <select
        className="select"
        defaultValue={sort}
        onChange={handleSelectChange}
    >
        <option value="title">Title</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
    </select>
</div>
);
}
export default Sort;