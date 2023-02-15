import { Box } from "@mui/system";
import { GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { TObject } from "../types/interface/App";
import { TAccessUser } from "../types/interface/UserInterface";
import { ModeEdit } from "@mui/icons-material";
import { Button, Tooltip } from "@mui/material";
import { ImageBox } from "../styles/geralStyles";
import { useAppDispatch } from "../store/hooks/useAppHooksRedux";
import { setVisibleModal } from "../store/modal/actions";
import { ActionButtons } from "../components/shared/ActionButtons";

const regex = new RegExp("dog", "gi");

export const pathRouer = (role: string, router: string) => {
  switch (role) {
    case "admin":
      if (router === "/") return { role: "public", router: router };
      return { role: "private", router: router };
    case "leitor":
      return { role: "public", router: router };
    default:
      return { role: "public", router: router };
  }
};

export const userRole = () => {
  const user = localStorage.getItem("@bucaso:user");
  const { role } = JSON.parse(user!) || "";
  return role;
};
export const logout = () => {
  localStorage.removeItem("@bucaso:user");
  localStorage.removeItem("@bucaso:token");
};

export const userAccess = (): TAccessUser => {
  const user = localStorage.getItem("@bucaso:user") as string;
  if (!user) return JSON.parse(user);
  return JSON.parse(user);
};

export const ROLES_ADMIN = "admin";
export const ROLES_LEITOR = "user";

export enum SORT_TYPE {
  ASC = "asc",
  DESC = "desc",
}
export enum SEARCH_JOIN {
  AND = "and",
  OR = "or",
}

export enum OrderField {
  CreatedAt = "created_at",
  UpdatedAt = "updated_at",
}

/**************************************************Tables data fields  */
export const userColumns: any = [
  {
    name: "ID",
    selector: (row: TObject) => row.id,
    sortable: true,
    width: "4rem",
  },
  {
    name: "Nome Completo",
    selector: (row: TObject) => `${row.firstName} ${row.lastName}`,
    sortable: true,
    width: "400px",
  },
  {
    name: "E-Email",
    selector: (row: TObject) => row.email,
    sortable: true,
    width: "300px",
  },
  {
    name: "Nome do Útilizador",
    selector: (row: TObject) => row.userName,
    width: 1,
  },
  { name: "Nivel de Acesso", selector: (row: TObject) => row.type, width: 255 },
  {
    name: "Foto",
    selector: (row: TObject) => row.userProfile,
    cell: (row: TObject) => (
      <Box>
        <Tooltip title="Editar">
          <ImageBox src={row?.userProfile} alt={row.nameProfile} />
        </Tooltip>
      </Box>
    ),
    width: "300px",
  },
  {
    name: "Ação",
    cell: (row: TObject) => (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <ActionButtons
          id={row.id}
          navigationPath={"/admin/book-register/edit"}
          row={row}
        />
      </Box>
    ),
  },
];

export const categoryColumns: any = [
  {
    name: "ID",
    selector: (row: TObject) => row.id,
    width: 15,
    sortable: true,
  },
  {
    name: "Categoria",
    selector: (row: TObject) => row.category,
    width: 300,
    sortable: true,
  },
  {
    name: "Ação",
    cell: (row: TObject) => (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Tooltip title="Editar">
          <Button variant="outlined" startIcon={<ModeEdit />} />
        </Tooltip>
        <Tooltip title="Delete">
          <Button variant="outlined" color="error" startIcon={<ModeEdit />} />
        </Tooltip>
      </Box>
    ),
  },
];

export const autorColumns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "authorName", headerName: "Nome do Autor", width: 300 },
  { field: "birthDate", headerName: "Data de Nascimento", width: 300 },
  { field: "followersId", headerName: "Seguidores", width: 255 },
  { field: "biography", headerName: "Biografia", width: 255 },
  { field: "profile", headerName: "Foto", width: 300 },
];

export const booksColumns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "authorName", headerName: "Nome do Autor", width: 300 },
  { field: "birthDate", headerName: "Data de Nascimento", width: 300 },
  { field: "followersId", headerName: "Seguidores", width: 255 },
  { field: "biography", headerName: "Biografia", width: 255 },
  { field: "profile", headerName: "Foto", width: 300 },
];

export const categoryRows: GridRowsProp = [
  {
    id: 1,
    category: "Romance",
  },
  {
    id: 2,
    category: "Ação",
  },
];

export const userRows: GridRowsProp = [
  {
    id: 1,
    fullName: "1",
    email: "josedasilva@g ail.com",
    username: "KA",
    role: "editora",
    profile: "World",
  },
  {
    id: 2,
    fullName: "1",
    email: "kambaiaalberto@gmail.com",
    username: "JS",
    role: "administrador",
    profile: "World",
  },
  {
    id: 3,
    fullName: "1",
    email: "kambaiaalberto@gmail.com",
    username: "WS",
    role: "administrador",
    profile: "World",
  },
  {
    id: 4,
    fullName: "1",
    email: "kambaiaalberto@gmail.com",
    username: "JF",
    role: "administrador",
    profile: "World",
  },
  {
    id: 5,
    fullName: "1",
    email: "kambaiaalberto@gmail.com",
    username: "DE",
    role: "administrador",
    profile: "World",
  },
  {
    id: 6,
    fullName: "1",
    email: "kambaiaalberto@gmail.com",
    username: "DQ",
    role: "administrador",
    profile: "World",
  },
  {
    id: 7,
    fullName: "1",
    email: "kambaiaalberto@gmail.com",
    username: "KA",
    role: "administrador",
    profile: "World",
  },
  {
    id: 8,
    fullName: "1",
    email: "kambaiaalberto@gmail.com",
    username: "JS",
    role: "administrador",
    profile: "World",
  },
  {
    id: 9,
    fullName: "1",
    email: "kambaiaalberto@gmail.com",
    username: "WS",
    role: "leitor",
    profile: "World",
  },
  {
    id: 10,
    fullName: "1",
    email: "kambaiaalberto@gmail.com",
    username: "JF",
    role: "leitor",
    profile: "World",
  },
  {
    id: 11,
    fullName: "1",
    email: "kambaiaalberto@gmail.com",
    username: "DE",
    role: "leitor",
    profile: "World",
  },
  {
    id: 12,
    fullName: "1",
    email: "helcioandre@gmail.com",
    username: "HA",
    role: "leitor",
    profile: "World",
  },
  {
    id: 13,
    fullName: "1",
    email: "mariaalberto@gmail.com",
    username: "MA",
    role: "leitor",
    profile: "World",
  },
  {
    id: 14,
    fullName: "1",
    email: "paulofrancisco@gmail.com",
    username: "JS",
    role: "leitor",
    profile: "World",
  },
  {
    id: 15,
    fullName: "1",
    email: "darioantorio@gmail.com",
    username: "DA",
    role: "leitor",
    profile: "World",
  },
  {
    id: 16,
    fullName: "1",
    email: "delfinasalango@gmail.com",
    username: "DS",
    role: "leitor",
    profile: "World",
  },
  {
    id: 17,
    fullName: "1",
    email: "petelson@gmail.com",
    username: "PA",
    role: "leitor",
    profile: "World",
  },
  {
    id: 18,
    fullName: "1",
    email: "soniafranciscotiananga@gmail.com",
    username: "ST",
    role: "leitor",
    profile: "World",
  },
];

export const getLastSlash = (page: string) => {
  return /[^/]*$/.exec(page)![0];
};
