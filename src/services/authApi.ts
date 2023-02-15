
import { TLogin } from "../types/componets-types/general";
import { IUser } from "../types/interface/UserInterface";
import api from "./baseApi";

export const authAuth = ({ email, password }: TLogin): Promise<IUser> => {
  return new Promise(async (resolve, reject) => {
    try {
      const resp = await api.post("/me", { email, password});
      resolve(resp.data);
    } catch (error) {
      reject(error);
    }
  });
};
