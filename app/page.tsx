"use client";

import { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchItem from "./components/SearchItem";
import { Provider, Specialty } from "./types";

export default function Home() {
  const [searchResults, setSearchResults] = useState<Provider[]>([]);

  const handleSearch = (zip: string, specialty: Specialty) => {
    const url = new URL("/api/providers", window.location.origin);
    url.searchParams.append("specialty", specialty.toLowerCase());
    if (zip) url.searchParams.append("zip", zip);
    fetch(url.toString())
      .then((response) => response.json())
      .then((data) => setSearchResults(data))
      .catch((error) => console.error(error));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex flex-col">
        <SearchBar onSearch={handleSearch} />
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
    </main>
  );
}
