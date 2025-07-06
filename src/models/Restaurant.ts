class Restaurant {
  title: string
  score: string
  description: string
  image: string
  tag: string[]
  id: number

  constructor(
    title: string,
    score: string,
    description: string,
    image: string,
    tag: string[],
    id: number
  ) {
    this.title = title
    this.score = score
    this.description = description
    this.image = image
    this.tag = tag
    this.id = id
  }
}

export default Restaurant
