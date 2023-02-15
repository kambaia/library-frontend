import { FormikProps } from "formik";
import * as yup from "yup";
import {
  TObject,
  TReviewDecisionFormInputs,
} from "../../../../types/interface/App";
import {
  GET_AUTHOR_FORM_KEY,
  GET_AUTHOR_FORM_LABEL,
  INPUT_EMAIL,
  INPUT_SELECT,
  INPUT_TEXT,
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
        key: GET_AUTHOR_FORM_KEY.AUTHOR_PROFILE,
        label: GET_AUTHOR_FORM_LABEL[GET_AUTHOR_FORM_KEY.AUTHOR_PROFILE],
        type: INPUT_TEXT,
        isVisible: false,
        FormComponent: VUplaoddFile,
        validationType: yup.string,
      },
      {
        key: GET_AUTHOR_FORM_KEY.AUTHOR_NAME,
        label: GET_AUTHOR_FORM_LABEL[GET_AUTHOR_FORM_KEY.AUTHOR_NAME],
        type: INPUT_TEXT,
        isVisible: false,
        FormComponent: VTextField,
        validationType: yup.string,
      },
      {
        key: GET_AUTHOR_FORM_KEY.BIRTH_DATE,
        label: GET_AUTHOR_FORM_LABEL[GET_AUTHOR_FORM_KEY.BIRTH_DATE],
        type: INPUT_TEXT,
        isVisible: false,
        FormComponent: VTextField,
        validationType: yup.string,
      },
      {
        key: GET_AUTHOR_FORM_KEY.BIOGRAPHI,
        label: GET_AUTHOR_FORM_LABEL[GET_AUTHOR_FORM_KEY.BIOGRAPHI],
        type: INPUT_EMAIL,
        isVisible: false,
        FormComponent: VTextField,
        validationType: yup.string,
      },
      {
        key: GET_AUTHOR_FORM_KEY.SOCIAL_MEDIA_ID,
        label: GET_AUTHOR_FORM_LABEL[GET_AUTHOR_FORM_KEY.SOCIAL_MEDIA_ID],
        type: INPUT_SELECT,
        isVisible: false,
        FormComponent: VTextSelect,
        validationType: yup.string,
      }
    ],
  };
};
