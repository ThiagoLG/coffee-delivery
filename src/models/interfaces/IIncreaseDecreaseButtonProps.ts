import { ChangeEvent } from 'react'

export interface IIncreaseDecreaseButtonProps {
  amountToBuy: number
  decreaseAmountAction: () => void
  increaseAmountAction: () => void
  changeProductAmountAction: (e: ChangeEvent<HTMLInputElement>) => void
}
