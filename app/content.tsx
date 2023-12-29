"use client";

import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchItem from "./components/SearchItem";
import { Provider, Specialties } from "./types";

interface Props {
  specialties: Specialties;
}

const PageContent: React.FC<Props> = ({ specialties }) => {
  const [searchResults, setSearchResults] = useState<Provider[]>([]);

  const handleSearch = (zip: string, specialty: string) => {
    const url = new URL("/api/providers", window.location.origin);
    url.searchParams.append("specialty", specialty.toLowerCase());
    if (zip) url.searchParams.append("zip", zip);
    fetch(url.toString())
      .then((response) => response.json())
      .then((data) => setSearchResults(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex flex-col">
      <SearchBar onSearch={handleSearch} specialties={specialties} />
      {searchResults?.map((provider) => (
        <div className="w-full flex pt-8" key={provider.full_name}>
          <SearchItem
            full_name={provider.full_name}
            provider_photo_url={provider.provider_photo_url}
            location={provider.locations[0]}
          />
        </div>
      ))}
    </div>
  );
};

export default PageContent;
