import React, { useEffect, useState } from 'react'
import categoryService from '../../services/categoryService';
import { Category } from '../../types/category';
// import logo from './logo.png'
import CategoriesList from '../categoriesList/categoriesList'
import  './selectCategory.scss'
import data from "../../cat.json"

const images = [
    "https://us.123rf.com/450wm/ashva73/ashva731505/ashva73150500010/39466690-ilustraci%C3%B3n-vectorial-de-la-orilla-del-mar-con-palmeras.jpg",
    "https://raskraski-online-besplatno.ru/raskraski/transport/boat.jpg",
    "https://static.vecteezy.com/system/resources/previews/000/368/044/non_2x/vector-nature-scene-with-hiking-track-and-lake.jpg",
    "https://imgscf.slidemembers.com/docs/1/1/225/clothes_icons_224427.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy7R-j-OcwoT9d2KXYxBuQG-iZd2y2wPefOA&usqp=CAU",
    "https://cdn1.iconfinder.com/data/icons/circle-outlines-colored/512/T-shirt_Shirt_Design_Clothes_Clothing_Store-512.png",
    "https://imgscf.slidemembers.com/docs/1/1/225/clothes_icons_224425.jpg"


];





const SelectCategory=()=>{

    const [categories, setCat] = useState<Category[]>(data);

    useEffect(()=>{
        categoryService.getAll().then(res=>setCat(res))
    },[])
    return(
    <div>
        <h1>What are you going to do there?</h1>
        <CategoriesList caregories={categories}/>
        

        {/* <div className='gallery'>
            <button><img src={images[0]}/>Routes</button>
            <button><img src={images[1]}/>Attractions</button>
            <button><img src={images[2]}/></button>
            <button><img src={images[3]}/></button>
            <button><img src={images[4]}/></button>
            <button><img src={images[5]}/>Clothing</button>
            <button><img src={images[6]}/></button>
            <button><img src={images[7]}/></button>
        </div> */}
        
    </div>
       

    );
}
export default SelectCategory;