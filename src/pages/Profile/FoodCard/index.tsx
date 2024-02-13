import { ItemInput } from '../../Home'
import { FoodModal } from '../FoodModal'
import { FoodContainer, FoodContent } from './styles'

export function FoodCard({ item }: { item: ItemInput }) {
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
