import React, { useState } from "react";

interface Props {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputValue !== "") {
      onSearch(inputValue);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex" }}>
      <input
        className="px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out mb-4"
        type="search"
        placeholder="Search..."
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        style={{ marginRight: "8px", height: "40px" }}
      />
      <button
        type="submit"
        className="px-3 py-2 rounded-md bg-blue-500 text-white"
        style={{ height: "40px" }}
      >
        Submit
      </button>
    </form>
  );
};

export default SearchBar;
