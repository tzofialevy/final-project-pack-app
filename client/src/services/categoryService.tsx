import axios from "axios"
// import data from '../cat.json';
export default new class CategoryService {
    getAll() {
     
       return axios.get('../cat.json').then((response)=>{
       return response.data
        })

    }
    getAllCategories() {
        return axios.get('http://localhost:8000/categories/').then((response) => {
            return response.data
        })
    }
}