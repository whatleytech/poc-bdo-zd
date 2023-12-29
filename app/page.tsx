import PageContent from "./content";
import { Specialties } from "./types";

async function getSpecialties(): Promise<Specialties> {
  const res = await fetch("http://localhost:3000/api/specialties");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const specialties = await getSpecialties();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PageContent specialties={specialties} />
    </main>
  );
}
