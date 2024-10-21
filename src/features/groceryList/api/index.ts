import { currentEnvConfig } from '~/core/env'
import { PRODUCTS_API_URL } from '~/core/env/constants'
import { Product } from '~/types/product'

export const getProducts = async () => {
  const response = await fetch(`${currentEnvConfig[PRODUCTS_API_URL]}`)
  return response.json()
}

export const addProduct = async (
  product: Omit<Product, 'id' | 'isChecked'>,
) => {
  await fetch(`${currentEnvConfig[PRODUCTS_API_URL]}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: Date.now().toString(),
      isChecked: false,
      ...product,
    }),
  })
}

export const updateProduct = async (product: Product) => {
  await fetch(`${currentEnvConfig[PRODUCTS_API_URL]}/${product.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  })
}

export const deleteProduct = async (id: string) => {
  await fetch(`${currentEnvConfig[PRODUCTS_API_URL]}/${id}`, {
    method: 'DELETE',
  })
}
