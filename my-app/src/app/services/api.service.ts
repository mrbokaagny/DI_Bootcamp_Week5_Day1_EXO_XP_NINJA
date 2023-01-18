import { Users } from "../models/user.model";
import { HttpClient } from '@angular/common/http'
import { Injectable } from "@angular/core";

@Injectable()

export class ApiService{

  users: Users[] = []

  endPoint = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http : HttpClient){}

  fetchData() : Promise<Users[]>{
    return new Promise((resolve , reject)=>{
      this.http.get(this.endPoint).subscribe((data : any)=>{
        this.users = data.map((item : Users) =>{
          return new Users(item.id , item.userId , item.title , item.body)
        })
        resolve(this.users)
      } ,
      (err)=>{
        reject(err)
      }
      )

    }
    )
  }

}


