import * as React from "react";
import {
  CustomButtom,
  CustomPaper,
  InputGroup,
} from "../../../../styles/geralStyles";
import { formInputs } from "./inputs";
import { IFormRendererFields, TObject } from "../../../../types/interface/App";
import { useFormik } from "formik";
import { Button } from "../../../shared/Botton";
import { BodyInput } from "../../../modal/ModalRegisterUser/styles";
import parseResponseError from "../../../../utils/parseResponseError";
import { toast } from "react-toastify";
import { useCreateUserMutation } from "../../../../services/query/useUsers/create";
import { putInSelect } from "../../../../utils/constants/arraySelect";
import { TRegisterUser } from "../../../../types/interface/UserInterface";
import { setVisibleModal } from "../../../../store/modal/actions";
import { useAppDispatch } from "../../../../store/hooks/useAppHooksRedux";
import { useHistory } from "react-router-dom";
import { GET_USER_FORM_KEY } from "../../../../utils/appFielsConstant";
import { useUpdateUserMutation } from "../../../../services/query/useUsers/update";

type formUserProps = {
  dataFormUser?: TObject;
  permission: TObject[];
  actionModal?: string;
};
export const UserForm = ({
  permission,
  dataFormUser,
  actionModal,
}: formUserProps) => {
  const [loadingUser, setLoadingUser] = React.useState(false);
  const [initialValues, setInitialValues] = React.useState<TObject>({});

  const dispatch = useAppDispatch();
  const history = useHistory();
  const { mutate: createUser } = useCreateUserMutation();
  const { mutate: updateUser } = useUpdateUserMutation();

  const handleClose = () => {
    history.push("/admin/book-register/user");
    dispatch(
      setVisibleModal({
        dataModal: { shshhsh: 11 },
        isOpen: false,
        modalType: "",
      })
    );
  };

  const saveEdition = async (formValues: any): Promise<void> => {
    console.log("JAJAJJAJAJAJHSHSSHSSISSSG");
    const dataForm: TRegisterUser = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      permissionId: formValues.permission.value,
      phoneNumber: formValues.phoneNumber,
      email: formValues.email,
      password: formValues.password,
      active: 1,
      userName: generateUserName(formValues.firstName, formValues.lastName),
    };

    setLoadingUser(true);
    try {
      if (actionModal === "edit") {
        console.log(dataForm);
        updateUser({
          variables: { input: dataForm, userId: dataFormUser?.id },
        });
      } else {
        createUser({ variables: { input: dataForm } });
      }
    } catch (error) {
      toast.error(parseResponseError(error));
    } finally {
      setLoadingUser(false);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: saveEdition,
  });

  const { inputForm } = formInputs({
    disabled: true,
    formik,
  });
  const getInitialValues = (dataForm: any): void => {
    formik.setFieldValue("email", dataForm.email);
    formik.setFieldValue("phoneNumber", dataForm.phoneNumber);
    formik.setFieldValue("password", dataForm.password);
    formik.setFieldValue("firstName", dataForm.firstName);
    formik.setFieldValue("lastName", dataForm.lastName);
    formik.setFieldValue("email", dataForm.email);
    formik.setFieldValue("permission", {label: dataForm.type, value: dataForm.permissionId,});
  };

  React.useEffect(() => {
    if (dataFormUser && actionModal === "edit") getInitialValues(dataFormUser);
  }, [dataFormUser]);

  const handleChange = (event: React.ChangeEvent<any>, id: string): void => {
    formik.setFieldTouched(id);
    const eventObject = event?.target
      ? event
      : { target: { id, name: id, value: event } };
    formik.handleChange(eventObject);
  };
  const generateUserName = (first: string, lastName: string): string => {
    return `${first[0].toUpperCase()} ${lastName[0].toUpperCase()}`;
  };

  const permissionData = putInSelect(permission);
  const removedInput = (
    field: TObject[],
    disibleColumn: Array<string>
  ): any => {
    if (actionModal === "edit")
      return field.filter((item: TObject) => !disibleColumn.includes(item.key));
    return field;
  };

  const renderFormItems = (
    field: TObject,
    key: string
  ): React.ReactElement | null => {
    const { id, FormComponent, componentProps } = field;
    let error = (formik.touched[id] && (formik.errors[id] as string)) || "";
    if (typeof error === "object") error = "";
    return (
      <FormComponent
        key={key}
        id={id}
        label={field.label}
        value={formik.values[key]}
        onChange={(event: React.ChangeEvent<any>) => handleChange(event, key)}
        optionData={field.type === "select" ? permissionData! : null}
        name={key}
        formik={formik}
        {...componentProps}
        size="small"
        fullWidth
        type={field.type}
        placement="top"
        tips={field.label}
      />
    );
  };

  const renderForms = (inputs: IFormRendererFields[]): React.ReactElement => {
    inputs = removedInput(inputs, [GET_USER_FORM_KEY.PASSWORD]);
    return (
      <form onSubmit={formik.handleSubmit}>
        <CustomPaper>
          <BodyInput>
            {inputs.map((field) => {
              return (
                <InputGroup medium={field?.widthSize}>
                  {renderFormItems(field, field.key)}
                </InputGroup>
              );
            })}
          </BodyInput>

          <CustomButtom>
            <Button type="submit" title="Salvar" showIcon={undefined} />
          </CustomButtom>
        </CustomPaper>
      </form>
    );
  };

  return <>{renderForms(inputForm)}</>;
};
