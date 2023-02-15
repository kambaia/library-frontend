import { FormikProps } from "formik";
import * as yup from "yup";
import {
  TObject,
  TReviewDecisionFormInputs,
} from "../../../../types/interface/App";
import {
  GET_CATEGORY_FORM_LABEL,
  GET_USER_FORM_KEY,
  GET_CATEGORY_FORM_KEY,
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
        label: GET_CATEGORY_FORM_LABEL[GET_CATEGORY_FORM_KEY.CATEGORY],
        type: INPUT_TEXT,
        FormComponent: VTextField,
        validationType: yup.string,
      },
    ],
  };
};
