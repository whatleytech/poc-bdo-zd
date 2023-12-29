import { NextRequest } from "next/server";
import visit_reasons from "./visit_reasons.json";

export async function GET(request: NextRequest) {
  return Response.json(visit_reasons);
}
