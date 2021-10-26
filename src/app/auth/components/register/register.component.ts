import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name!:string
  pass!:string
  constructor(private _router: Router) { }
  onBackButtonClick():void{
    this._router.navigate(['/ad-page']);
  }
  ngOnInit(): void {
  }

}
