import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name!:string
  pass!:string
  //constructor() { }
  constructor (private _router: Router){
  }
  onBackButtonClick():void{
    this._router.navigate(['/ad-page']);
  }
  ngOnInit(): void {
  }

}

/*import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name!:string
  //constructor() { }
  constructor (private _router: Router){
  }
  onBackButtonClick():void{
    this._router.navigate(['/ad-page']);
  }
  ngOnInit(): void {
  }

}*/
