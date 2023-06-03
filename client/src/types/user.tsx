import { Trip } from "./trip"

export type User={
    _id:string,
    firstname: string,
    lastname: string,
    password:string,
    email?:string,
    gender?:"female"|"male"|"other",
    trips:Trip[]

 

}