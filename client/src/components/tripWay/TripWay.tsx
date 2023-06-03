import { useEffect, useState, useContext } from "react";
import { RiHotelLine } from 'react-icons/ri';
import { BiHomeAlt, BiBus, BiTrain } from 'react-icons/bi';
import { MdPeopleOutline, MdOutlineSportsMotorsports, MdHiking, MdWorkOutline } from 'react-icons/md';
import { GiCampingTent, GiCruiser, GiPayMoney, GiMeal, GiWaveCrest } from 'react-icons/gi';
import { TfiCar } from 'react-icons/tfi';
import { IoAirplaneOutline, IoBoatOutline, IoShirtOutline, IoSettingsOutline } from 'react-icons/io5';
import { IoIosFitness } from 'react-icons/io';
import { FaSnowboarding, FaPumpSoap, FaGlobeAmericas } from 'react-icons/fa';
import { AiOutlineCamera } from 'react-icons/ai';
import { TbSwimming } from 'react-icons/tb';
import { useNavigate } from 'react-router';
import { dataContext } from '../../dataContexts';

import './TripWay.scss';

export default function TripWay() {

    // const [selectedList, setSelectedList] = useState(['']);
    const dataCtx: any = useContext(dataContext);

    const _navigate = useNavigate();

    useEffect(() => {

        console.log('%c⧭', 'color: #731d6d', dataCtx.selectedList);
        // return (dataCtx.setSelectedList(selectedList));
    },[dataCtx.selectedList]);

    const addSelection = (selection: string) => {
        if (!(dataCtx.selectedList.find((x: any) => x === selection))) {
            dataCtx.setSelectedList([...dataCtx.selectedList, selection])
        }
        else {
            let arr = [...dataCtx.selectedList];
            arr.splice(arr.indexOf(selection), 1);
            dataCtx.setSelectedList(arr);
        }
    }

    return (
        <div className="TripWay">
            <h3 className="my-1">Select the way of the trip</h3>
            <div className="Accomodation mt-5">
                <h5>Accomodation</h5>
                <div
                    className={`way ${ dataCtx.selectedList.find((x:any) => x === 'Hotel') ? 'selected' : ''}`}
                    onClick={() => { addSelection( 'Hotel') }}
                >
                    <div>
                        <span>Hotel</span>
                        <div><RiHotelLine /></div>
                    </div>
                </div>
                <div
                    className={`way ${ dataCtx.selectedList.find((x:any) => x === 'Rental') ? 'selected' : ''}`}
                    onClick={() => { addSelection( 'Rental') }}
                >
                    <div>
                        <span>Rental</span>
                        <div><BiHomeAlt /></div>
                    </div>
                </div>
                <div
                    className={`way ${ dataCtx.selectedList.find((x:any) => x === 'Family/Friends') ? 'selected' : ''}`}
                    onClick={() => { addSelection( 'Family/Friends') }}
                >
                    <div>
                        <span>Family/Friends</span>
                        <div><MdPeopleOutline /></div>
                    </div>
                </div>
                <div
                    className={`way ${ dataCtx.selectedList.find((x:any) => x === 'Second Home') ? 'selected' : ''}`}
                    onClick={() => { addSelection( 'Second Home') }}
                >
                    <div>
                        <span>Second Home</span>
                        <div><GiPayMoney /></div>
                    </div>
                </div>
                <div
                    className={`way ${ dataCtx.selectedList.find((x:any) => x === 'Camping') ? 'selected' : ''}`}
                    onClick={() => { addSelection( 'Camping') }}
                >
                    <div>
                        <span>Camping</span>
                        <div><GiCampingTent /></div>
                    </div>
                </div>
                <div
                    className={`way ${ dataCtx.selectedList.find((x:any) => x === 'Cruise') ? 'selected' : ''}`}
                    onClick={() => { addSelection( 'Cruise') }}
                >
                    <div>
                        <span>Cruise</span>
                        <div><GiCruiser /></div>
                    </div>
                </div>
            </div>
            <div className="Transportation mt-5">
                <h5>Transportation</h5>
                <div
                    className={`way ${ dataCtx.selectedList.find((x:any) => x === 'Airplane') ? 'selected' : ''}`}
                    onClick={() => { addSelection( 'Airplane') }}
                >
                    <div>
                        <span>Airplane</span>
                        <div><IoAirplaneOutline /></div>
                    </div>
                </div>
                <div
                    className={`way ${ dataCtx.selectedList.find((x:any) => x === 'Car') ? 'selected' : ''}`}
                    onClick={() => { addSelection( 'Car') }}
                >
                    <div>
                        <span>Car</span>
                        <div><TfiCar /></div>
                    </div>
                </div>
                <div
                    className={`way ${ dataCtx.selectedList.find((x:any) => x === 'Train') ? 'selected' : ''}`}
                    onClick={() => { addSelection( 'Train') }}
                >
                    <div>
                        <span>Train</span>
                        <div><BiTrain /></div>
                    </div>
                </div>
                <div
                    className={`way ${ dataCtx.selectedList.find((x:any) => x === 'Motorcycle') ? 'selected' : ''}`}
                    onClick={() => { addSelection( 'Motorcycle') }}
                >
                    <div>
                        <span>Motorcycle</span>
                        <div><MdOutlineSportsMotorsports /></div>
                    </div>
                </div>
                <div
                    className={`way ${ dataCtx.selectedList.find((x:any) => x === 'Boat') ? 'selected' : ''}`}
                    onClick={() => { addSelection( 'Boat') }}
                >
                    <div>
                        <span>Boat</span>
                        <div><IoBoatOutline /></div>
                    </div>
                </div>
                <div
                    className={`way ${ dataCtx.selectedList.find((x:any) => x === 'Bus') ? 'selected' : ''}`}
                    onClick={() => { addSelection( 'Bus') }}
                >
                    <div>
                        <span>Bus</span>
                        <div><BiBus /></div>
                    </div>
                </div>
            </div>
            <div className="Activities/Items mt-5">
                <h5>Activities/Items</h5>
                <div
                    className={`way ${ dataCtx.selectedList.find((x:any) => x === 'Essentials') ? 'selected' : ''}`}
                    onClick={() => { addSelection( 'Essentials') }}
                >
                    <div>
                        <span>Essentials</span>
                        <div><IoSettingsOutline /></div>
                    </div>
                </div>
                <div
                    className={`way ${ dataCtx.selectedList.find((x:any) => x === 'Clothes') ? 'selected' : ''}`}
                    onClick={() => { addSelection( 'Clothes') }}
                >
                    <div>
                        <span>Clothes</span>
                        <div><IoShirtOutline /></div>
                    </div>
                </div>
                <div
                    className={`way ${ dataCtx.selectedList.find((x:any) => x === 'International') ? 'selected' : ''}`}
                    onClick={() => { addSelection( 'International') }}
                >
                    <div>
                        <span>International</span>
                        <div><FaGlobeAmericas /></div>
                    </div>
                </div>
                <div
                    className={`way ${ dataCtx.selectedList.find((x:any) => x === 'Work') ? 'selected' : ''}`}
                    onClick={() => { addSelection( 'Work') }}
                >
                    <div>
                        <span>Work</span>
                        <div><MdWorkOutline /></div>
                    </div>
                </div>
                <div
                    className={`way ${ dataCtx.selectedList.find((x:any) => x === 'Personal Care') ? 'selected' : ''}`}
                    onClick={() => { addSelection( 'Personal Care') }}
                >
                    <div>
                        <span>Personal Care</span>
                        <div><FaPumpSoap /></div>
                    </div>
                </div>
                <div
                    className={`way ${ dataCtx.selectedList.find((x:any) => x === 'Beach') ? 'selected' : ''}`}
                    onClick={() => { addSelection( 'Beach') }}
                >
                    <div>
                        <span>Beach</span>
                        <div><GiWaveCrest /></div>
                    </div>
                </div>
                <div
                    className={`way ${ dataCtx.selectedList.find((x:any) => x === 'Swimming') ? 'selected' : ''}`}
                    onClick={() => { addSelection( 'Swimming') }}
                >
                    <div>
                        <span>Swimming</span>
                        <div><TbSwimming /></div>
                    </div>
                </div>
                <div
                    className={`way ${ dataCtx.selectedList.find((x:any) => x === 'Photography') ? 'selected' : ''}`}
                    onClick={() => { addSelection( 'Photography') }}
                >
                    <div>
                        <span>Photography</span>
                        <div><AiOutlineCamera /></div>
                    </div>
                </div>
                <div
                    className={`way ${ dataCtx.selectedList.find((x:any) => x === 'Snow sports') ? 'selected' : ''}`}
                    onClick={() => { addSelection( 'Snow sports') }}
                >
                    <div>
                        <span>Snow sports</span>
                        <div><FaSnowboarding /></div>
                    </div>
                </div>
                <div
                    className={`way ${ dataCtx.selectedList.find((x:any) => x === 'Fitness') ? 'selected' : ''}`}
                    onClick={() => { addSelection( 'Fitness') }}
                >
                    <div>
                        <span>Fitness</span>
                        <div><IoIosFitness /></div>
                    </div>
                </div>
                <div
                    className={`way ${ dataCtx.selectedList.find((x:any) => x === 'Hiking') ? 'selected' : ''}`}
                    onClick={() => { addSelection( 'Hiking') }}
                >
                    <div>
                        <span>Hiking</span>
                        <div><MdHiking /></div>
                    </div>
                </div>
                <div
                    className={`way ${ dataCtx.selectedList.find((x:any) => x === 'Business Meals') ? 'selected' : ''}`}
                    onClick={() => { addSelection( 'Business Meals') }}
                >
                    <div>
                        <span>Business Meals</span>
                        <div><GiMeal /></div>
                    </div>
                </div>
            </div>
            <button className="btn my-5" onClick={() => _navigate('/Products')}>Move to select the items {"->"}</button>
        </div>
    )
}