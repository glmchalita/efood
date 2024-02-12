import food from '../../../assets/food-1.png'
import { FoodContainer, FoodContent } from './styles'

export function FoodCard() {
  return (
    <FoodContainer>
      <FoodContent>
        <img src={food} alt="" />

        <div>
          <h3>Pizza Marguerita</h3>

          <p>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </p>

          <button>Adicionar ao carrinho</button>
        </div>
      </FoodContent>
    </FoodContainer>
  )
}
