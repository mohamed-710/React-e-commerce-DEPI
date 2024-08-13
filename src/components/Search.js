import { useState } from "react";
function Search({setSearch})
{
    const [query, setQuery] = useState('');
    const handleChange = (event) => {
        setQuery(event.target.value);
        setSearch(event.target.value);
      };
      return (
        <input
          className="user-input md:w-26 max-sm:w-24"
          type="search"
          placeholder="Search by title or category"
          value={query}
          onChange={handleChange}
        />
      );
    }
export default Search;