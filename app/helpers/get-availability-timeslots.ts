import { AvailabilityResponse } from "../types";

export const getAvailabilityTimeslots = (
  providerAvailability: AvailabilityResponse,
  providerLocationId: string
) =>
  providerAvailability?.data?.find(
    ({ provider_location_id: availabilityLocationId }) =>
      availabilityLocationId === providerLocationId
  )?.timeslots ?? [];
