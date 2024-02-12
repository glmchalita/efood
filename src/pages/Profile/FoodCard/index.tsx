import { ItemInput } from '../../Home'
import { FoodContainer, FoodContent } from './styles'

export function FoodCard({ item }: { item: ItemInput }) {
  return (
    <FoodContainer>
      <FoodContent>
        <img src={item.foto} alt="" />

        <div>
          <h3>{item.nome}</h3>

          <p>{item.descricao}</p>

          <button type="button">Adicionar ao carrinho</button>
        </div>
      </FoodContent>
    </FoodContainer>
  )
}
