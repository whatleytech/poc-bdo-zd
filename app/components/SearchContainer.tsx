import React, { useContext } from "react";
import { ModalContext } from "../providers/modal-context";
import { AvailabilityResponse, ProviderLocation, Specialties } from "../types";
import SearchBar from "./SearchBar";
import SearchItem from "./SearchItem";
import { getAvailabilityTimeslots } from "../helpers/get-availability-timeslots";

interface Props {
  specialties: Specialties;
  searchResults: ProviderLocation[];
  providerAvailability: AvailabilityResponse;
}

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

export default SearchContainer;
