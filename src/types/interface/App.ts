import { FormikProps } from 'formik';
import { JSXElementConstructor, ReactElement } from "react";
import { SortOrder } from 'react-data-table-component';
import { QueryKey } from 'react-query';
import { OrderField } from '../../utils/app';

export interface IfilterData {
  limit: number;
  page: number;
}
export interface IAuthLogin {
  email: string;
  password: string;
}

export interface PaginatorInfoType {
  [key: string]: unknown;
}


export type QueryOptionsType = {
  page?: number;
  text?: string;
  limit?: number;
  orderBy?: OrderField;
  sortedBy?: SortOrder;
};


export type QueryParamsType = {
  queryKey: QueryKey;
  pageParam?: string;
};

export declare type PaginatorInfo = {
	count: number;
	currentPage:number;
	hasMorePages: boolean;
	lastPage:number;
	perPage:number;
	total:number;
};


export type Tabs = { label: string; numberTab: number };
export type  components= {component: ReactElement, idComponent: number }


export interface TTabPanelProps {
    tabs: Array<Tabs>;
    components: Array<components>
}


export type TObject<T = any> = {
  [key: string]: T;
};
export interface TReviewDecisionFormInputs {
  inputForm: IFormRendererFields[];
}

interface IFormRendererProps {
  fields: IFormRendererFields[];
  formik: FormikProps<TObject>;
  render?: (field: IFormRendererFields) => ReactElement;
  isPreview?: boolean;
}

export interface IFormRendererFields {
  key: string;
  label?: string;
  type?: string;
  rows?: number;
  multiline?:string;
  widthSize?:string;
  fileType?:string;
  validationType: any;
  FormComponent: JSXElementConstructor<any>;
  componentProps?: TObject;
  objectElements?: TObject;
  isVisible?: boolean;
  addColonToLabel?: boolean;
  selectLabelProps?: {
    value: string;
    values: string[];
    onChange: (value: string) => void;
  };
}

