import { Component , OnInit } from '@angular/core';
import { Users } from '../models/user.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {

  users : Users[] = []

  constructor(private service:ApiService) {}

  ngOnInit(): void {
    this.getData()
  }


  getData(){
    this.service.fetchData().then((data : Users[])=>{
      this.users = data
    })
  }

}
