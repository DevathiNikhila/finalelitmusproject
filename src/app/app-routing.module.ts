import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdPageComponent } from './auth/components/ad-page/ad-page.component';

const routes: Routes = [{path: 'ad-page',component: AdPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
