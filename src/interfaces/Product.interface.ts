
export interface IProductPresentation {
  id: string,
  presentation: string,
  units: number,
  cost: number
}

export interface IProduct {
  id: string,
  store_id: string,
  category_code: string,
  name: string,
  cost: number,
  images: string[],
  description: string,
  benefit: string,
  vegan: boolean,
  presentations: IProductPresentation[]
}
