import { FC, useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Trip } from '../../types/trip';
import { User } from '../../types/user';
import userService from '../../services/userService';
import tripService from '../../services/tripService';
import Card from 'react-bootstrap/Card';
import '../OnePage/OnePage.scss';
import './../../data/countryImg'
import "./../../images/plus.png"
import { countryImg } from './../../data/countryImg';
import moment from 'moment';
import { dataContext } from '../../dataContexts';


interface OnePageProps { }

const OnePage: FC<OnePageProps> = () => {
  const dataCtx: any = useContext(dataContext);

  const [user, setUser] = useState<User>();
  const [allTrips, setAllTrips] = useState<string[]>([]);
  var str: string = "https://meda123.com/";
  var x = 0

  useEffect(() => {
    if (x == 0) {
      x++;
      matchIdImg();
    }
    tripService.getTripsByUserId(userService.asigntUser._id);
  }, [])

  const matchIdImg = () => {
    userService.asigntUser.trips.map(z => {
      countryImg.map(x => {
        if (x.name == z.destination) {
          setAllTrips((y) => ([...y, x.id]))
        }
      });
    })
    // userService.getUserById("63d04be88bc99c501c7bcab0").then(
    //   data => {
    //     if (data) {
    //       console.log("user", data)
    //       setUser(data);
    //       console.log("userTrips", user?.trips)
    //       data.trips.map((r: string) => {
    //         tripService.getTripById(r).then(
    //           res => {
    //             if (res) {
    //               countryImg.map(x => { if (x.name == res.destination) { sety((y) => ([...y, x.id])) } });
    //               console.log(y)
    //             }
    //           }
    //         )

    //       })
    //     }
    //     else
    //       console.log("error!");
    //   }
    // )
  }

  const deleteTrip = (tripId: string) => {

    console.log('%c⧭', 'color: #f200e2', 'in delete trip');
  }

  // const getCards = () => {
  //   return y.map(c => {
  //     return <Card style={{ width: '18rem' }} className='card'>
  //       <Card.Img variant="top" src={str + c + ".jpg"} />
  //       <Card.Body>
  //         <Card.Text>
  //           Some quick example text to build on the card title and make up the
  //           bulk of the card's content.
  //         </Card.Text>
  //       </Card.Body>
  //     </Card>
  //   })
  // }

  return (
    <div className="">
      <Link to={'/AddList'}>
        <button className="btn btn-primary fixed-bottom btnNewTrip m-5">
          {/* <BsPlusLg></BsPlusLg> */}
          New Trip
        </button>
      </Link>
      <div className='ass' >
        {
          dataCtx.allTrips?.length > 0 ?
            dataCtx.allTrips.map((c: any) => {
              return <div className='cardParent m-1'>
                <div className='card p-3' onClick={() => { dataCtx.setVisible(true); dataCtx.setSelectedTrip(c) }}>
                  {/* <img className='card-img-top' src={image} /> */}
                  {/* src={str + c + ".jpg"} /> */}
                  <div className='card-body p-1'>
                    <div className='card-title'>{c.name}</div>
                    {/* <div className='text-mute'>{c.status}</div> */}
                    <div className='card-subtitle'>{c.destination}</div>
                    <div className='card-text'>
                      <strong>{c.status}</strong>
                      <div className='smallText'>{moment(c.StartDate).format('MMMM DD')} - {moment(c.endDate).format('MMMM DD, YYYY')}</div>
                    </div>
                    {/* <button onClick={() => deleteTrip(c._id)} className="btn btn-primary p-2 mt-5">delete trip</button> */}
                  </div>
                </div>
              </div>
            })
            :
            <div className='noData m-5'>You have no previous trips.</div>
        }
      </div>
    </div>
  )
};
// < !--Button trigger modal-- >
// <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
//   Launch demo modal
// </button>

// <!--Modal -->
export default OnePage;
