import { Box, Button, ButtonText } from '@gluestack-ui/themed'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { ControlledInput } from '~/core/components/molecules'
import { Product } from '~/types/product'

type FormValues = Omit<Product, 'id' | 'isChecked'>

type ProductFormProps = {
  onSubmit: (data: FormValues) => void
  submitButtonText?: string
  defaultValues?: FormValues
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
  } = useForm<FormValues>({
    defaultValues: {
      amount: 0,
      ...defaultValues,
    },
    shouldUnregister: true,
  })

  return (
    <Box>
      <ControlledInput<FormValues>
        name="name"
        label="Name"
        placeholder="Enter product name"
        control={control}
        error={errors.name}
        rules={{
          required: 'Name is required.',
        }}
      />
      <ControlledInput<FormValues>
        name="amount"
        label="Amount"
        placeholder="0"
        control={control}
        error={errors.amount}
        rules={{
          required: 'Amount is required.',
          pattern: {
            value: /^[0-9]+$/,
            message: 'Amount must be a number.',
          },
        }}
      />
      <Button onPress={handleSubmit(onSubmit)}>
        <ButtonText>{submitButtonText}</ButtonText>
      </Button>
    </Box>
  )
}

export default ProductForm
