import * as React from "react";
import { formInputs } from "./inputs";
import { IFormRendererFields, TObject } from "../../../../types/interface/App";
import { useFormik } from "formik";
import { selectData } from "../../../../utils/data/menu/selectData";
import { CustomPaper, InputGroup } from "../../../../styles/geralStyles";
import { Button } from "../../../shared/Botton";

export const BookForm = (data?: TObject) => {
  
  const saveEdition = async (formValues: TObject): Promise<void> => {
    console.log(formValues);
    try {
    } catch (err: any) {}
  };

  const [initialValues, setInitialValues] = React.useState<TObject>({});

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: saveEdition,
  });

  const { inputForm } = formInputs({
    disabled: true,
    formik,
  });

  const handleChange = (event: React.ChangeEvent<any>, id: string): void => {
    
    formik.setFieldTouched(id);
    const eventObject = event?.target
      ? event
      : { target: { id, name: id, value: event } };
    formik.handleChange(eventObject);
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
        value={formik.values[id]}
        onChange={(event: React.ChangeEvent<any>) => handleChange(event, key)}
        optionData={field.type === "select" ? selectData[0].boardColor : null}
        name={key}
        formik={formik}
        {...componentProps}
        placeholder={field.label}
        size="small"
        fullWidth
        rows={field.rows}
        type={field.type}
        multiline={field.multiline}
        placement="top"
        fileType={field.fileType}
        tips={field.label}
      />
    );
  };

  const renderForms = (inputs: IFormRendererFields[]): React.ReactElement => {
    return (
      <form onSubmit={formik.handleSubmit}>
        <CustomPaper>
          {inputs.map((field) => (
            <InputGroup>{renderFormItems(field, field.key)}</InputGroup>
          ))}

          <Button title="Salvar" showIcon={undefined} />
        </CustomPaper>
      </form>
    );
  };

  return <>{renderForms(inputForm)}</>;
};
