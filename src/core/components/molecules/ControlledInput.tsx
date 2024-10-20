import {
  AlertCircleIcon,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
} from '@gluestack-ui/themed'
import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form'

type ControlledInputProps<T extends FieldValues> = {
  name: string
  label?: string
  control: Control<T>
  error?: FieldError
  rules?:
    | Omit<
        RegisterOptions<FieldValues>,
        'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
      >
    | undefined
  placeholder?: string
}

const ControlledInput = <T extends FieldValues>({
  name,
  label,
  control,
  error,
  rules,
  placeholder,
}: ControlledInputProps<T>) => {
  return (
    <FormControl isRequired isInvalid={!!error} mb="$4">
      <FormControlLabel mb="$1">
        <FormControlLabelText>{label}</FormControlLabelText>
      </FormControlLabel>
      <Controller
        control={control as Control<FieldValues>}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input isRequired>
            <InputField
              type="text"
              placeholder={placeholder}
              value={value?.toString()}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          </Input>
        )}
        name={name}
      />
      <FormControlError>
        <FormControlErrorIcon as={AlertCircleIcon} />
        <FormControlErrorText>{error?.message}</FormControlErrorText>
      </FormControlError>
    </FormControl>
  )
}

export default ControlledInput
