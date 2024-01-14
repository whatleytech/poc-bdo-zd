import React, { useState } from "react";
import { Specialties } from "../types";
import Link from "next/link";

interface Props {
  specialties: Specialties;
}

const SearchBar: React.FC<Props> = ({ specialties }) => {
  const [inputZip, setInputZip] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("");

  const generateLink = () => {
    const searchParams = new URLSearchParams({
      ...(inputZip && { zip: inputZip }),
      ...(selectedSpecialty && { specialty: selectedSpecialty }),
    });

    return `/?${searchParams.toString()}`;
  };

  return (
    <div className="flex flex-col sm:flex-row items-center pb-4 gap-4">
      <input
        className="px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 border-2 border-gray-300 rounded-md"
        type="search"
        placeholder="Enter a zip code"
        value={inputZip}
        onChange={(event) => setInputZip(event.target.value)}
      />
      <select
        value={selectedSpecialty}
        onChange={(event) => setSelectedSpecialty(event.target.value)}
        className="border-2 border-gray-300 rounded-md h-10 w-5/6 md:w-auto"
      >
        <option key={"s0"}></option>
        {specialties
          .sort((a, b) => a.Name.localeCompare(b.Name))
          .map((specialty) => (
            <option key={specialty.SpecialtyId} value={specialty.Name}>
              {specialty.Name}
            </option>
          ))}
      </select>
      <Link
        type="submit"
        href={generateLink()}
        className="px-3 py-2 rounded-md bg-blue-500 text-white border-2 border-gray-300 rounded-md h-10"
      >
        Submit
      </Link>
    </div>
  );
};

export default SearchBar;
