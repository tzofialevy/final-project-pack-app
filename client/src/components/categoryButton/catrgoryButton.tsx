import React from 'react';
import { Category } from '../../types/category';
//import "./categoryButton.scss"

const CategoryButton=(props:{category:Category})=>{

    return(
        <div className="categoty-button">
            <h1>CategoryButton</h1>
            <h4>{props.category.categoryId}</h4> 
            <h4>{props.category.header}</h4> 
            <h4>{props.category.icon}</h4> 
         
            {/* <fontawsom icon={props.caregory.icon}></fontawsom>   */}
        </div>
    );
}
export default CategoryButton;
