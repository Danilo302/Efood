import { Cardapio } from '../../pages/Home'
import Food from '../Food'
import { List } from './styles'

type Props = {
  cardapio: Cardapio[]
}

const ListFoods = ({ cardapio }: Props) => {
  return (
    <>
      <section>
        <List className="container">
          {cardapio.map((food) => (
            <Food key={food.id} item={food} />
          ))}
        </List>
      </section>
    </>
  )
}

export default ListFoods
