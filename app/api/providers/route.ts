import { NextRequest } from "next/server";
import providers from "./providers.json";
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("specialty");
  const result = providers.data[0].providers.filter(({ specialties }) => {
    if (!query || query.toLowerCase() == "all") return true;
    return specialties
      .map((s) => s.toLowerCase())
      .includes(query?.toLowerCase() ?? "");
  });

  return Response.json(result);
}
