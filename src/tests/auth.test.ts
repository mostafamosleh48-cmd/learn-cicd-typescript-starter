import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("should throw an error if no Authorization header is present", () => {
    const headers = {};
    expect(() => getAPIKey(headers as any)).toThrow(
      "no authorization header included",
    );
  });

  test("should throw an error if the header is malformed", () => {
    const headers = { authorization: "ApiKey" }; // Missing the actual key
    expect(() => getAPIKey(headers as any)).toThrow(
      "malformed authorization header",
    );
  });

  test("should return the key if the header is correctly formatted", () => {
    const headers = { authorization: "ApiKey some-secret-key" };
    const result = getAPIKey(headers as any);
    expect(result).toBe("some-secret-key");
  });
});
