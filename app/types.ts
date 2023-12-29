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