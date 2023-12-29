import React from "react";
import Image from "next/image";
import { Provider, Location } from "../types";

const SearchItem: React.FC<
  Pick<Provider, "provider_photo_url" | "full_name"> & { location: Location }
> = ({
  provider_photo_url: photoUrl,
  full_name: fullName,
  location: {
    location_name: locationName,
    address1: address,
    city,
    state,
    zip_code: zip,
  },
}) => {
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
            <p>{address}</p>
            <p>
              {city}, {state} {zip}
            </p>
          </address>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
