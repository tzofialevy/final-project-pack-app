import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const dataContext = createContext([]);

export default function DataContext(props) {

    const [selectedList, setSelectedList] = useState([]);
    const [allCategories, setAllCategories] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [tripData, setTripData] = useState([]);
    const [visible, setVisible] = useState(false);
    const [selectedTrip, setSelectedTrip] = useState();
    const [allTrips, setAllTrips] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/categories`)
            .then(result => {
                console.log('%c⧭', 'color: #917399', result);
                setAllCategories(result.data);
            })
            .catch(error => {
                console.log('%c⧭', 'color: #d90000', error);
            })
    }, []);

    return (
        <dataContext.Provider value={{
            selectedList: selectedList,
            allCategories: allCategories,
            setSelectedList: setSelectedList,
            setSelectedItems: setSelectedItems,
            selectedItems: selectedItems,
            tripData: tripData,
            setTripData: setTripData,
            setVisible: setVisible,
            visible: visible,
            selectedTrip: selectedTrip,
            setSelectedTrip, setSelectedTrip,
            allTrips: allTrips,
            setAllTrips: setAllTrips,
        }}>
            {props.children}
        </dataContext.Provider>
    );
}
