import config from "../config";

const API_VERSION = "v1";

export function generateApiEndpoint(url, server = "goApi") {
  return `${config.urls.api[server]}/${API_VERSION}/${url}`;
}
