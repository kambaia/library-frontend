import { FormikProps } from "formik";
import * as yup from "yup";
import {
  TObject,
  TReviewDecisionFormInputs,
} from "../../../../types/interface/App";
import {
  GET_BOOK_FORM_KEY,
  GET_BOOK_FORM_LABEL,
  INPUT_SELECT,
  INPUT_TEXT,
  INPUT_DATE
} from "../../../../utils/appFielsConstant";
import { VTextField } from "../../../shared/FormGrid/VTextField";
import { VTextSelect } from "../../../shared/FormGrid/VTextSelect";
import { VUplaoddFile } from "../../../shared/FormGrid/VUplaoddFile";

export const formInputs = ({
  disabled,
}: {
  disabled: boolean | undefined;
  formik: FormikProps<TObject>;
}): TReviewDecisionFormInputs => {
  return {
    inputForm: [
      {
        key: GET_BOOK_FORM_KEY.COVER,
        label: GET_BOOK_FORM_LABEL[GET_BOOK_FORM_KEY.COVER],
        type: INPUT_TEXT,
        FormComponent: VUplaoddFile,
        validationType: yup.string,
      },
      {
        key: GET_BOOK_FORM_KEY.TITLE,
        label: GET_BOOK_FORM_LABEL[GET_BOOK_FORM_KEY.TITLE],
        type: INPUT_TEXT,
        FormComponent: VTextField,
        validationType: yup.string,
      },
      {
        key: GET_BOOK_FORM_KEY.NUMBER_OF_PAGE,
        label: GET_BOOK_FORM_LABEL[GET_BOOK_FORM_KEY.NUMBER_OF_PAGE],
        type: INPUT_TEXT,
        FormComponent: VTextField,
        validationType: yup.string,
      },
      {
        key: GET_BOOK_FORM_KEY.PUBLISHING_COMPANY,
        label: GET_BOOK_FORM_LABEL[GET_BOOK_FORM_KEY.PUBLISHING_COMPANY],
        type: INPUT_TEXT,
        FormComponent: VTextField,
        validationType: yup.string,
      },
      {
        key: GET_BOOK_FORM_KEY.PUBLISH_LOCATION,
        label: GET_BOOK_FORM_LABEL[GET_BOOK_FORM_KEY.PUBLISH_LOCATION],
        type: INPUT_TEXT,
        FormComponent: VTextField,
        validationType: yup.string,
      },
      {
        key: GET_BOOK_FORM_KEY.LANGUAGE,
        label: GET_BOOK_FORM_LABEL[GET_BOOK_FORM_KEY.LANGUAGE],
        type: INPUT_TEXT,
        FormComponent: VTextField,
        validationType: yup.string,
      },
      {
        key: GET_BOOK_FORM_KEY.DESCRIPTION,
        label: GET_BOOK_FORM_LABEL[GET_BOOK_FORM_KEY.DESCRIPTION],
        type: INPUT_SELECT,
        FormComponent: VTextField,
        validationType: yup.string,
        rows: 5,
        multiline:'multiline'
        
      },
      {
        key: GET_BOOK_FORM_KEY.ISSUE_DATA,
        type: INPUT_DATE,
        FormComponent: VTextField,
        validationType: yup.string,
      },

      {
        key: GET_BOOK_FORM_KEY.DOCUMENT,
        label: GET_BOOK_FORM_LABEL[GET_BOOK_FORM_KEY.DOCUMENT],
        FormComponent: VUplaoddFile,
        fileType: 'doc',
        validationType: yup.string,
      },

      
    ],
  };
};
