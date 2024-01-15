import React from "react";
import { ProviderLocation, Timeslot } from "../types";
import AvailabilityCard from "./AvailabilityCard";
import ProviderHero from "./ProviderHero";
import { twoWeeks } from "../helpers/two-weeks";

interface SearchItemProps {
  provider: ProviderLocation["provider"];
  location: ProviderLocation["location"];
  availabilityTimeslots: Timeslot[];
}

const SearchItem: React.FC<SearchItemProps> = ({
  provider: {
    npi,
    gender_identity: genderIdentity,
    full_name: fullName,
    specialties,
  },
  location: {
    location_name: locationName,
    address1: address,
    city,
    state,
    zip_code: zip,
  },
  availabilityTimeslots: availabilityTimeslots,
}) => {
  return (
    <div className="search-item full-width h-1/3 flex flex-col items-center border-t pt-4 sm:flex-row sm:items-start">
      <ProviderHero
        fullName={fullName}
        specialties={specialties}
        locationName={locationName}
        address={address}
        city={city}
        state={state}
        zip={zip}
        genderIdentity={genderIdentity}
      />
      <div className="md:ml-4 mt-2 md:grid md:grid-cols-7 gap-4 flex flex-col flex-wrap md:h-max h-32 w-fit overflow-x-scroll">
        {twoWeeks().map((date) => (
          <AvailabilityCard
            key={date.toString()}
            date={date}
            availabilityTimeslots={availabilityTimeslots}
            npi={npi}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchItem;
