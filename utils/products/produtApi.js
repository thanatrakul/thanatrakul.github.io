import { apiGet } from '@/utils/api.js';

const HOSTNAME = '';

export function index() {
  const url = `${HOSTNAME}/api/`;
  auth = true;
  return apiGet(url, data, auth);
}
