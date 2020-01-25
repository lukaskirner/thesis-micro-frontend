
export default interface Item {
  id: number
  name: string
  price: number
  info: {
    collection: string
    color: string
    size: [string]
  }
  images: [string]
}
