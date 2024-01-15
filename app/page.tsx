import PageContent from "./content";
import { ModalProvider } from "./providers/modal-context";
import { ProviderLocationsResponse, Specialties } from "./types";
import specialties from "./api/specialties/specialties.json";
import availability from "./api/provider_locations/availability/availability.json";
import provider_locations from "./api/provider_locations/provider_locations.json";

async function getSpecialties(): Promise<Specialties> {
  // Update this with fetch to Zocdoc API
  return specialties;
}

async function getResults(
  zip?: string | string[] | null,
  specialty?: string | string[] | null
) {
  // Update this with fetch to Zocdoc API
  const result = (
    provider_locations as ProviderLocationsResponse
  ).data.provider_locations
    .filter((provider_location) => {
      if (!zip) return true;
      return provider_location.location.zip_code === zip;
    })
    .filter((provider_location) => {
      if (!specialty) return true;
      return provider_location.provider.specialties
        .map((s) => s.toLowerCase())
        .includes((specialty as string).toLowerCase());
    });
  return result;
}

async function getProviderAvailability() {
  // Update this with fetch to Zocdoc API
  return availability;
}

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const specialties = await getSpecialties();
  const searchResults = await getResults(
    searchParams?.zip,
    searchParams?.specialty
  );
  const providerAvailability = await getProviderAvailability();

  return (
    <main className="py-5 px-10">
      <ModalProvider>
        <PageContent
          specialties={specialties}
          searchResults={searchResults}
          providerAvailability={providerAvailability}
        />
      </ModalProvider>
    </main>
  );
}
