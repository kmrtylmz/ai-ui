import restApiClient from './client';
import { generateApiEndpoint } from '../helpers';

/**
 * GET: '/api/v1/date'
 */
export async function getServerDate() {
  const endpoint = generateApiEndpoint('date');
  const result = await restApiClient.get(endpoint);
  return result.data;
}

/**
 * GET: '/api/v1/version'
 */
export async function getApiVersion() {
  const endpoint = generateApiEndpoint('version');
  const result = await restApiClient.get(endpoint);
  return result.data;
}

/**
 * GET: '/api/v1/countries'
 */
export async function getCountries() {
  const endpoint = generateApiEndpoint('countries');
  const result = await restApiClient.get(endpoint);
  return result.data;
}

/**
 * GET: '/api/v1/cities'
 */
export async function getCities() {
  const endpoint = generateApiEndpoint('cities');
  const result = await restApiClient.get(endpoint);
  return result.data;
}

/**
 * GET: '/api/v1/languages'
 */
export async function getLanguages() {
  const endpoint = generateApiEndpoint('languages');
  const result = await restApiClient.get(endpoint);
  return result.data;
}

/**
 * GET: '/api/v1/timezones'
 */
export async function getTimezones() {
  const endpoint = generateApiEndpoint('timezones');
  const result = await restApiClient.get(endpoint);
  return result.data;
}

/**
 * POST: '/api/v1/presign'
 */
export async function presignFile(data) {
  const endpoint = generateApiEndpoint('application/presign');
  const result = await restApiClient.post(endpoint, data);
  return result.data;
}