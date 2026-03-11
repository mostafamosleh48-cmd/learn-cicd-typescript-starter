import { IncomingHttpHeaders } from "http";

export function getAPIKey(headers: IncomingHttpHeaders): string {
  const authHeader = headers["authorization"];

  if (!authHeader) {
    throw new Error("no authorization header included");
  }

  const splitAuth = authHeader.split(" ");
  if (splitAuth.length < 2 || splitAuth[0] !== "ApiKey") {
    throw new Error("malformed authorization header");
  }

  return splitAuth[1];
}
