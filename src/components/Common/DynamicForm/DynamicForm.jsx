import FormGrid from "../FormGrid/FormGrid";
import Input from "../Input/Input";
import Select from "../Select/Select";

function DynamicForm({
  fields = [],
  values = {},
  onChange,
}) {
  return (
    <FormGrid>

      {fields.map((field) => {

        switch (field.component) {

          case "select":
            return (
              <Select
                key={field.name}
                label={field.label}
                name={field.name}
                value={values[field.name]}
                options={field.options}
                onChange={onChange}
              />
            );

          default:
            return (
              <Input
                key={field.name}
                label={field.label}
                name={field.name}
                type={field.type || "text"}
                placeholder={field.placeholder}
                value={values[field.name]}
                onChange={onChange}
              />
            );

        }

      })}

    </FormGrid>
  );
}

export default DynamicForm;