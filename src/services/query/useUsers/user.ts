import { TRegisterUser } from "../../../types/interface/UserInterface";
import Base from "../../../utils/base";

class User extends Base<TRegisterUser, TRegisterUser> {
  register = async (url: string, variables: TRegisterUser) => {
    return this.http<TRegisterUser>(url, "post", variables);
  };
}


export default new User();
