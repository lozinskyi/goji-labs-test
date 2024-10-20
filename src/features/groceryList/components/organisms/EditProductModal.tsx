import { FC, useCallback } from 'react'
import { Modal } from '~/core/components/molecules'
import { Product } from '~/types/product'
import { ProductForm } from '../molecules'

type EditProductModalProps = {
  isOpen: boolean
  onClose: () => void
  editItem: (item: Product) => void
  item: Product
}

const EditProductModal: FC<EditProductModalProps> = ({
  isOpen,
  onClose,
  editItem,
  item,
}) => {
  const onSubmit = useCallback(
    (data: Omit<Product, 'id' | 'isChecked'>) => {
      editItem({
        ...item,
        ...data,
      })
      onClose()
    },
    [editItem, onClose, item],
  )

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Product">
      <ProductForm
        onSubmit={onSubmit}
        submitButtonText="Save"
        defaultValues={{
          name: item.name,
          amount: item.amount,
        }}
      />
    </Modal>
  )
}

export default EditProductModal
