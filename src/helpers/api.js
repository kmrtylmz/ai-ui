import config from '../config';

const API_VERSION = 'v1';

/**
 * Generate full url for muhsis internal api.
 * @param {*} url
 */

export function generateApiEndpoint(url,server='nodeApi') {
  return `${config.urls.api[server]}/api/${API_VERSION}/${url}`;
}