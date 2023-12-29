interface Props {
  // Define your component's props here
}

const SearchBar: React.FC<Props> = () => {
  return (
    <input
      className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out mb-4"
      type="search"
      placeholder="Search..."
    />
  );
};

export default SearchBar;
