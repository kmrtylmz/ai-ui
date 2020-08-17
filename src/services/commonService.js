import restApiClient from "./client";
import { generateApiEndpoint } from "../helpers";

/**
 * GET: '/api/v1/date'
 */
export async function getServerDate() {
  const endpoint = generateApiEndpoint("date");
  const result = await restApiClient.get(endpoint);
  return result.data;
}

/**
 * GET: '/api/v1/version'
 */
export async function getApiVersion() {
  const endpoint = generateApiEndpoint("version");
  const result = await restApiClient.get(endpoint);
  return result.data;
}
