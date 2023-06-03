import { useState, useEffect, useContext } from 'react';
import { AccordionTab, Accordion } from 'primereact/accordion';
import { dataContext } from '../../dataContexts';
import { Link, useNavigate } from 'react-router-dom';
import './products.scss'
import tripService from '../../services/tripService';
import userService from '../../services/userService';

export default function Products() {

    const dataCtx: any = useContext(dataContext);

    const [newItems, setNewItems] = useState(['']);

    const _navigate = useNavigate();

    const addSelectedItem = (e: any) => {

        if (e.target.checked && !(dataCtx.selectedItems.find((x: any) => x === e.target.nextSibling.innerText))) {
            dataCtx.setSelectedItems([...dataCtx.selectedItems, e.target.nextSibling.innerText])
        }
        else {
            let arr = [...dataCtx.selectedItems];
            arr.splice(arr.indexOf(e.target.nextSibling.innerText), 1);
            dataCtx.setSelectedItems(arr);
        }
    }

    const addNewItem = (e: any) => {
        if (e.key === 'Enter') {
            setNewItems([...newItems, e.target.value])
            e.target.value = '';
        }
    }

    const createNewTrip = () => {
        let data = dataCtx.tripData;
        data.products = newItems.concat(...dataCtx.selectedItems);
        tripService.create(data, userService.asigntUser._id).then(
            res => {
                if (res) {
                    dataCtx.setAllTrips(res);
                    console.log('%c⧭', 'color: #0088cc', res);
                    _navigate('/home');
                    dataCtx.setSelectedTrip = null;
                    dataCtx.setTripData = [];
                    dataCtx.setSelectedItems = [];
                    dataCtx.setSelectedList = [];
                }
            }
        );
    }

    return (
        <div className='Products'>
            <div className='back'>
                <Link to={'/TripWay'}>BACK</Link>
            </div>
            <h3 className=''>Select your items to travel.</h3>
            <Accordion multiple activeIndex={[0]}>
                {
                    dataCtx.allCategories?.map(
                        (c: { _id: string, name: string, products: [] }) => {
                            if (dataCtx.selectedList?.find((p: any) => p === c.name)) {

                                return (
                                    <AccordionTab header={c.name} key={c._id}>
                                        {
                                            c.products.map((p: { name: string, _id: string }) => {
                                                return (
                                                    <div className="form-check" key={p._id}>
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id={p._id}
                                                            onChange={(e: any) => addSelectedItem(e)} />
                                                        <label className="form-check-label" htmlFor={p._id} >
                                                            {p.name}
                                                        </label>
                                                    </div>
                                                )
                                            })
                                        }
                                    </AccordionTab>
                                )
                            }
                        }
                    )
                }
                <AccordionTab header={'New'} key={'new'}>
                    {
                        newItems.map((p: string) => {
                            if (p !== '')
                                return (
                                    <div className="form-check" key={p}>
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id={p}
                                            defaultChecked
                                            onChange={(e: any) => addSelectedItem(e)} />
                                        <label className="form-check-label" htmlFor={p} >
                                            {p}
                                        </label>
                                    </div>
                                )
                        })
                    }
                    <input
                        type="text"
                        className="form-control"
                        onKeyUp={(e: any) => addNewItem(e)} />
                </AccordionTab>
            </Accordion>
            <Link to={'/home'}>
                <button className="btn btn-primary btnNewTrip m-5" onClick={createNewTrip}>
                    {/* <BsPlusLg></BsPlusLg> */}
                    Create
                </button>
            </Link>
        </div >
    )
}










// import React, { FC, useEffect, useState } from "react";
// import { Table } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import userService from "../../services/userService";
// import { Product } from "../../types/product";
// import { User } from "../../types/user";
// import EditProduct from "../EditProduct/EditProduct";
// import productService from "./../../services/productService";
// // import './products.scss'

// // import withRouter, { IWithRouter } from "./withRouter";

// // type Prop = ProductProps
// // interface ProductProps{
// //   product:Product;

// // }
// interface OneProductProps { }
// const OneProduct: FC<OneProductProps> = () => {
//     const [products, setProducts] = useState<Product[]>();
//     const [product, setProduct] = useState<Product>();
//     const [user, setUser] = useState<User>();

//     useEffect(() => {
//         userService.getUserById("63d04be88bc99c501c7bcab0").then(res => {
//             if (res)
//                 setUser(res);
//         });

//         productService.getProducts().then(data => {
//             if (data) {
//                 setProducts(data);
//                 data.map(x => { return x._id });
//             }
//             // console.log("service.getproducts",data);
//         });
//         productService.getProductById("63dbfb021cf8ac52ee7b85ac").then(data => {
//             if (data) {
//                 setProduct(data);
//             }
//         });
//     }, [])


//     //סינון ראשוני

//     //fetch
//     //סינון לפי שם מוצר
//     // searchByName(str:string){

//     //     this.setState({arr_products: Product.filter(x=>x.name.includes(str))},
//     //       )
//     //     }

//     const deleteProduct = (id: string) => {
//         productService.deleteProduct(id)
//             .then(data => {
//                 if (data)
//                     console.log('%c⧭', 'color: #733d00', data);
//             })
//             .catch(error => {
//                 console.log('%c⧭', 'color: #00bf00', error);
//             })
//     }


//     return (
//         <div>
//             {/* <button onClick={x=>console.log(products)}></button> */}
//             {/* <input id="input-name"  className="form-control me-2" type="text"  placeholder="Search" onChange={(e)=>this.searchByName(e.target.value)}/> */}
//             <Table>
//                 <thead>
//                     <tr className="pad">
//                         <th>name</th>
//                         <th>id</th>
//                         <th>category</th>
//                         <th></th>
//                     </tr>
//                 </thead>
//                 <tbody >
//                     {products?.map(x => {
//                         //  console.log("x.category", x.category)
//                         return <tr className="pad">
//                             <td>{x.name}</td>
//                             <td>{x._id}</td>
//                             <td>{"" + x.category?.name}</td>
//                             <td><EditProduct thisProduct={x}></EditProduct></td>
//                             {user?._id === "12" ? <td><EditProduct thisProduct={x} /></td> : ''}
//                         </tr>
//                     })}
//                     {/* <tr>
//                         <td colSpan={3}>
//                             <Link to={`/EditProduct/${product?._id}`}>
//                                 <button>EditProduct</button>
//                             </Link>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td colSpan={3}>
//                             <button onClick={async () => {
//                                 deleteProduct("636bb2d8e30f0fe017768809");
//                             }}>DeleteProduct</button>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td colSpan={3}>
//                             <Link to={`/Product/${product?._id}`}>
//                                 <button >view</button>
//                             </Link>
//                         </td>
//                     </tr> */}
//                 </tbody>
//             </Table>
//         </div>
//     )

// }


// export default OneProduct;