import { useQuery } from 'react-query';
import { QueryOptionsType } from '../../../types/interface/App';
import { API_ENDPOINTS } from '../../../utils/api/endpoints';
import user from './user'

const fetchPermission = async ({ queryKey }: any) => {
  try {
    const response = await user.all(API_ENDPOINTS.PERMISSION);
   return response.data;
  } catch (error) {
    console.error(error)
    throw error
  }
}


const usePermissionsQuery = (options: QueryOptionsType) => {
    return useQuery<any, Error>([API_ENDPOINTS.PERMISSION, options], fetchPermission, {
      cacheTime: 8000
    });
  };
  
  export { usePermissionsQuery, fetchPermission };
  
