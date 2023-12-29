import { NextRequest } from "next/server";
import provider_locations from "./provider_locations.json";
import { ProviderLocationsResponse } from "@/app/types";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const specialty = searchParams.get("specialty") ?? "";
  const zip = searchParams.get("zip") ?? "";

  const result = (
    provider_locations as ProviderLocationsResponse
  ).data.provider_locations
    .filter((provider_location) => {
      if (!zip) return true;
      return provider_location.location.zip_code === zip;
    })
    .filter((provider_location) => {
      if (!specialty) return true;
      return provider_location.provider.specialties.includes(specialty);
    });

  return Response.json(result);
}
