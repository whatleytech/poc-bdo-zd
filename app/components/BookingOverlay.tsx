import { useContext } from "react";
import { ModalContext } from "../providers/modal-context";
import ProviderHero from "./ProviderHero";
import { ProviderLocation } from "../types";

interface BookingOverlayProps {
  provider: ProviderLocation["provider"];
  location: ProviderLocation["location"];
}

const BookingOverlay: React.FC<BookingOverlayProps> = ({
  provider: {
    full_name: fullName,
    specialties,
    gender_identity: genderIdentity,
  },
  location: {
    location_name: locationName,
    address1: address,
    city,
    state,
    zip_code: zip,
  },
}) => {
  const { closeModal } = useContext(ModalContext);
  return (
    <div
      className="border-solid border-2 z-99 sticky inset-1/2 top-0 bg-white h-full flex items-center justify-center center flex-col"
      onClick={closeModal}
    >
      <h1>{`Book your appointment with ${fullName}`}</h1>
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
    </div>
  );
};

export default BookingOverlay;
