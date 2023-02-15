import { FormikProps } from "formik";
import * as yup from "yup";
import {
  TObject,
  TReviewDecisionFormInputs,
} from "../../../../types/interface/App";
import {
  GET_USER_FORM_KEY,
  GET_USER_FORM_LABEL,
  INPUT_EMAIL,
  INPUT_PASSWORD,
  INPUT_SELECT,
  INPUT_TEXT,
} from "../../../../utils/appFielsConstant";
import { VTextField } from "../../../shared/FormGrid/VTextField";
import { VTextSelect } from "../../../shared/FormGrid/VTextSelect";

export const formInputs = ({
  disabled,
}: {
  disabled: boolean | undefined;
  formik: FormikProps<TObject>;
}): TReviewDecisionFormInputs => {
  return {
    inputForm: [
      {
        key: GET_USER_FORM_KEY.FIRST_NAME,
        label: GET_USER_FORM_LABEL[GET_USER_FORM_KEY.FIRST_NAME],
        type: INPUT_TEXT,
        FormComponent: VTextField,
        validationType: yup.string,
        widthSize: 'medium',
        isVisible: true
      },
      {
        key: GET_USER_FORM_KEY.LAST_NAME,
        label: GET_USER_FORM_LABEL[GET_USER_FORM_KEY.LAST_NAME],
        type: INPUT_TEXT,
        FormComponent: VTextField,
        validationType: yup.string,
        widthSize: 'medium',
        isVisible: true

      },
      {
        key: GET_USER_FORM_KEY.EMAIL,
        label: GET_USER_FORM_LABEL[GET_USER_FORM_KEY.EMAIL],
        type: INPUT_EMAIL,
        FormComponent: VTextField,
        validationType: yup.string,
        isVisible: true
      },
      {
        key: GET_USER_FORM_KEY.PASSWORD,
        label: GET_USER_FORM_LABEL[GET_USER_FORM_KEY.PASSWORD],
        type: INPUT_PASSWORD,
        FormComponent: VTextField,
        validationType: yup.string,
        isVisible: true
      },
      {
        key: GET_USER_FORM_KEY.PHONE_NUMER,
        label: GET_USER_FORM_LABEL[GET_USER_FORM_KEY.PHONE_NUMER],
        type: INPUT_TEXT,
        FormComponent: VTextField,
        validationType: yup.string,
        isVisible: true
      },
      {
        key: GET_USER_FORM_KEY.PERMISSION,
        label: GET_USER_FORM_LABEL[GET_USER_FORM_KEY.PERMISSION],
        type: INPUT_SELECT,
        FormComponent: VTextSelect,
        validationType: yup.string,
        isVisible: true
      },
    ],
  };
};
