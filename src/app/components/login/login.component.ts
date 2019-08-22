import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Data: DataService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value

    this.Data.getUserDetails(username, password).subscribe(data => {
      if(data.success) {
        this.router.navigate(['dashboard'])
        this.Data.setLoggedIn(true)
      } else {
        window.alert(data.message)
      }
    })
    console.log(username, password)
  }

}
