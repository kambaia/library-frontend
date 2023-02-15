import { useMutation, useQueryClient } from "react-query";
import attribute from "../../../types/attribute";
import { TRegisterUser } from "../../../types/interface/UserInterface";
import { API_ENDPOINTS } from "../../../utils/api/endpoints";

export interface IAttributeCreateVariables {
  variables: {
    input: TRegisterUser;
    userId?: string
  };
}

export const useUpdateUserMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ variables: { input, userId} }: IAttributeCreateVariables) =>
      attribute.update(`${API_ENDPOINTS.USER}/${userId}`, input),
    {
      onSuccess: () => {
         console.log("Cadastrado")
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.USER);
      },
    }
  );
};
