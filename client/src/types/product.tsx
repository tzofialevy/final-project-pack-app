import { Categories } from "./categories"

export type Product={
    _id:string,
    name: string,
    // category:Categories,
    // categories?:Categories[]
    //  categories: [{ type: mongoose.Schema.Category.ObjectId, ref: 'Category' }]
}