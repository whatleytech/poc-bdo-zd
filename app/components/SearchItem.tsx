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
    <div className="search-item full-width flex items-center border-t pt-4">
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
      <div className="ml-4 mt-2 grid grid-cols-7 gap-4">
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
