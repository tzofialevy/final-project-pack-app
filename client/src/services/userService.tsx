import axios from "axios"
import { User } from "../types/user"
import { Trip } from "../types/trip"


export default new class UserService {
    asigntUser!: User;
    login(email: string, password: string) {
        return axios.post('http://localhost:8000/users/getUserByEmailAndPassword',
            { email: email, password: password })
            .then(result => {
                console.log('%c⧭', 'color: #aa00ff', result);
                this.asigntUser = result.data;
                return result;
            })
            .catch(error => {
                console.log('%c⧭', 'color: #e50000', error);

            })
        // return this.getUserByEmailAndPassword(email, password).then(res => {
        //     if (res) {
        //         console.log('%c⧭', 'color: #00a3cc', res);
        //         // res.map((u:any) => {
        //         //     if (u.email == email && u.password == password) {
        //         //         this.asigntUser = u;
        //         //         return u;
        //         //     }
        //         // })
        //         //  console.log("asigntUser",this.asigntUser);
        //         if (!this.asigntUser)
        //             //alert("Oops... one or more from the value is incorrect")
        //         else
        //             return this.asigntUser;
        //     }

        //     return null;
        // }

        // )
    }
    creatUser(user: User) {
        //alert("creatUser func");
        return axios.post('http://localhost:8000/users/', user).then(res => {
            if (res.status == 200) {
                // this.login(user);
                console.log("res", res)
                this.asigntUser = res.data;
                return res.data;
            }
            return null;
        })

    }
    getAll() {
        return axios.get<User[]>('http://localhost:8000/users/').then((response) => {
            return response.data
        })
    }
    getUserByEmailAndPassword(email: string, pass: string) {
        return axios.post('http://localhost:8000/users/getUserByEmailAndPassword', { email: email, password: pass }).then((res) => {
            if (res.status == 200)
                return res.data
            return null
        })
    }
    updateUser(user: User) {
        return axios.put('http://localhost:8000/users/', user).then(res => {
            if (res) {
                console.log("update user succesfuly!", res.data);
                return res.data;
            }
        })
    }
    getUserById(id: string) {
        // //alert(id)
        return axios.get<User>('http://localhost:8000/users/' + id).then((res) => {

            if (res) {
                let trips: Trip[] = []
                res.data.trips.map(x => {
                    let current: Trip = x;
                    console.log("x", x);
                    current.StartDate = x.StartDate;
                    current.destination = x.destination;
                    current.endDate = x.endDate;
                    current._id = x._id;
                    current.name = x.name;
                    current.products = x.products;
                    current.status = x.status;
                    trips.push(current);
                })
                console.log("res.data.trips", res.data.trips);
                res.data.trips = trips;
                console.log("res.data.trips-after", res.data.trips);
                //  //alert("what return?"+res.data)
                return res.data
            }
            return null;
        })
    }
}