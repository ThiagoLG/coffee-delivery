import { IIncreaseDecreaseButtonProps } from '../../models/interfaces/IIncreaseDecreaseButtonProps'
import { IncreaseDecreaseButtonContainer } from './styles'

export function IncreaseDecreaseButton(props: IIncreaseDecreaseButtonProps) {
  // const { addProductsToCart } = useContext(CartContext)
  return (
    <IncreaseDecreaseButtonContainer>
      <button onClick={props.decreaseAmountAction}>--</button>
      <input
        type="number"
        value={props.amountToBuy}
        onChange={props.changeProductAmountAction}
        required
      />
      <button onClick={props.increaseAmountAction}>+</button>
    </IncreaseDecreaseButtonContainer>
  )
}
