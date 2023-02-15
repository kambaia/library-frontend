
export interface IBook{
    id: number;
    cover?:string;
    nameCover?: string;
    title: string;
    publishLocation: string;
    issueDate: string;
    PublishingCompany: string
    language: string
    bookCode: string
    boxSize: number;
    textReading: boolean;
    description: boolean;
    numberOfpage: number;
    active: boolean;
    yearOfLaunch: string;
    createdAt: Date;
    updatedAt: Date;
    categoryId: number;
    documentId: number,
    id_authorId: number;
    representativeUserId: number;
}


