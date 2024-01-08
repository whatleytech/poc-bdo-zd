"use client";

import React, { useContext } from "react";
import { AvailabilityResponse, ProviderLocation, Specialties } from "./types";
import { ModalContext } from "./providers/modal-context";
import BookingOverlay from "./components/BookingOverlay";
import SearchContainer from "./components/SearchContainer";
import { getAvailabilityTimeslots } from "./helpers/get-availability-timeslots";

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
  const { isModalOpen, npi } = useContext(ModalContext);

  const providerResults = searchResults.find(
    ({ provider }) => provider.npi === npi
  );
  const {
    provider,
    location,
    provider_location_id = "",
  } = providerResults ?? {};

  return (
    <div className="relative">
      <SearchContainer
        specialties={specialties}
        searchResults={searchResults}
        providerAvailability={providerAvailability}
      />
      {isModalOpen && provider && location && (
        <BookingOverlay
          provider={provider}
          location={location}
          availabilityTimeslots={getAvailabilityTimeslots(
            providerAvailability,
            provider_location_id
          )}
        />
      )}
    </div>
  );
};

export default PageContent;
