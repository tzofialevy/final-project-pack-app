import { useFormik } from 'formik';
import React, { FC, useEffect, useState } from 'react';
import { FormControl, FormGroup, FormLabel, FormSelect, FormText, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Product } from '../../types/product';
import * as Yup from 'yup'
import categoryService from '../../services/categoryService';
import productService from '../../services/productService';
import { Categories } from '../../types/categories';
import { BsFillPencilFill } from "react-icons/bs";
import './EditProduct.scss'

interface EditProductProps {
  thisProduct: Product
}

const EditProduct = (props: EditProductProps) => {
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState<Categories[]>();


  useEffect(() => {
    categoryService.getAllCategories().then(res => {
      if (res)
        setCategories(res);
    })
  }, [])
  const handleClose = () => setShow(false);
  const save = (product: Product) => {
    console.log(props.thisProduct._id);


    // alert(props.thisProduct + " " + product._id + " ," + product.name + " " + product.category);
    product._id = props.thisProduct._id;
    productService.update(product);
    handleClose();
  }
  const handleShow = () => setShow(true);

  const myFormik = useFormik({
    initialValues: {} as Product,
    onSubmit: save,
    validationSchema: Yup.object().shape({
      name: Yup.string().required('שדה חובה')
    })
  })
  return (
    <>
      {/* <Button variant="primary"  id='btn'> */}
      <div ><BsFillPencilFill onClick={handleShow}></BsFillPencilFill>
      </div> {/* </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>edit product</Modal.Title>
        </Modal.Header>
        <Form onSubmit={myFormik.handleSubmit}>

          <Modal.Body>
            <FormGroup className="mb-3" >
              <FormLabel>product name</FormLabel>
              <FormControl onBlur={myFormik.handleChange} name="name" id={'name'} placeholder="press your name" />
              {myFormik.errors.name ? <FormText >{myFormik.errors.name}</FormText> : ''}
            </FormGroup>
            <FormGroup className="mb-3" >
              <FormLabel>product category</FormLabel>
           
              <FormSelect onBlur={myFormik.handleChange} name="category" id="category"  >
                {
                  categories?.map(x => { return <option key={x._id}>{x.name}</option> })
                }
              </FormSelect>
            </FormGroup>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type={"submit"}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default EditProduct;
