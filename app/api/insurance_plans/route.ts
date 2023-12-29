import { NextRequest } from "next/server";
import insurancePlans from "./insurance_plans.json";

export async function GET(request: NextRequest) {
  return Response.json(insurancePlans);
}
