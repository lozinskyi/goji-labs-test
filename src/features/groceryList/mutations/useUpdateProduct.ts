import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateProduct } from '../api'

const useUpdateProduct = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
    },
  })
}

export default useUpdateProduct
