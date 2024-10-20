import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteProduct } from '../api'

const useDeleteProduct = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
    },
    onError: error => {
      console.log(error)
    },
  })
}

export default useDeleteProduct
