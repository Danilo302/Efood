class Food {
  title: string
  description: string
  image: string
  id: number

  constructor(title: string, decription: string, image: string, id: number) {
    this.title = title
    this.description = decription
    this.image = image
    this.id = id
  }
}

export default Food
