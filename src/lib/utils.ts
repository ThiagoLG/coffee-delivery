import { IProduct } from '../models/interfaces/IProductItem'

/**
 * Formats a given price into a Brazilian currency string.
 * @param price - The price to be formatted.
 * @returns A string representing the Brazilian currency formatted price.
 */
export function formatCurrency(price: number) {
  if (!price || price <= 0) return 'R$ 0,00'
  return (price / 100).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

/**
 * Calculates the discounted price of a product and formats it as currency.
 * @param product - The product to calculate the discounted price for.
 * @returns The formatted discounted price of the product.
 */
export function calculateAndFormatDiscountedPrice(product: IProduct) {
  return formatCurrency(calculateDiscountedPrice(product))
}

/**
 * Calculates the discounted price for a given product.
 * If the product has no discount, the original price is returned.
 * @param product - The product object containing price and discountPercent properties.
 * @returns The discounted price of the product.
 */
export function calculateDiscountedPrice(product: IProduct) {
  if (!product.discountPercent) return product.price

  return (1 - product.discountPercent / 100) * product.price
}
