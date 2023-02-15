import { TObject } from '../../types/interface/App';

/**
 *
 * Funkcja podmienia parametry w linkach pomiędzy dwukropkami
 *
 */
export const endpointWithParams = (
  endpoint: string,
  params?:TObject | null,
  queryParams?:TObject
): string => {
  const regex = /:\w+:/g;

  const matches = endpoint.match(regex);

  matches?.forEach((match) => {
    endpoint = endpoint.replace(match, params?.[match.slice(1, match.length - 1)]);
  });

  if (queryParams) {
    const searchParams = new URLSearchParams(queryParams);
    return endpoint.includes('?')
      ? `${endpoint}&${searchParams.toString()}`
      : `${endpoint}?${searchParams.toString()}`;
  }

  return endpoint;
};
