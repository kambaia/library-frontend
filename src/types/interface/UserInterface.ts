
export interface IUser {
  id: number;
  profile?: string;
  nameProfile?: string;
  email: string;
  userName: string;
  firstName: string;
  fullName: string;
  password?: string;
  phoneNumber?: string;
  studentNumber?: string;
  permission: string;
  active: boolean;
  favoriteBook?: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface IUserLogin {
  user:TAccessUser;
  token: string;
}
export type TAccessUser =  {
    id: number;
    userProfile?: string;
    email: string;
    userName: string;
    fullName: string;
    permission: string;
    role?: string;
    type?: string;
    active: number;
  };

  export type TRegisterUser =  {
    userProfile?: string;
    email: string;
    userName: string;
    firstName: string;
    phoneNumber:string;
    lastName: string;
    permissionId: string;
    password:string;
    role?: string;
    type?: string;
    active: number;
  };

export enum Gender {
  masculino = "Masculino",
  femenino = "Femenino",
  undisclosed = "undisclosed",
}

export interface Address {
  street: string;
  city: string;
  country: string;
  province: string;
  county: string;
  neighborhood: string;
}

export interface Contact {
  unitel: string;
  movicel: string;
  fixe: string;
}
export interface Iaccess_level {
  id: string;
  livel: number;
  role: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IRefreshToken {
  id: string;
  expireIn: number;
  userId: IUser["id"];
}
