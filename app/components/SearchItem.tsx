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
        <h3 className="search-item__name">{fullName}</h3>
        <p className="search-item__location">{locationName}</p>
        <p className="search-item__address">{locationAddress}</p>
        <p className="search-item__address">
          {locationCity}, {locationState} {locationZipCode}
        </p>
      </div>
    </div>
  );
};

export default SearchItem;
