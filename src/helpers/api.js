import config from "../config";

const API_VERSION = "v1";

/**
 * Generate full url for muhsis internal api.
 * @param {*} url
 */

export function generateApiEndpoint(url, server = "goApi") {
  return `${config.urls.api[server]}/${API_VERSION}/${url}`;
}
