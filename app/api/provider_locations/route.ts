import { NextRequest } from "next/server";
import provider_locations from "./provider_locations.json";

export async function GET(request: NextRequest) {
  return Response.json(provider_locations);
}
