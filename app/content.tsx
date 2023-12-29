"use client";

import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchItem from "./components/SearchItem";
import {
  Availability,
  AvailabilityResponse,
  Provider,
  ProviderLocation,
  ProviderLocationsResponse,
  Specialties,
} from "./types";

interface Props {
  specialties: Specialties;
}

const PageContent: React.FC<Props> = ({ specialties }) => {
  const [searchResults, setSearchResults] = useState<ProviderLocation[]>([]);
  const [providerAvailability, setProviderAvailability] =
    useState<AvailabilityResponse>();

  const handleSearch = (zip: string, specialty: string) => {
    const providerLocationsUrl = new URL(
      "/api/provider_locations",
      window.location.origin
    );
    if (zip) providerLocationsUrl.searchParams.append("zip", zip);
    if (specialty)
      providerLocationsUrl.searchParams.append("specialty", specialty);
    const providerLocationsAvailabilityUrl = new URL(
      "/api/provider_locations/availability",
      window.location.origin
    );

    fetch(providerLocationsUrl.toString())
      .then((response) => response.json())
      .then((data) => setSearchResults(data))
      .catch((error) => console.error(error));

    fetch(providerLocationsAvailabilityUrl.toString())
      .then((response) => response.json())
      .then((data) => setProviderAvailability(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex flex-col">
      <SearchBar onSearch={handleSearch} specialties={specialties} />
      <h1 className="font-bold text-lg">{searchResults.length} providers</h1>
      {searchResults?.map(({ provider, location, provider_location_id }) => (
        <div className="w-full flex pt-8" key={provider.full_name}>
          <SearchItem
            provider={provider}
            location={location}
            availabilityTimeslots={
              providerAvailability?.data?.find(
                ({ provider_location_id: availabilityLocationId }) =>
                  availabilityLocationId === provider_location_id
              )?.timeslots ?? []
            }
          />
        </div>
      ))}
    </div>
  );
};

export default PageContent;
