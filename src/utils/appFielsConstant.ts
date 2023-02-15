
export const INPUT_SELECT = 'select';
export const INPUT_MULTI = 'multi';

export const INPUT_BOOLEAN = 'boolean';
export const INPUT_DATE = 'date';
export const INPUT_TIME = 'time';
export const YEAR_SELECT = 'year-select';
export const INPUT_NUMBER = 'number';
export const INPUT_EMAIL = 'email';
export const INPUT_TEXT = 'text';
export const INPUT_PASSWORD = 'password';
export const INPUT_TEXTAREA = 'textarea';
export const INPUT_PICKETAGE = 'picketage';

export const CHECKED = 'checked';

export const GET_USER_FORM_KEY = {
    ID: 'id',
    USER_NAME: 'userName',
    FULL_NAME: 'fullName',
    FIRST_NAME: 'firstName',
    LAST_NAME : 'lastName',
    EMAIL: 'email',
    PASSWORD: 'password',
    PHONE_NUMER: 'phoneNumber',
    PERMISSION: 'permission',
    ACTIVE: 'active',
    FAVORITE_BOOK: 'favoriteBook',
    PROFILE: 'profile',
    NOME_PROFILE: 'nameProfile',
    CREATE_AT: 'createdAt',
    UPDATE_AT: 'updatedAt',
  };

export const GET_USER_FORM_LABEL = {
  [GET_USER_FORM_KEY.ID]: 'ID',
  [GET_USER_FORM_KEY.FIRST_NAME]: 'Primeiro Naome',
  [GET_USER_FORM_KEY.LAST_NAME]: 'Último Nome',
  [GET_USER_FORM_KEY.EMAIL]: 'E-mail',
  [GET_USER_FORM_KEY.PASSWORD]: 'Palavra Pass',
  [GET_USER_FORM_KEY.PHONE_NUMER]: 'Número de Telefone',
  [GET_USER_FORM_KEY.PERMISSION]: 'Nivel de Acesso',
  [GET_USER_FORM_KEY.ACTIVE]: 'Status',
  [GET_USER_FORM_KEY.FAVORITE_BOOK]: 'Livros Favoritos',
  [GET_USER_FORM_KEY.PROFILE]: 'Foto de Perfil',
  [GET_USER_FORM_KEY.NOME_PROFILE]: 'Nome do arquivo',
  [GET_USER_FORM_KEY.CREATE_AT]: 'Data de Criação',
  [GET_USER_FORM_KEY.UPDATE_AT]: 'Data de Actualização',
};


export const GET_BOOK_FORM_KEY = {
  ID: 'id',
  COVER: 'cover',
  COVER_NOME: 'nameCover',
  TITLE: 'title',
  PUBLISH_LOCATION: 'publishLocation',
  ISSUE_DATA : 'issueDate',
  PUBLISHING_COMPANY: 'publishingCompany',
  LANGUAGE: 'language',
  BOOK_CODE: 'bookCode',
  BOX_SIZE: 'boxSize',
  TEXT_READING: 'textReading',
  NUMBER_OF_PAGE: 'numberOfpage',
  ACTIVE: 'active',
  YEAR_OF_LAUNCH: 'yearOfLaunch',
  DOCUMENT: 'document',
  DESCRIPTION: 'description',
  AUTHOR_ID: 'authorId',
  CATEGORY_ID: 'categoryId',
  REPRESENTATIVE_USER_ID: 'representativeUserId',
  CREATE_AT: 'createdAt',
  UPDATE_AT: 'updatedAt',
};


export const GET_BOOK_FORM_LABEL = {
  [GET_BOOK_FORM_KEY.ID]: 'ID',
  [GET_BOOK_FORM_KEY.TITLE]: 'Title do livro',
  [GET_BOOK_FORM_KEY.COVER]: 'Capa do livro',
  [GET_BOOK_FORM_KEY.NUMBER_OF_PAGE]: 'Número de paginas do livro',
  [GET_BOOK_FORM_KEY.ISSUE_DATA]: 'Data de lançamentoi',
  [GET_BOOK_FORM_KEY.LANGUAGE]: 'Linguagem do Livro',
  [GET_BOOK_FORM_KEY.PUBLISH_LOCATION]: 'Local onde foi publicando',
  [GET_BOOK_FORM_KEY.PUBLISHING_COMPANY]: 'Nome da Editora do livro',
  [GET_BOOK_FORM_KEY.DOCUMENT]: 'Faça aqui o upload do livro',
  [GET_BOOK_FORM_KEY.AUTHOR_ID]: 'Seleciona o ',
  [GET_BOOK_FORM_KEY.DESCRIPTION]: 'Descrição do livro'
  
};


export const GET_AUTHOR_FORM_KEY = {
  ID: 'id',
  AUTHOR_NAME: 'authorName',
  BIRTH_DATE: 'birthDate',
  FOLLOWER_ID: 'followerId',
  SOCIAL_MEDIA_ID : 'socialMediaId',
  BIOGRAPHI: 'biography',
  AUTHOR_PROFILE: 'authorProfile',
  NAME_PROFILE: 'nameProfile',
  ACTIVE: 'active',
  CREATE_AT: 'createdAt',
  UPDATE_AT: 'updatedAt',
};


  export const GET_AUTHOR_FORM_LABEL = {
    [GET_AUTHOR_FORM_KEY.ID]: 'ID',
    [GET_AUTHOR_FORM_KEY.AUTHOR_NAME]: 'Nome do autor',
    [GET_AUTHOR_FORM_KEY.BIRTH_DATE]: 'Data de nascimento',
    [GET_AUTHOR_FORM_KEY.AUTHOR_PROFILE]: 'Foto de perfil do autor',
    [GET_AUTHOR_FORM_KEY.BIOGRAPHI]: 'Biografia do autor',
    [GET_AUTHOR_FORM_KEY.SOCIAL_MEDIA_ID]: 'Redes do autor',
    
  };


  export const GET_CATEGORY_FORM_KEY = {
    ID: 'id',
    CATEGORY: 'category',
  };
  
  export const GET_CATEGORY_FORM_LABEL = {
    [GET_USER_FORM_KEY.ID]: 'ID',
    [GET_CATEGORY_FORM_KEY.CATEGORY]: 'Nome da Categoria',
  };