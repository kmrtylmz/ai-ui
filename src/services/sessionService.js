import restApiClient from './client';
import { generateApiEndpoint } from '../helpers';

/**
 * GET: '/api/v1/account/me'
 */
export async function login() {
  const endpoint = generateApiEndpoint('/login');
  const response = await restApiClient.post(endpoint);

  return response.data;
}

 export async function register() {
  const endpoint = generateApiEndpoint('/register');
  const response = await restApiClient.post(endpoint);

  return response.data;
}

