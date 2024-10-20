import {
  Box,
  Button,
  ButtonGroup,
  ButtonIcon,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  CheckIcon,
  EditIcon,
  TrashIcon,
} from '@gluestack-ui/themed'
import { FC, useCallback, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Product } from '~/types/product'
import { EditProductModal } from '../organisms'

type ListItemProps = {
  item: Product
  onPressDeleteItem: (id: string) => void
  onPressUpdateItem: (item: Product) => void
}

const ListItem: FC<ListItemProps> = ({
  item,
  onPressDeleteItem,
  onPressUpdateItem,
}) => {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false)

  const handleEditModalClose = useCallback(() => {
    setIsEditModalVisible(false)
  }, [])

  const handleEditModalOpen = useCallback(() => {
    setIsEditModalVisible(true)
  }, [])

  const handlePressCheckbox = useCallback(() => {
    onPressUpdateItem({
      ...item,
      isChecked: !item.isChecked,
    })
  }, [item, onPressUpdateItem])

  return (
    <Box p="$4" style={styles.container}>
      <Checkbox
        value="item"
        isChecked={item.isChecked}
        onPress={handlePressCheckbox}
      >
        <CheckboxIndicator mr="$2">
          <CheckboxIcon>
            <CheckIcon />
          </CheckboxIcon>
        </CheckboxIndicator>
        <CheckboxLabel
          textDecorationLine={item.isChecked ? 'line-through' : undefined}
        >
          {item.name} - {item.amount}
        </CheckboxLabel>
      </Checkbox>
      <ButtonGroup>
        <Button
          size="md"
          action="secondary"
          variant="outline"
          onPress={handleEditModalOpen}
        >
          <ButtonIcon as={EditIcon} />
        </Button>
        <Button
          size="md"
          action="negative"
          variant="outline"
          onPress={() => onPressDeleteItem(item.id)}
        >
          <ButtonIcon as={TrashIcon} />
        </Button>
      </ButtonGroup>
      <EditProductModal
        isOpen={isEditModalVisible}
        onClose={handleEditModalClose}
        editItem={onPressUpdateItem}
        item={item}
      />
    </Box>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default ListItem
