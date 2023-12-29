import { NextRequest } from "next/server";
import specialties from "./specialties.json";

export async function GET(request: NextRequest) {
  return Response.json(specialties);
}
