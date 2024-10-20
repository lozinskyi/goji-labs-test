import { Box, Button, ButtonText, FormControl, FormControlLabel, FormControlLabelText, Input, InputField, Text } from "@gluestack-ui/themed"
import { FC } from "react"
import { Controller, useForm } from "react-hook-form"
import { Product } from "~/types/product"

type ProductFormProps = {
  onSubmit: (data: Omit<Product, 'id' | 'isChecked'>) => void,
  submitButtonText?: string,
  defaultValues?: Omit<Product, 'id' | 'isChecked'>,
}

const ProductForm: FC<ProductFormProps> = ({
  onSubmit,
  submitButtonText = 'Submit',
  defaultValues,
}) => {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<Product, 'id' | 'isChecked'>>({
    defaultValues,
    shouldUnregister: true,
  })

  return (
    <Box>
      <FormControl isRequired mb="$4">
        <FormControlLabel mb="$1">
          <FormControlLabelText>Name</FormControlLabelText>
        </FormControlLabel>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input isRequired>
              <InputField
                type="text"
                placeholder="Name"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            </Input>
          )}
          name="name"
        />
        {errors.name && <Text>This is required.</Text>}
        <FormControlLabel mb="$1" mt="$2">
          <FormControlLabelText>Amount</FormControlLabelText>
        </FormControlLabel>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input isRequired>
              <InputField
                type="text"
                placeholder="0"
                value={value?.toString()}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            </Input>
          )}
          name="amount"
        />
        {errors.amount && <Text>This is required.</Text>}
      </FormControl>
      <Button onPress={handleSubmit(onSubmit)}>
        <ButtonText>
          {submitButtonText}
        </ButtonText>
      </Button>
    </Box>
  )
}

export default ProductForm