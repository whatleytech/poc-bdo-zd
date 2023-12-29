import React, { useState } from "react";
import { Specialty } from "../types";

interface Props {
  onSearch: (searchTerm: string, specialty: Specialty) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty>(
    Specialty.All
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputValue !== "") {
      onSearch(inputValue, selectedSpecialty);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex" }}>
      <input
        className="px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out mb-4 border-2 border-gray-300 rounded-md"
        type="search"
        placeholder="Enter a zip code"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        style={{ marginRight: "8px", height: "40px" }}
      />
      <select
        value={selectedSpecialty}
        onChange={(event) =>
          setSelectedSpecialty(event.target.value as Specialty)
        }
        className="border-2 border-gray-300 rounded-md"
        style={{ marginRight: "8px", height: "40px" }}
      >
        {Object.values(Specialty).map((specialty) => (
          <option key={specialty} value={specialty}>
            {specialty}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="px-3 py-2 rounded-md bg-blue-500 text-white border-2 border-gray-300 rounded-md"
        style={{ height: "40px" }}
      >
        Submit
      </button>
    </form>
  );
};

export default SearchBar;
