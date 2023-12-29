import providers from "./providers.json";
export async function GET(request: Request) {
  return Response.json(providers);
}
