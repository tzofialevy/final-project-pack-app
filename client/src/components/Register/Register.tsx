import { useFormik } from 'formik';
import React, { FC, useEffect } from 'react';
import { User } from '../../types/user'
import * as Yup from 'yup'
import './Register.scss';
import { Button, Form } from 'react-bootstrap';
import userService from '../../services/userService';
import { useNavigate } from 'react-router';

interface RegisterProps { }

const Register: FC<RegisterProps> = () => {

  const _navigate = useNavigate();

  useEffect(() => { }, [])
  const sendDetails = (values: any) => {
    //alert("sendDetails func")
    userService.creatUser(values).then(data => {
      if (data) {
        console.log("ist work return data", data)
        _navigate('/home');
      }
      else
        return null;
    }

    )

  }
  const myFormik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    },
    onSubmit: values => {
      sendDetails(values);
    },
    // validationSchema: Yup.object().shape({
    //   firstname: Yup.string().required('שדה חובה'),
    //   lastname: Yup.string().required('שדה חובה'),
    //   password: Yup.string().required('שדה חובה').min(4).typeError("you must press at last 4 charcters"),
    //   email: Yup.string().required('שדה חובה'),
    // gender: Yup.string().required('שדה חובה')
    // })
  })


  return <div className='login-wrapper'>
    <Form onSubmit={myFormik.handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label> firstname</Form.Label>
        <Form.Control onChange={myFormik.handleChange}
          value={myFormik.values.firstname} name="firstname" id={'firstname'} placeholder="press your firstname" />
        {myFormik.errors.firstname ? <Form.Text >{myFormik.errors.firstname}</Form.Text> : ''}
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label> user lastname</Form.Label>
        <Form.Control onChange={myFormik.handleChange}
          value={myFormik.values.lastname} name="lastname" id={'lastname'} placeholder="press your lastname" />
        {myFormik.errors.lastname ? <Form.Text >{myFormik.errors.lastname}</Form.Text> : ''}
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label> password</Form.Label>
        <Form.Control onChange={myFormik.handleChange}
          value={myFormik.values.password} name="password" type='password' id="password" placeholder="press your password" />
        {myFormik.errors.password ? <Form.Text>{myFormik.errors.password}</Form.Text> : ''}
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label> email</Form.Label>
        <Form.Control onChange={myFormik.handleChange}
          value={myFormik.values.email} name="email" id={'email'} type={"email"} placeholder="press your email" />
        {myFormik.errors.email ? <Form.Text >{myFormik.errors.email}</Form.Text> : ''}
      </Form.Group>
      {/* <Form.Group className="mb-3" >
      <Form.Label>gender</Form.Label>
          <Form.Select onBlur={myFormik.handleChange} name="gender" id={'gender'} placeholder="press your gender" >
            <option >male</option>
            <option>female</option>
            <option selected>other</option>
          </Form.Select>
          // {myFormik.errors.gender ? <Form.Text >{myFormik.errors.gender}</Form.Text> : ''}
      </Form.Group> */}
      <Button type={"submit"}>register</Button>
    </Form>
  </div>
};

export default Register;


