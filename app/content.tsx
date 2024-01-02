import React from "react";
import SearchBar from "./components/SearchBar";
import SearchItem from "./components/SearchItem";
import { AvailabilityResponse, ProviderLocation, Specialties } from "./types";

interface Props {
  specialties: Specialties;
  searchResults: ProviderLocation[];
  providerAvailability: AvailabilityResponse;
}

const PageContent: React.FC<Props> = ({
  searchResults,
  providerAvailability,
  specialties,
}) => {
  const getAvailabilityTimeslots = (providerLocationId: string) =>
    providerAvailability?.data?.find(
      ({ provider_location_id: availabilityLocationId }) =>
        availabilityLocationId === providerLocationId
    )?.timeslots ?? [];

  return (
    <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex flex-col">
      <SearchBar specialties={specialties} />
      <h1 className="font-bold text-lg">{searchResults.length} providers</h1>
      {searchResults?.map(({ provider, location, provider_location_id }) => (
        <div className="w-full flex pt-8" key={provider.full_name}>
          <SearchItem
            provider={provider}
            location={location}
            availabilityTimeslots={getAvailabilityTimeslots(
              provider_location_id
            )}
          />
        </div>
      ))}
    </div>
  );
};

export default PageContent;
