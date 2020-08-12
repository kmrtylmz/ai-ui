import restApiClient from './client';
import { generateApiEndpoint } from '../helpers';

/**
 * GET: '/api/v1/account/me'
 */
export async function getCurrentUser() {
  const endpoint = generateApiEndpoint('account/me');
  const response = await restApiClient.get(endpoint);

  return response.data;
}

/**
 * GET: '/api/v1/account/settings'
 */
export async function getCurrentUserSettings() {
  const endpoint = generateApiEndpoint('account/settings');
  const response = await restApiClient.get(endpoint);

  return response.data;
}

/**
 * PUT: '/api/v1/account/me'
 - Sample data :   {
    id: req.user.id,
    fullName: req.body.fullName,
    phone: req.body.phone,
  };
 */

export async function updateCurrentUser(data) {
  const endpoint = generateApiEndpoint('account/me');
  const response = await restApiClient.put(endpoint, data);

  return response.data;
}

/**
 * PUT: '/api/v1/account/password'
 */
export async function changePassword(data) {
  const endpoint = generateApiEndpoint('account/password');
  const response = await restApiClient.put(endpoint, data);

  return response.data;
}
