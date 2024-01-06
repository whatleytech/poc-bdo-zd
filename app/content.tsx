"use client";

import React, { useContext } from "react";
import SearchBar from "./components/SearchBar";
import SearchItem from "./components/SearchItem";
import { AvailabilityResponse, ProviderLocation, Specialties } from "./types";
import { ModalContext } from "./providers/modal-context";
import BookingOverlay from "./components/BookingOverlay";

interface Props {
  specialties: Specialties;
  searchResults: ProviderLocation[];
  providerAvailability: AvailabilityResponse;
}

const getAvailabilityTimeslots = (
  providerAvailability: AvailabilityResponse,
  providerLocationId: string
) =>
  providerAvailability?.data?.find(
    ({ provider_location_id: availabilityLocationId }) =>
      availabilityLocationId === providerLocationId
  )?.timeslots ?? [];

const SearchContainer: React.FC<Props> = ({
  searchResults,
  providerAvailability,
  specialties,
}) => {
  const { isModalOpen } = useContext(ModalContext);

  return (
    <div
      className={`z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex flex-col ${
        isModalOpen ? "blur-[2px]" : ""
      }`}
    >
      `
      <SearchBar specialties={specialties} />
      <h1 className="font-bold text-lg">{searchResults.length} providers</h1>
      {searchResults?.map(({ provider, location, provider_location_id }) => (
        <div className="w-full flex pt-8" key={provider.npi}>
          <SearchItem
            provider={provider}
            location={location}
            availabilityTimeslots={getAvailabilityTimeslots(
              providerAvailability,
              provider_location_id
            )}
          />
        </div>
      ))}
    </div>
  );
};

const PageContent: React.FC<Props> = ({
  searchResults,
  providerAvailability,
  specialties,
}) => {
  const { isModalOpen, npi } = useContext(ModalContext);

  const providerResults = searchResults.find(
    ({ provider }) => provider.npi === npi
  );
  const { provider, location } = providerResults ?? {};

  return (
    <div className="relative">
      <SearchContainer
        specialties={specialties}
        searchResults={searchResults}
        providerAvailability={providerAvailability}
      />
      {isModalOpen && provider && location && (
        <BookingOverlay provider={provider} location={location} />
      )}
    </div>
  );
};

export default PageContent;
