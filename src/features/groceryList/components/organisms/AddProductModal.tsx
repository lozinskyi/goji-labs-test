import { FC, useCallback } from 'react'
import { Product } from '~/types/product'
import { ProductForm } from '../molecules'
import { Modal } from '~/core/components/molecules'

type AddProductModalProps = {
  isOpen: boolean
  onClose: () => void
  addItem: (item: Omit<Product, 'id' | 'isChecked'>) => void
}

const AddProductModal: FC<AddProductModalProps> = ({
  isOpen,
  onClose,
  addItem,
}) => {
  const onSubmit = useCallback(
    (data: Omit<Product, 'id' | 'isChecked'>) => {
      addItem(data)
      onClose()
    },
    [addItem, onClose],
  )

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Product">
      <ProductForm onSubmit={onSubmit} submitButtonText="Add" />
    </Modal>
  )
}

export default AddProductModal
