import { ItemInput } from '../../../../store/sliceCart'
import { FoodModal } from '../FoodModal'
import { FoodContainer, FoodContent } from './styles'

interface FoodCardProps {
  item: ItemInput
}

export function FoodCard({ item }: FoodCardProps) {
  return (
    <FoodContainer>
      <FoodContent>
        <img src={item.foto} alt="" />

        <div>
          <h3>{item.nome}</h3>

          <p>{item.descricao}</p>
        </div>
      </FoodContent>

      <FoodModal item={item} />
    </FoodContainer>
  )
}
