import { ReactElement } from "react";
import { useForm, Controller, ControllerProps } from "react-hook-form";

type controllerProps = ControllerProps & {
  render?: any;
};

const Input = (props: any): ReactElement<HTMLInputElement> => (
  <input {...props} />
);

const useControlledInput = () => {
  const {
    control,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm();
  return {
    ControlledInput: ({ name, rules, ...rest }: controllerProps) => (
      <Controller
        name={name}
        rules={rules}
        control={control}
        render={({ field: { onChange, value, ...restFieldState } }) => (
          <Input
            onChange={onchange}
            value={value}
            {...rest}
            {...restFieldState}
          />
        )}
      />
    ),
    errors,
    setValue,
    handleSubmit,
  };
};

export default useControlledInput;
