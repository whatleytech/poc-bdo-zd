import { NextRequest } from "next/server";
import availability from "./availability.json";

export async function GET(request: NextRequest) {
  return Response.json(availability);
}
