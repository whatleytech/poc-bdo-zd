import React from "react";
import Image from "next/image";
import { ProviderLocation, Timeslot } from "../types";
import AvailabilityCard from "./AvailabilityCard";

interface SearchItemProps {
  provider: ProviderLocation["provider"];
  location: ProviderLocation["location"];
  availabilityTimeslots: Timeslot[];
}

const SearchItem: React.FC<SearchItemProps> = ({
  provider: {
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
  const photoUrl = genderIdentity === "Female" ? "/woman.png" : "/man.png";

  const dates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date(2023, 11, 25);
    date.setDate(date.getDate() + i);
    return date; // returns date in 'YYYY-MM-DD' format
  });

  return (
    <div className="search-item full-width flex items-center gap-4 border-t p-4">
      <Image
        src={photoUrl}
        alt={fullName}
        className="search-item__photo"
        width={100}
        height={100}
      />
      <div className="search-item__details w-64 ml-4">
        <h1 className="font-bold text-2xl">{fullName}</h1>
        <p className="search-item__specialty text-md pb-2">{specialties[0]}</p>
        <p className="search-item__location text-lg">{locationName}</p>
        <div className="flex" style={{ marginTop: "0.5rem" }}>
          <div className="pr-2">
            <Image
              src="/address_icon.jpeg"
              alt="Address"
              width={15}
              height={15}
            />
          </div>
          <address>
            <p>{address}</p>
            <p>
              {city}, {state} {zip}
            </p>
          </address>
        </div>
      </div>
      <div className="ml-4 mt-2 grid grid-cols-7 gap-4">
        {dates.map((date) => (
          <AvailabilityCard
            key={date.toString()}
            date={date}
            availabilityTimeslots={availabilityTimeslots}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchItem;
