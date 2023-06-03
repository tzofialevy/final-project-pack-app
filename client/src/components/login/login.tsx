import { Formik, useFormik } from 'formik'
import React, { useEffect, useState, useContext } from 'react'
import { Button, Form, FormControl, FormGroup, FormLabel, FormText } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import * as Yup from 'yup'
import userService from '../../services/userService'
import { User } from '../../types/user'
import { dataContext } from '../../dataContexts';
import "./login.scss"
import Register from '../Register/Register'


const Login = () => {

  const _navigate = useNavigate();
  const dataCtx: any = useContext(dataContext);

  useEffect(() => {

  }, [])

  const login = (values: any) => {
    userService.login(values.email, values.password)
      .then((res: any) => {
        dataCtx.setAllTrips(res.data.trips)
        if (userService.asigntUser != null) {
          _navigate("/home");
        }
        else {
          _navigate('/register');
        }

      })
  }

  const myFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      login(values);
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required('שדה חובה').email(),
      password: Yup.string().min(4).typeError("the password soposed to contain mor then 4 letters").required('שדה חובה'),
    })
  })

  return (
    <div id='login' className="login-wrapper">
      <Form onSubmit={myFormik.handleSubmit}>
        <FormGroup className="mb-3" >
          <FormLabel> user name</FormLabel>
          <FormControl onChange={myFormik.handleChange}
            value={myFormik.values.email} name="email" type="email" id={'email'} placeholder="press your email" />
          {myFormik.errors.email ? <FormText >{myFormik.errors.email}</FormText> : ''}
        </FormGroup>
        <Form.Group className="mb-3" >
          <FormLabel> password</FormLabel>
          <FormControl onChange={myFormik.handleChange}
            value={myFormik.values.password} name="password" type='password' id="password" placeholder="press your password" />
          {myFormik.errors.password ? <FormText >{myFormik.errors.password}</FormText> :''}
        </Form.Group>
        <Button type="submit">Login</Button>
      </Form>
    </div>

  );
}

export default Login;


// <section className="vh-100">
// <div className="container-fluid h-custom">
//   <div className="row d-flex justify-content-center align-items-center h-100">
//     <div className="col-md-9 col-lg-6 col-xl-5">
//       <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
//         className="img-fluid" alt="Sample image"></img>
//     </div>
//     <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
//       <Form onSubmit={myFormik.handleSubmit}>
//         <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
//           <p className="lead fw-normal mb-0 me-3">Sign in with</p>
//           <Button type="button" className="btn btn-primary btn-floating mx-1">
//             <i className="fab fa-facebook-f"></i>
//           </Button>

//           <Button type="button" className="btn btn-primary btn-floating mx-1">
//             <i className="fab fa-twitter"></i>
//           </Button>

//           <Button type="button" className="btn btn-primary btn-floating mx-1">
//             <i className="fab fa-linkedin-in"></i>
//           </Button>
//         </div>

//         <div className="divider d-flex align-items-center my-4">
//           <p className="text-center fw-bold mx-3 mb-0">Or</p>
//         </div>

//         {/* <!-- Email input --> */}
//         <div className="form-outline mb-4">
//           <Form.Control  onBlur={myFormik.handleChange}  type="email" id="email" className="form-control form-control-lg"
//             placeholder="Enter a valid email address" ></Form.Control>
//           <label className="form-label" htmlFor="email">Email address</label>
//         </div>

//         {/* <!-- Password input --> */}
//         <div className="form-outline mb-3">
//           <Form.Control  onBlur={myFormik.handleChange}  type="password" id="password" className="form-control form-control-lg"
//             placeholder="Enter password" ></Form.Control>
//           <Form.Label className="form-label" htmlFor="password">Password</Form.Label>
//         </div>
//         {myFormik.errors.password ?  '':<div id="validationServer03Feedback" className="invalid-feedback">{ myFormik.errors.password}ok</div> }


//         <div className="d-flex justify-content-between align-items-center">
//           {/* <!-- Checkbox --> */}
//           <div className="form-check mb-0">
//             <Form.Control className="form-check-input me-2" type="checkbox" value="" id="form2Example3" ></Form.Control>
//             <Form.Label className="form-check-label" htmlFor="form2Example3">
//               Remember me
//               </Form.Label>

//           </div>
//           <a href="#!" className="text-body">Forgot password?</a>
//         </div>

//         <div className="text-center text-lg-start mt-4 pt-2">
//           <Button type="submit" className="btn btn-primary btn-lg"
//           id='btn'  >Login</Button>
//           <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
//               className="link-danger">Register</a></p>
//         </div>

//       </Form>
//     </div>
//   </div>
// </div>
// <div
//   className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
//   {/* <!-- Copyright --> */}
//   <div className="text-white mb-3 mb-md-0">
//     Copyright © 2020. All rights reserved.
//   </div>
//   {/* <!-- Copyright --> */}

//   {/* <!-- Right --> */}
//   <div>
//     <a href="#!" className="text-white me-4">
//       <i className="fab fa-facebook-f"></i>
//     </a>
//     <a href="#!" className="text-white me-4">
//       <i className="fab fa-twitter"></i>
//     </a>
//     <a href="#!" className="text-white me-4">
//       <i className="fab fa-google"></i>
//     </a>
//     <a href="#!" className="text-white">
//       <i className="fab fa-linkedin-in"></i>
//     </a>
//   </div>
//   {/* <!-- Right --> */}
// </div>
// </section>
