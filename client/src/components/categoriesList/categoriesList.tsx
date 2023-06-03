import React, { useEffect, useState } from 'react';
import { Category } from '../../types/category';
import CategoryButton from '../categoryButton/catrgoryButton'
//import "./categoriesList.scss"

const CategoriesList = (props: { caregories: Category[] }) => {

    // const renderCategoreisButtons=():any=>{
    //     props.caregories.map(category=>{
    //         //alert(category.categoryId)
    //         return(   
    //       <CategoryButton category={category}></CategoryButton>)

    //     })
    // }
    return (
        <>
            <h1>CategoriesList</h1>
            {props.caregories.map((category: Category,index) => {
                return (<CategoryButton category={category} key={index}></CategoryButton>)
            })}
        </>
    );
}

export default CategoriesList;