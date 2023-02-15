import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import parseResponseError from '../parseResponseError';


/**
 * Obsługuje błąd przetwarzania zapytania HTTP.
 */
export const handleError = (err: AxiosError): void => {
  toast.error(parseResponseError(err));
};
