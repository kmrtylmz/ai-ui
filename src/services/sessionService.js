import restApiClient from "./client";
import { generateApiEndpoint } from "../helpers";

/**
 * GET: '/api/v1/account/me'
 */
export async function login(data) {
  const endpoint = generateApiEndpoint("auth/login");
  const response = await restApiClient.post(endpoint, data);

  return response.data;
}

export async function register(data) {
  const endpoint = generateApiEndpoint("auth/register");
  const response = await restApiClient.post(endpoint, data);

  return response.data;
}
