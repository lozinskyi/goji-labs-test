import { FC, useCallback, useState } from "react"
import { ListItem } from "../molecules"
import { AddIcon, Button, ButtonIcon, ButtonText, Divider, FlatList } from "@gluestack-ui/themed"
import AddProductModal from "./AddProductModal"
import { Product } from "~/types/product"

type ListProps = {
  data: Product[],
  onPressAddItem: (item: Omit<Product, 'id' | 'isChecked'>) => void,
  onPressDeleteItem: (id: string) => void,
  onPressUpdateItem: (item: Product) => void,
}

const List: FC<ListProps> = ({
  data,
  onPressAddItem,
  onPressDeleteItem,
  onPressUpdateItem,
}) => {

  const [isAddProductModalVisible, setIsAddProductModalVisible] = useState(false)

  const handleAddProductModalClose = useCallback(() => {
    setIsAddProductModalVisible(false)
  }, [])

  const handleAddProductModalOpen = useCallback(() => {
    setIsAddProductModalVisible(true)
  }, [])

  const _renderItem = ({ item }: { item: unknown }) => {
    return (
      <ListItem
        item={item as Product}
        onPressDeleteItem={onPressDeleteItem}
        onPressUpdateItem={onPressUpdateItem}
      />
    )
  }

  return (
    <>
      <FlatList
        data={data}
        renderItem={_renderItem}
        ListHeaderComponent={
          <Button onPress={handleAddProductModalOpen}>
            <ButtonText>
              Add Item
            </ButtonText>
            <ButtonIcon as={AddIcon} />
          </Button>
        }
        ItemSeparatorComponent={() => <Divider />}
      />
      <AddProductModal
        isOpen={isAddProductModalVisible}
        onClose={handleAddProductModalClose}
        addItem={onPressAddItem}
      />
    </>
  )
}

export default List