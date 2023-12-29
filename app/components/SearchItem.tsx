import React from "react";
import Image from "next/image";
import { Provider } from "../types";

const SearchItem: React.FC<
  Pick<Provider, "provider_photo_url" | "full_name" | "locations">
> = ({ provider_photo_url: photoUrl, full_name: fullName, locations }) => {
  const locationName = locations[0].location_name;
  const locationAddress = locations[0].address1;
  const locationCity = locations[0].city;
  const locationState = locations[0].state;
  const locationZipCode = locations[0].zip_code;

  console.log("Props:", { photoUrl, fullName, locations });

  return (
    <div
      className="search-item full-width"
      style={{ display: "flex", alignItems: "center" }}
    >
      <Image
        src={photoUrl}
        alt={fullName}
        className="search-item__photo"
        width={100}
        height={100}
      />
      <div className="search-item__details">
        <h1 className="font-bold pb-2 text-2xl">{fullName}</h1>
        <p className="search-item__location text-lg">{locationName}</p>
        <div className="flex">
          <div className="pr-2">
            <Image
              src="/address_icon.jpeg"
              alt="Address"
              width={15}
              height={15}
            />
          </div>
          <address>
            <p>{locationAddress}</p>
            <p>
              {locationCity}, {locationState} {locationZipCode}
            </p>
          </address>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
