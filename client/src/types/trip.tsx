import { Product } from "./product"

export type Trip = {
    _id: string,
    name: string,
    destination: string,
    StartDate: string,
    endDate: string,
    img: string,
    tripType: string,
    status: 'planing' | 'creating' | 'packing',
    products: Product[]
}