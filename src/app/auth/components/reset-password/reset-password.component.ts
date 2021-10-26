import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private _router: Router) { }
  onBackButtonClick():void{
    this._router.navigate(['/ad-page']);
  }
  ngOnInit(): void {
  }

}
