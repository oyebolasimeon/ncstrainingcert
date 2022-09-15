import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertViewComponent } from './cert-view/cert-view.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: "idi-aba", component: LandingPageComponent },
  { path: "my-certificate", component: CertViewComponent },
  { path: '', redirectTo: '/idi-aba', pathMatch: 'full' },
  { path: '**', redirectTo: '/idi-aba' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
