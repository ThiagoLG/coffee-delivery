export interface IProduct {
  id: number
  name: string
  categories: string[]
  description: string
  price: number
  imageUrl: string
  availableAmount: number
  additionalInfos: string[]
  discountPercent: number
}
