import restApiClient from "./client";
import { generateApiEndpoint } from "../helpers";

export async function ServersIsActive() {
  const endpoint = generateApiEndpoint("/servers", "pythonApi");
  const response = await restApiClient.get(endpoint);

  return response.data;
}
