import { Link } from 'react-router-dom'

import estrela from '../../assets/images/estrela.png'

import Tag from '../Tag'

import { Card, Description, Info, Tags, Title } from './styles'

type Props = {
  title: string
  score: number
  description: string
  image: string
  tags: string[]
  id: number
}

const Restaurant = ({ title, score, description, image, tags, id }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 260) {
      return descricao.slice(0, 260) + '...'
    }
    return descricao
  }

  return (
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
        <Description>{getDescricao(description)}</Description>
        <Link to={`/restaurante/${id}`}>
          <div>
            <Tag size="big">Saiba mais</Tag>
          </div>
        </Link>
      </Info>
    </Card>
  )
}

export default Restaurant
