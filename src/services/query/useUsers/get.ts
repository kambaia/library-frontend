import { useQuery } from "react-query";
import { QueryOptionsType } from "../../../types/interface/App";
import { API_ENDPOINTS } from "../../../utils/api/endpoints";
import user from "./user";

const fetchUsers = async ({ queryKey }: any) => {
  const [_pathName, params] = queryKey;

  const {
    page = 0,
    text,
    limit = 2,
    orderBy = "updated_at",
    sortedBy = "DESC",
  } = params;
  try {
    const url = `${API_ENDPOINTS.USERS}?search=${text}&limit=${limit}&page=${page}&orderBy=${orderBy}&sortedBy=${sortedBy}`;
    const response = await user.all(url);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const useUsersQuery = (options: QueryOptionsType) => {
  return useQuery<any, Error>([API_ENDPOINTS.USERS, options], fetchUsers, {
    cacheTime: 4000,
  });
};

export { useUsersQuery, fetchUsers };
