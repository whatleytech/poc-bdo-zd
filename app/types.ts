export interface Provider {
  npi: string;
  first_name: string;
  last_name: string;
  title: string;
  full_name: string;
  gender_identity: string;
  specialties: Specialty["Name"][];
  default_visit_reason_id: string;
  locations: Location[];
  virtual_locations: VirtualLocation[];
  practice: Practice;
  provider_photo_url: string;
  languages: string[];
}

export interface Location {
  provider_location_id: string;
  accepts_patient_insurance: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip_code: string;
  latitude: number;
  longitude: number;
  location_name: string;
}

export interface VirtualLocation {
  provider_location_id: string;
  accepts_patient_insurance: string;
  state: string;
  location_name: string;
}

export interface Practice {
  practice_name: string;
}

export interface ProvidersResponse {
  request_id: string;
  data: ProviderData[];
}

export interface ProviderData {
  npi: string;
  providers: Provider[];
}

export type InsurancePlan = {
  InsurancePlanId: string;
  Name: string;
  InsuranceCarrierId: string;
  InsuranceCarrierName: string;
};

export type InsurancePlans = InsurancePlan[];

export type Specialty = {
  SpecialtyId: string;
  Name: string;
  DefaultVisitReasonId: string;
  DefaultVisitReasonName: string;
};

export type Specialties = Specialty[];

export type ProviderLocationProvider = Pick<
  Provider,
  | "npi"
  | "first_name"
  | "last_name"
  | "title"
  | "full_name"
  | "gender_identity"
  | "specialties"
>;

export type ProviderLocationLocation = Pick<
  Location,
  | "address1"
  | "address2"
  | "city"
  | "state"
  | "zip_code"
  | "latitude"
  | "longitude"
  | "location_name"
> & { distance_to_patient_mi: number };

export type ProviderLocationVirtualLocation = Pick<
  VirtualLocation,
  "state" | "location_name"
>;

export type ProviderLocation = {
  provider_location_id: string;
  provider_location_type: string;
  accepts_patient_insurance: string;
  first_availability_date_in_provider_local_time: string;
  provider: ProviderLocationProvider;
  location: ProviderLocationLocation;
  virtual_location: ProviderLocationVirtualLocation;
  practice: Practice;
};

export type ProviderLocationsResponse = {
  request_id: string;
  page: number;
  page_size: number;
  total_count: number;
  next_url: string;
  data: {
    search_parameters: {
      specialty_id: string;
      visit_reason_id: string;
    };
    provider_locations: ProviderLocation[];
  };
};

export type Timeslot = {
  start_time: string;
  visit_reason_id: string;
};

export type Availability = {
  provider_location_id: string;
  first_availability: Timeslot;
  timeslots: Timeslot[];
};

export type AvailabilityResponse = {
  request_id: string;
  data: Availability[];
};