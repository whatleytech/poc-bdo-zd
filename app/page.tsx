import PageContent from "./content";
import { ModalProvider } from "./providers/modal-context";
import { Specialties } from "./types";

async function getSpecialties(): Promise<Specialties> {
  const res = await fetch("http://localhost:3000/api/specialties");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getResults(
  zip?: string | string[] | null,
  specialty?: string | string[] | null
) {
  const searchParams = new URLSearchParams({
    ...(zip && { zip: zip.toString() }),
    ...(specialty && { specialty: specialty.toString() }),
  });

  const providerLocationsUrl = `http://localhost:3000/api/provider_locations?${searchParams.toString()}`;

  const res = await fetch(providerLocationsUrl);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getProviderAvailability() {
  const providerLocationsAvailabilityUrl =
    "http://localhost:3000/api/provider_locations/availability";

  const res = await fetch(providerLocationsAvailabilityUrl);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
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
