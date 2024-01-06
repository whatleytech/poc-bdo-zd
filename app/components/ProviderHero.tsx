import React from "react";
import Image from "next/image";

interface ProviderHeroProps {
  fullName: string;
  specialties: string[];
  locationName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  genderIdentity: string;
}

const ProviderHero: React.FC<ProviderHeroProps> = ({
  fullName,
  specialties,
  locationName,
  address,
  city,
  state,
  zip,
  genderIdentity,
}) => {
  const photoUrl = genderIdentity === "Female" ? "/woman.png" : "/man.png";

  return (
    <div className="flex flex-row full-width">
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
    </div>
  );
};

export default ProviderHero;
