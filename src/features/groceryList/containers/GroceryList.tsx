import { FC, useCallback } from 'react'
import { View } from '@gluestack-ui/themed'
import { List } from '../components/organisms'
import { useGetProducts } from '../queries'
import { useAddProduct, useDeleteProduct, useUpdateProduct } from '../mutations'
import { Product } from '~/types/product'

const GroceryList: FC = () => {
  const { data } = useGetProducts()

  const { mutate: addProduct } = useAddProduct()

  const { mutate: deleteProduct } = useDeleteProduct()

  const { mutate: updateProduct } = useUpdateProduct()

  const handleAddItem = useCallback(
    (item: Omit<Product, 'id' | 'isChecked'>) => {
      addProduct(item)
    },
    [addProduct],
  )

  const handleDeleteItem = useCallback(
    (id: string) => {
      deleteProduct(id)
    },
    [deleteProduct],
  )

  const handleUpdateItem = useCallback(
    (item: Product) => {
      updateProduct(item)
    },
    [updateProduct],
  )

  return (
    <View>
      <List
        data={data}
        onPressAddItem={handleAddItem}
        onPressDeleteItem={handleDeleteItem}
        onPressUpdateItem={handleUpdateItem}
      />
    </View>
  )
}

export default GroceryList
