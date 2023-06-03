import React, {useContext} from 'react';
import axios from "axios"
import { Trip } from "../types/trip"

export default new class TripService {

    // const dataCtx: any = useContext(dataContext);

    allTrips = [];
    allCategories = [];

    getAllCategories() {
        return axios.get(`http://localhost:8000/categories`)
            .then(result => {
                console.log('%c⧭', 'color: #917399', result);
                this.allCategories = result.data;
                return result.data;
            })
            .catch(error => {
                console.log('%c⧭', 'color: #d90000', error);
            })
    }
    // getUserByPassword(pass:string){
    //     return axios.get('users/'+pass).then((res)=>{
    //         if(res.status==200)
    //         return res.data
    //         return null
    //     })
    // }  
    getTripsByUserId(userId: string) {
        return axios.get(`http://localhost:8000/trips/${userId}`)
            .then(result => {
                console.log('%c⧭', 'color: #917399', result);

            })
            .catch(error => {
                console.log('%c⧭', 'color: #d90000', error);
            })
    }

    getTripById(id: string) {
        // alert(id)
        return axios.get<Trip>(`http://localhost:8000/trips/${id}`).then((res) => {

            if (res) {
                //  alert("what return?"+res.data)
                return res.data
            }
            return null;
        })
    }
    // getTripByObj(trip:Trip){
    //     return axios.get<Trip[]>('http://localhost:8000/trips').then(res=>{
    //         if(res){
    //            return res.data.map(x=>x.StartDate==trip.StartDate&&x.destination==trip.destination
    //                 &&x.endDate==trip.endDate&&x.name==trip.name&&x.products==trip.products&&x.status==trip.status?
    //                  x:'')
    //         }
    //     })
    // }
    create(trip: Trip, userId: string) {
        // return axios.delete("http://localhost:8000/trips"+trip.id).then();
        return axios.post('http://localhost:8000/trips/' + userId, trip).then((res) => {
            if (res.status === 200) {
                console.log("create succesfull");
                
                return res.data;
            }
        })
    }
}
