"use client";

import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchItem from "./components/SearchItem";
import { ProvidersResponse } from "./types";

export default function Home() {
  const [searchResults, setSearchResults] = useState<ProvidersResponse>();

  const handleSearch = () => {
    fetch(`/api/providers`)
      .then((response) => response.json())
      .then((data) => setSearchResults(data))
      .catch((error) => console.error(error));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="z-10 max-w-5xl w-full flex flex-col items-center justify-between font-mono text-sm flex-row">
        {searchResults?.data?.[0].providers?.map((provider) => (
          <div className="w-full flex pt-8" key={provider.full_name}>
            <SearchItem
              full_name={provider.full_name}
              provider_photo_url={provider.provider_photo_url}
              locations={provider.locations}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
