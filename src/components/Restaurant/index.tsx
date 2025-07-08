import { Link } from 'react-router-dom'
import estrela from '../../assets/images/estrela.png'
import { Card, Description, Info, Tags, Title } from './styles'
import Tag from '../Tag'

type Props = {
  title: string
  score: string
  description: string
  image: string
  tags: string[]
}

const Restaurant = ({ title, score, description, image, tags }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Tags>
      {tags.map((tag) => (
        <li key={tag}>
          <Tag>{tag}</Tag>
        </li>
      ))}
    </Tags>
    <Info>
      <div>
        <Title>{title}</Title>
        <div>
          <Title>{score}</Title>
          <img src={estrela} />
        </div>
      </div>
      <Description>{description}</Description>
      <Link to="/restaurante">
        <div>
          <Tag size="big">Saiba mais</Tag>
        </div>
      </Link>
    </Info>
  </Card>
)

export default Restaurant
