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
    <div className="border-solid border-2 z-99 fixed top-1/4 start-1/3 bg-white flex flex-col p-6 w-1/3 h-fit">
      <div>
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
      <h1 className="text-2xl font-bold pt-2 pb-4">{`Book with ${fullName}`}</h1>
      <ProviderHero
        specialties={specialties}
        locationName={locationName}
        address={address}
        city={city}
        state={state}
        zip={zip}
        genderIdentity={genderIdentity}
      />
      <div className="py-2">
        <div className="py-4">
          <h2 className="text-lg font-semibold">Available appointments</h2>
          <h2 className="text-sm font-light">Click a time to book for free.</h2>
        </div>
        <div>
          <div className="mb-2">Fri, Jan 4</div>
          <div className="bg-yellow-300 w-fit p-2">12:30 pm</div>
        </div>
      </div>
    </div>
  );
};

export default BookingOverlay;
