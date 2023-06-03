import React, { FC, useEffect, useState, useContext } from 'react';
import axios from 'axios'
import { useFormik } from 'formik'
import { FormGroup, FormLabel, FormControl, FormText, Button, Form } from 'react-bootstrap';
import { Trip } from '../../types/trip';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { Calendar, CalendarValueType } from 'primereact/calendar';
import tripService from '../../services/tripService';
import * as Yup from 'yup'
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './AddList.scss';
import { GiIsland, GiSuitcase, GiCheckMark } from 'react-icons/gi';
import userService from '../../services/userService';
import { useNavigate } from 'react-router'
import { dataContext } from '../../dataContexts';


interface AddListProps { }

const AddList = () => {
  const [cities, setCities] = useState<{ name: string; id: string }[]>([]);
  // const [dates, setDates] = useState<CalendarValueType>([]);
  const [date1, setDate1] = useState(null);
  const [date2, setDate2] = useState(null);
  const [destination, setDestination] = useState('');
  const [tripType, setTripType] = useState('vacation');
  const dataCtx: any = useContext(dataContext);


  const _navigate = useNavigate();

  const handleOnSearch = (string: any, results: any) => { console.log(string, results); }
  const handleOnHover = (result: any) => { console.log(result); }
  const handleOnSelect = (item: any) => { setDestination(item.name) }
  const handleOnFocus = () => { console.log('Focused'); }


  const submits = (values: any) => {
    var trip: Trip = {
      _id: '',
      name: values.name,
      destination: destination,
      tripType: tripType,
      // passengers: values.passengers,
      StartDate: date1 + "",
      endDate: date2 + "",
      products: [],
      img: '',
      status: 'planing',
    }
    dataCtx.setTripData(trip);
    // tripService.create(trip, userService.asigntUser._id).then(
    //   res => {
    //     if (res) {
    //       console.log('%c⧭', 'color: #0088cc', res);
    _navigate("/TripWay");

    //     }
    //   }
    // );
    // const user = userService.asigntUser
    // user.trips.push(res._id)
    // userService.updateUser(user).then(
    //   res => {
    //     if (res) {
    //       userService.asigntUser = res;
    //       //alert("update the trip in user  :"+res);
    //     }
    //   }
    // );

    //alert(trip.StartDate + " " + trip.destination + " " + trip.endDate + " " + trip.name + " ")
  }

  const myFormik = useFormik({
    initialValues: {
      name: '',
      destination: '',
      // passengers: 0,
    },
    onSubmit: (values) => submits(values),
    // validationSchema: Yup.object().shape({
    //   name: Yup.string().required('שדה חובה')
    // })
  });
  useEffect(() => {
    axios.get('https://countriesnow.space/api/v0.1/countries/capital')
      // axios.get('https://countriesnow.space/api/v0.1/countries/population/cities')
      .then(
        city => {
          console.log(city);
          setCities(city.data.data);
        })
  }, [])

  return (
    <div className="addList">
      <Form onSubmit={myFormik.handleSubmit}>
        <FormGroup className="mb-2" >
          <FormLabel> your trip name</FormLabel>
          <FormControl onChange={myFormik.handleChange} value={myFormik.values.name} name="name" id={'name'} placeholder="trip name" />
          {myFormik.errors.name ? <FormText >{myFormik.errors.name}</FormText> : ''}
        </FormGroup>
        <FormGroup className="mb-2" >
          <FormLabel> select your destination</FormLabel>
          <ReactSearchAutocomplete
            items={cities}
            // key={cities => { return c.id }}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            styling={{ zIndex: 4 }} // To display it on top of the search box below
            maxResults={100}
            autoFocus />
        </FormGroup>
        {/* <FormGroup>
          <FormLabel htmlFor='passengers'>Enter the number of passengers</FormLabel>
          <FormControl onChange={myFormik.handleChange} value={myFormik.values.passengers} type='number' name='passengers'></FormControl>
        </FormGroup> */}
        <FormGroup>
          <FormLabel htmlFor="icon">Enter travel date</FormLabel>
          <Calendar id="icon" value={date1} className='formcontrol' onChange={(e: any) => setDate1(e.value)} showIcon />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="icon">Enter a return date</FormLabel>
          <Calendar id="icon" value={date2} className='formcontrol' onChange={(c: any) => setDate2(c.value)} showIcon />
        </FormGroup>

        {/* <FormGroup> */}
        {/* <FormLabel htmlFor="icon">Enter travel dates</FormLabel> */}
        {/* <Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" readOnlyInput /> */}
        {/* </FormGroup> */}
        <div>
          <div className={`tripType ${tripType === 'vacation' ? 'selected' : ''}`} onClick={e => setTripType('vacation')}>
            <GiIsland />
          </div>
          <div className={`tripType ${tripType === 'business' ? 'selected' : ''}`} onClick={e => setTripType('business')}>
            <GiSuitcase />
          </div>
        </div>
        <button className='btn m-3' type={"submit"} disabled={false}>Next</button>
      </Form>
    </div>)
};

export default AddList;




