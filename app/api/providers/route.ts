import { NextRequest } from "next/server";
import providers from "./providers.json";
import { Provider, ProvidersResponse } from "@/app/types";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const specialty = searchParams.get("specialty") ?? "";
  const zip = searchParams.get("zip") ?? "";

  const result = (providers as ProvidersResponse).data[0].providers
    .filter(byZip(zip))
    .filter(bySpecialty(specialty));

  return Response.json(result);
}

function byZip(
  zip: string
): (value: Provider, index: number, array: Provider[]) => boolean {
  return (provider) => {
    if (!zip) return true;
    return provider.locations[0].zip_code === zip;
  };
}

function bySpecialty(
  specialty: string
): (value: Provider, index: number, array: Provider[]) => boolean {
  return ({ specialties }) => {
    if (!specialty || specialty.toLowerCase() == "all") return true;
    return specialties
      .map((s) => s.toLowerCase())
      .includes(specialty?.toLowerCase());
  };
}

