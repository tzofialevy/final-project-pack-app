import axios from "axios"
import { Product } from "../types/product";

export default new class ProductService {

    async deleteProduct(id: string) {
        try {
            const response = await fetch(`http://localhost:8000/products/${id}`, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                },
            });
            
          }
          catch(error) {
            return error;
        }
      }
    // getUserByPassword(pass:string){
    //     return axios.get('users/'+pass).then((res)=>{
    //         if(res.status==200)
    //         return res.data
    //         return null
    //     })
    // }
    getProductById(id: string) {
        // //alert(id)
        return axios.get<Product>(`http://localhost:8000/products/${id}`).then((res) => {

            if (res) {
                return res.data
            }
            return null;
        })
    }
    getProducts() {
        return axios.get<Product[]>(`http://localhost:8000/products`).then((res) => {

            if (res) {
                return res.data
            }
            return null;
        })
    }
    create(product: Product) {
        return axios.post('http://localhost:8000/products',product).then((res) => {

            if (res.status===200) {
                  console.log("create succesfull")
            }
        })
    }
    update(product:Product){
        console.log("update in the service",product)
        return axios.put('http://localhost:8000/products/'+product._id,product).then(res=>{
            if(res.status==200){
                console.log('update succesfull!')
            }
            else{
                console.log('ther is some error...')

            }
        })
    }
}
