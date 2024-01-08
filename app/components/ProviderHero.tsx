import React from "react";
import Image from "next/image";

interface ProviderHeroProps {
  fullName?: string;
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
      <div className="flex items-center justify-center">
        <Image
          src={photoUrl}
          alt={fullName ?? "Provider"}
          className="rounded-full"
          width={100}
          height={100}
        />
      </div>
      <div className="w-64 ml-4 ">
        {fullName && <h1 className="font-bold text-2xl">{fullName}</h1>}
        <p className={`text-md ${fullName ? "pb-2" : ""}`}>{specialties[0]}</p>
        <div className={`flex ${fullName ? "mt-1" : ""} items-center`}>
          <div className="pr-2 pb-6">
            <Image
              src="/address_icon.jpeg"
              alt="Address"
              width={15}
              height={15}
            />
          </div>
          <address>
            <p>{`${
              locationName ? `${locationName} -` : ""
            } ${address} ${city}, ${state} ${zip}`}</p>
          </address>
        </div>
      </div>
    </div>
  );
};

export default ProviderHero;