"use client";

import React, { useContext } from "react";
import SearchBar from "./components/SearchBar";
import SearchItem from "./components/SearchItem";
import { AvailabilityResponse, ProviderLocation, Specialties } from "./types";
import { ModalContext } from "./providers/modal-context";

interface Props {
  specialties: Specialties;
  searchResults: ProviderLocation[];
  providerAvailability: AvailabilityResponse;
}

const BookingOverlay: React.FC = () => {
  const { closeModal } = useContext(ModalContext);
  return (
    <div
      className="border-solid border-2 z-99 sticky inset-1/2 top-0 bg-white h-full flex items-center justify-center center"
      onClick={closeModal}
    >
      Book your appointment now!
    </div>
  );
};

const SearchContainer: React.FC<Props> = ({
  searchResults,
  providerAvailability,
  specialties,
}) => {
  const { isModalOpen } = useContext(ModalContext);

  const getAvailabilityTimeslots = (providerLocationId: string) =>
    providerAvailability?.data?.find(
      ({ provider_location_id: availabilityLocationId }) =>
        availabilityLocationId === providerLocationId
    )?.timeslots ?? [];

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

const PageContent: React.FC<Props> = ({
  searchResults,
  providerAvailability,
  specialties,
}) => {
  const { isModalOpen } = useContext(ModalContext);

  return (
    <div className="relative">
      <SearchContainer
        specialties={specialties}
        searchResults={searchResults}
        providerAvailability={providerAvailability}
      />
      {isModalOpen && <BookingOverlay />}
    </div>
  );
};

export default PageContent;
