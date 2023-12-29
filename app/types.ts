export interface Provider {
  npi: string;
  first_name: string;
  last_name: string;
  title: string;
  full_name: string;
  gender_identity: string;
  specialties: Specialty[];
  default_visit_reason_id: string;
  locations: Location[];
  virtual_locations: VirtualLocation[];
  practice: Practice;
  provider_photo_url: string;
  languages: string[];
}

export enum Specialty {
  All = "All",
  Pediatrics = "Pediatrics",
  FamilyMedicine = "Family Medicine",
  InternalMedicine = "Internal Medicine",
  Cardiology = "Cardiology",
  Dermatology = "Dermatology",
  AllergyImmunology = "Allergy and Immunology",
  Ophthalmology = "Ophthalmology",
  ENT = "ENT",
  Psychiatry = "Psychiatry",
  Psychology = "Psychology",
  Orthopedics = "Orthopedics",
  SportsMedicine = "Sports Medicine",
  Obstetrics = "Obstetrics",
  Gynecology = "Gynecology",
  Neurology = "Neurology",
  Urology = "Urology",
  Nephrology = "Nephrology",
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
