import Error from'../components/Error'
const Sidebar = ({ isOpen, toggleSidebar,categories,error,setLabel}) => {

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform duration-300 ease-in-out transform z-50 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } w-64 p-4 overflow-y-scroll scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-600 scrollbar-thumb-rounded-md`}
    >
      <button
        className="text-white mb-4"
        onClick={toggleSidebar}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h2 className="text-xl font-bold mb-6">Categories</h2>
      {error ? (
  <Error/>
) : (
  <ul>
    {categories.map((category, index) => (
      <li key={index} className="mb-2">
        <a
          onClick={() => setLabel(category.slug)}
          className="block py-2 px-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer"
        >
          {category.name}
        </a>
      </li>
    ))}
  </ul>
)}

    </div>
  );
};

export default Sidebar;