import React, { useContext } from "react";
import { Timeslot } from "../types";
import { ModalContext } from "../providers/modal-context";

interface AvailabilityCardProps {
  date: Date;
  availabilityTimeslots: Timeslot[];
}

const AvailabilityCard: React.FC<AvailabilityCardProps> = ({
  date,
  availabilityTimeslots,
}) => {
  const { openModal } = useContext(ModalContext);

  function isSameDay(date1: Date, date2: Date) {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  const availabilityTimeslotsForDate = availabilityTimeslots.filter(
    ({ start_time }) => isSameDay(date, new Date(start_time))
  ).length;

  return (
    <div
      onClick={() => {
        if (availabilityTimeslotsForDate > 0) openModal();
      }}
      className={`flex flex-col rounded-lg p-2.5 min-w-max ${
        availabilityTimeslotsForDate > 0
          ? "bg-yellow-200 hover:bg-blue-200 cursor-pointer"
          : "bg-gray-200"
      } `}
      key={date.toString()}
    >
      <div>
        <p>{date.toLocaleDateString("en-US", { weekday: "short" })}</p>
        <p>
          {date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>
      <div className="pt-2">
        <p>{availabilityTimeslotsForDate}</p>
        <p>appts</p>
      </div>
    </div>
  );
};

export default AvailabilityCard;
