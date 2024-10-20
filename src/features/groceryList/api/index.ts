import { Product } from "~/types/product"

export const getProducts = async () => {
  const response = await fetch('http://localhost:3000/products')
  return response.json()
}

export const addProduct = async (product: Omit<Product, 'id' | 'isChecked'>) => {
  await fetch('http://localhost:3000/products', {
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
  await fetch(`http://localhost:3000/products/${product.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  })
}

export const deleteProduct = async (id: string) => {
  await fetch(`http://localhost:3000/products/${id}`, {
    method: 'DELETE',
  })
}