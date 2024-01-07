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
    <div className="border-solid border-2 z-99 fixed bottom-1/2 start-1/3 bg-white h-full flex flex-col p-6 w-1/3 h-fit">
      <div className="px-4">
        <button onClick={closeModal}>
          <svg
            role="img"
            aria-hidden="true"
            height="24"
            viewBox="0 0 12 20"
            fill="none"
          >
            <title>close icon</title>
            <path
              d="m11.667 5.342-1.175-1.175-4.659 4.658-4.658-4.658L0 5.342 4.658 10 0 14.658l1.175 1.175 4.658-4.658 4.659 4.658 1.175-1.175L7.008 10l4.659-4.658Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>
      <h1 className="text-2xl font-bold p-4">{`Book with ${fullName}`}</h1>
      <ProviderHero
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
